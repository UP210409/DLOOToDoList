package com.example.p02.dto;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class DTOtask {
    private Long id;
    private String nombre;
    private String descripcion;
    private Long proyectoAsignadoId;
    private LocalDateTime fechaVencimiento;
    private String estado;
    private Set<Long> usuarioIds;
}