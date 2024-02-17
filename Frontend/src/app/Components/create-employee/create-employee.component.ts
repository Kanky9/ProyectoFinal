import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../Services/employee.service';
import { InicioComponent } from '../inicio/inicio.component';
import { HeaderComponent } from '../header/header.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    FormsModule,
    ListEmployeeComponent,
    InicioComponent,
    HeaderComponent,
    
  ],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
  providers: [EmployeeService, Employee]
})
export class CreateEmployeeComponent implements OnInit{
  
  employee: Employee = new Employee(); // Instancia de un nuevo empleado

  constructor(private employeeService: EmployeeService, private route: Router) {}

  // Método que se llama cuando se inicia el componente
  ngOnInit(): void {
    // No hay operaciones específicas en la inicialización en este caso
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    this.insertEmployee(); // Llamar al método para insertar el empleado
    console.log(this.employee); // Mostrar los datos del empleado en la consola
  }

  // Método para insertar un nuevo empleado
  insertEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => { // Suscribirse al servicio para crear un nuevo empleado
      this.goToEmployeeList(); // Redirigir a la lista de empleados después de la inserción
      console.log(data); // Mostrar la respuesta del servicio en la consola
    });
  }

  // Método para redirigir a la lista de empleados
  goToEmployeeList() {
    this.route.navigate(['/list']); // Redireccionar a la ruta '/list' que muestra la lista de empleados
  }
}