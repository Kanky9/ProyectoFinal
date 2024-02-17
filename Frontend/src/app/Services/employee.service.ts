import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // URL base de la API.
  private baseUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  // Obtiene una lista de empleados.
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseUrl + "/list");
  }

  // Crea un nuevo empleado.
  createEmployee(employee: Employee): Observable<object>{
    return this.httpClient.post((this.baseUrl + "/new"), employee); 
  }

  // Obtiene un empleado por su ID.
  getEmployeeById(id: number):Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseUrl + '/get/' + id);
  }

  // Actualiza un empleado existente.
  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee> (this.baseUrl + "/update/" + id, employee);
  }

  // Elimina un empleado por su ID.
  deleteEmployeeById(id: number): Observable<object>{
    return this.httpClient.delete<Employee>(this.baseUrl + "/delete/" + id);
  }
}