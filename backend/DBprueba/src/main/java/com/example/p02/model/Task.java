package com.example.p02.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table (name = "tasks")
public class Task {
    @Id
    @Column(name="id_task")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTask;

    private String task_name;

    @NotEmpty
    private String task_description;
    
}
