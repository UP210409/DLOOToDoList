package com.example.p02.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "El nombre del proyecto es requerido")
    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;
}
