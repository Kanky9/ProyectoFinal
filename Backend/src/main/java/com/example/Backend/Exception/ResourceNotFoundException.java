package com.example.Backend.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Anotación @ResponseStatus para indicar el código de estado HTTP que se enviará en caso de excepción
@ResponseStatus(value = HttpStatus.NOT_FOUND)
// Clase ResourceNotFoundException que extiende RuntimeException para
// representar una excepción personalizada
public class ResourceNotFoundException extends RuntimeException {

    // Constructor que recibe un mensaje de error
    public ResourceNotFoundException(String message) {
        // Llamar al constructor de la clase base (RuntimeException) con el mensaje de
        // error recibido
        super(message);
    }
}