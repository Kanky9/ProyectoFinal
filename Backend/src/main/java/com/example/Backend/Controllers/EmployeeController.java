package com.example.Backend.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired; //Si no arranca el springBoot borrar, y cuando arranque volver a agregarlo.
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Backend.Exception.ResourceNotFoundException;
import com.example.Backend.Models.Employee;
import com.example.Backend.Repository.EmployeeRepository;

// Anotación @RestController para indicar que esta clase es un controlador REST
@RestController
// Anotación @RequestMapping para mapear las solicitudes HTTP a este controlador
@RequestMapping("/api")
// Anotación @CrossOrigin para permitir solicitudes desde el origen especificado
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    // Inyección de dependencia del repositorio de empleados
    @Autowired // Si no arranca el springBoot borrar Autowired, y cuando arranque volver a agregarlo.
    private EmployeeRepository employeeRepository;

    // Método para obtener todos los empleados
    @GetMapping("/list")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Método para crear un nuevo empleado
    @PostMapping("/new")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // Método para obtener un empleado por su ID
    @GetMapping("/get/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {

        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id" + id));

        return ResponseEntity.ok(employee);
    }

    // Método para actualizar un empleado
    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id" + id));

        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setSalary(employeeDetails.getSalary());
        employeeRepository.save(employee);

        return ResponseEntity.ok(employee);
    }

    // Método para eliminar un empleado
    @DeleteMapping("delete/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id" + id));

        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}