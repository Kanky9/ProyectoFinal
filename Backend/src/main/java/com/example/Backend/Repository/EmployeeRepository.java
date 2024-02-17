package com.example.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Backend.Models.Employee;

// Anotación @Repository para indicar que esta interfaz es un repositorio de datos
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    // JpaRepository es una interfaz de Spring Data JPA que proporciona métodos para
    // operaciones CRUD en la base de datos

    // No es necesario definir métodos para operaciones CRUD básicas, JpaRepository
    // proporciona métodos como save(), findById(), findAll(), deleteById(), etc.
    // Además, se proporcionan métodos para la paginación, clasificación y otras
    // operaciones comunes.

    // Por ejemplo, para guardar un nuevo empleado en la base de datos, se puede
    // llamar al método save() heredado de JpaRepository:
    // save(Employee employee);

    // Para buscar un empleado por su ID:
    // findById(Integer id);

    // Para eliminar un empleado por su ID:
    // deleteById(Integer id);

    // JpaRepository también admite consultas personalizadas utilizando convenciones
    // de nombres de método y consultas JPQL.
    // Por ejemplo, si se necesita una consulta personalizada para buscar empleados
    // por su nombre, se puede definir un método en esta interfaz con un nombre que
    // siga la convención de nombres de método de Spring Data JPA.
}