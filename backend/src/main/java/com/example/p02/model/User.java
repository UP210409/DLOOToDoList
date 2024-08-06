package com.example.p02.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotEmpty(message = "El nombre no puede estar vacío")
    @Column(name = "name")
    private String name;

    @Column(name = "position")
    private String position;

    @NotEmpty(message = "El correo electrónico no puede estar vacío")
    @Email(message = "Correo electrónico no válido")
    @Column(name = "email", unique = true)
    private String email;

    @NotEmpty(message = "La contraseña no puede estar vacía")
    @Column(name = "password")
    private String password;
}
