package com.example.p02.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

@Data
@Entity
@Table (name = "tasks")
public class Task {
    @Id
    @Column(name="id_task")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTask;

    // @NotBlank(message = "El nombre de la tarea no puede estar vacío")
    @Column(name = "name")
    private String name;

    @NotEmpty
    private String task_description;
    
    

 
    @Column(name = "due_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dueDate;

    @Column(name = "created_at", updatable = false)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
