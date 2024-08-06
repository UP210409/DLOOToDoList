/*package com.example.p02.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p02.service.ProjectService;
import jakarta.validation.Valid;

import java.util.*;

import com.example.p02.model.Project;
import com.example.p02.model.Task;

@RestController
@RequestMapping({"/projects"})
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController (@Autowired ProjectService projectService){
        this.projectService = projectService;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        Optional<Project> project = projectService.getpProjectById(id);
        return project.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }
    
    @Operation(summary = "Mostrar todos los proyectos")
    @GetMapping({"/all"})
    public ResponseEntity<List<Project>> getProjects(){
        return ResponseEntity.ok(projectService.getProjects());
    }

    @Operation(summary = "Crear un nuevo proyecto")
    @PostMapping({"/save"})
    @ResponseStatus(HttpStatus.CREATED)
    public Project saveProject(@Valid @RequestBody Project data){
        return projectService.saveProject(data);
    }
    
    @Operation(summary = "Editar un proyecto")
    @PutMapping({"/edit/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void ediProject(@PathVariable Long id, @Valid @RequestBody Project data){
          projectService.editProject(id, data);
    }
    
    @Operation(summary = "Eliminar un proyecto")
    @DeleteMapping({"/delete/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProject(@PathVariable Long id){
          projectService.deleteProject(id);
    }
    
}*/
