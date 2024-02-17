import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { InicioComponent } from '../inicio/inicio.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    AppComponent,
    RouterLink,
    InicioComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

