package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;

import com.example.p02.model.Project;
import com.example.p02.service.ProjectService;

@RestController
@Tag(name = "Project", description = "Operaciones relacionadas con los proyectos")
@RequestMapping("/projects")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @Operation(summary = "Obtener todos los proyectos")
    @GetMapping
    public ResponseEntity<List<Project>> listProjects() {
        List<Project> projects = projectService.getProjects();
        return ResponseEntity.ok(projects);
    }

    @Operation(summary = "Obtener un proyecto por ID")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Project>> getProject(@PathVariable Long id) {
        Optional<Project> project = projectService.getProject(id);
        if (project.isPresent()) {
            return ResponseEntity.ok(project);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Eliminar un proyecto por ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Editar un proyecto por ID")
    @PutMapping("/{id}")
    public ResponseEntity<Project> editProject(@PathVariable Long id, @RequestBody Project projectDetails) {
        projectService.editProject(id, projectDetails);
        return ResponseEntity.ok(projectDetails);
    }

    @Operation(summary = "Crear un nuevo proyecto")
    @PostMapping
    public ResponseEntity<Project> createProject(@RequestBody Project project) {
        projectService.saveProject(project);
        return ResponseEntity.ok(project);
    }
}
