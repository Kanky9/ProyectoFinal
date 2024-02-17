import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './Components/list-employee/list-employee.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';

export const routes: Routes = [

    {
        path: 'inicio',
        component: InicioComponent
    },

    {
        path: 'header', 
        component: HeaderComponent
    },

    {
        path: 'footer', 
        component: FooterComponent
    },

    {
        path: 'list', 
        component: ListEmployeeComponent
    },

    {
        path: 'new', 
        component: CreateEmployeeComponent
    },

    {
        path: 'update/:id',
        component: UpdateEmployeeComponent
    },

    {
        path: '**',
        component: InicioComponent
    }
];