package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;

import com.example.p02.model.ProjectTask;
import com.example.p02.service.ProjectTaskService;

@RestController
@Tag(name = "ProjectTask", description = "Operaciones relacionadas con la asociación proyecto-tarea")
@RequestMapping("/project-tasks")
public class ProjectTaskController {
/* 
    private final ProjectTaskService projectTaskService;

    @Autowired
    public ProjectTaskController(ProjectTaskService projectTaskService) {
        this.projectTaskService = projectTaskService;
    }

    @Operation(summary = "Obtener todas las asociaciones proyecto-tarea")
    @GetMapping
    public ResponseEntity<List<ProjectTask>> listProjectTasks() {
        List<ProjectTask> projectTasks = projectTaskService.getProjectTasks();
        return ResponseEntity.ok(projectTasks);
    }

    @Operation(summary = "Obtener una asociación proyecto-tarea por ID de proyecto y ID de tarea")
    @GetMapping("/{projectId}/{taskId}")
    public ResponseEntity<Optional<ProjectTask>> getProjectTask(@PathVariable Long projectId, @PathVariable Long taskId) {
        Optional<ProjectTask> projectTask = projectTaskService.getProjectTask(projectId, taskId);
        if (projectTask.isPresent()) {
            return ResponseEntity.ok(projectTask);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Eliminar una asociación proyecto-tarea por ID de proyecto y ID de tarea")
    @DeleteMapping("/{projectId}/{taskId}")
    public ResponseEntity<Void> deleteProjectTask(@PathVariable Long projectId, @PathVariable Long taskId) {
        projectTaskService.deleteProjectTask(projectId, taskId);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Crear una nueva asociación proyecto-tarea")
    @PostMapping
    public ResponseEntity<ProjectTask> createProjectTask(@RequestBody ProjectTask projectTask) {
        projectTaskService.saveProjectTask(projectTask);
        return ResponseEntity.ok(projectTask);
    }

    @Operation(summary = "Editar una asociación proyecto-tarea")
    @PutMapping("/{projectId}/{taskId}")
    public ResponseEntity<ProjectTask> editProjectTask(@PathVariable Long projectId, @PathVariable Long taskId, @RequestBody ProjectTask projectTaskDetails) {
        projectTaskService.editProjectTask(projectId, taskId, projectTaskDetails);
        return ResponseEntity.ok(projectTaskDetails);
    }*/
}
