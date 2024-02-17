import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../header/header.component';
import { ListEmployeeComponent } from '../list-employee/list-employee.component';
import { RouterLink } from '@angular/router';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { FooterComponent } from '../footer/footer.component';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    RouterLink,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
