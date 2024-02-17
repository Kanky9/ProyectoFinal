import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { HeaderComponent } from '../header/header.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CreateEmployeeComponent,
    HeaderComponent,
    InicioComponent,
    ListEmployeeComponent,
  ],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
  providers: [
    EmployeeService,
    Router,
    Employee
  ]
})
export class UpdateEmployeeComponent implements OnInit{

  // Propiedades del componente:
  id!: number; // Almacena el ID del empleado a editar (no puede ser nulo ni undefined)
  employee: Employee = new Employee(); // Objeto para almacenar los datos del empleado

  constructor(
    private employeeService: EmployeeService, // Servicio para interactuar con los datos de empleados
    private route: ActivatedRoute, // Servicio para obtener información de la ruta actual
    private router: Router // Servicio para navegar entre rutas
  ) {}

  // Se ejecuta al inicializar el componente:
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Obtiene el ID del empleado de los parámetros de la ruta
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      // Obtiene los datos del empleado desde el servicio y los asigna a la propiedad 'employee'
      this.employee = data;
    });
  }

  // Se ejecuta al enviar el formulario de edición:
  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      // Actualiza los datos del empleado en el servidor
      this.goToEmployeeList(); // Redirige a la lista de empleados
      this.employee = data; // Actualiza el objeto empleado con la respuesta del servidor
    });
  }

  // Navega a la lista de empleados:
  goToEmployeeList() {
    this.router.navigate(['/list']);
  }
}