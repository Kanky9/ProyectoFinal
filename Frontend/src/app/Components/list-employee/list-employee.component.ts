import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [
    AppComponent,
    HttpClientModule,
    RouterLink,
    UpdateEmployeeComponent
  ],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css',
  providers: [
    EmployeeService,
    Router,
  ]
})
export class ListEmployeeComponent implements OnInit{
  
  employees: Employee[] = []; // Arreglo de empleados

  constructor(private employeeService: EmployeeService, private router: Router) {}

  // Método que se llama cuando se inicia el componente
  ngOnInit(): void {
    this.getEmployees(); // Obtener la lista de empleados al iniciar
  }

  // Método privado para obtener la lista de empleados desde el servicio
  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => { // Suscribirse al servicio para obtener los datos
      this.employees = data; // Asignar los empleados recibidos al arreglo local
    });
  }

  // Método para redirigir a la página de actualización de un empleado según su ID
  updateEmployee(id: number) {
    this.router.navigate(["update", id]); // Redireccionar a la ruta "update" con el ID del empleado
  }

  // Método para eliminar un empleado según su ID
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data => { // Suscribirse al servicio para eliminar el empleado
      console.log(data); // Registrar la respuesta del servicio en la consola
      this.getEmployees(); // Volver a cargar la lista de empleados después de eliminar uno
    });
  }

}