package com.example.Backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Anotación @Entity para indicar que esta clase es una entidad JPA y está mapeada a una tabla en la base de datos
@Entity
// Anotación @Table para especificar el nombre de la tabla en la base de datos
@Table(name = "employees")
public class Employee {

    // Anotación @Id para indicar que este campo es la clave primaria
    @Id
    // Anotación @GeneratedValue para especificar la estrategia de generación de
    // valores para la clave primaria
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Anotación @Column para mapear este atributo a una columna en la tabla de la
    // base de datos
    @Column(name = "first_name")
    private String firstName;

    // Anotación @Column para mapear este atributo a una columna en la tabla de la
    // base de datos
    @Column(name = "last_name")
    private String lastName;

    // Anotación @Column para mapear este atributo a una columna en la tabla de la
    // base de datos
    @Column(name = "salary")
    private double salary;

    /* Constructor vacío */
    public Employee() {
        super();
    }

    /* Constructor con parámetros */
    public Employee(int id, String firstName, String lastName, double salary) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    /* Getters and Setters */
    // Métodos para obtener y establecer valores de los atributos de la clase
    // Estos métodos son esenciales para acceder a los atributos de la clase de
    // manera segura

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }
}