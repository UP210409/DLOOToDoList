package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import com.example.p02.model.Task;
import com.example.p02.service.TaskService;
import jakarta.validation.Valid;

@Controller
@Tag(name = "Task", description = "Operaciones relacionadas con las tareas")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @Operation(summary = "Obtener todas las tareas")
    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> listTasks() {
        List<Task> tasks = taskService.getTasks();
        return ResponseEntity.ok(tasks);
    }

    @Operation(summary = "Obtener una tarea por ID")
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Optional<Task>> getTask(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTask(id));
    }

    @Operation(summary = "Eliminar una tarea por ID")
    @GetMapping("/tasks/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "redirect:/tasks";
    }

    @Operation(summary = "Editar una tarea por ID")
    @GetMapping("/tasks/edit/{id}")
    public String editTask(@PathVariable Long id, Model model) {
        Optional<Task> task = taskService.getTask(id);
        if (task.isPresent()) {
            model.addAttribute("titulo", "Editar Tarea");
            model.addAttribute("task", task.get());
            return "task/form";
        } else {
            return "redirect:/tasks";
        }
    }

    @Operation(summary = "Crear una nueva tarea")
    @GetMapping("/tasks/new")
    public String createTaskForm(Model model) {
        model.addAttribute("titulo", "Nueva Tarea");
        model.addAttribute("task", new Task());
        return "task/form";
    }

    @Operation(summary = "Guardar una tarea")
    @PostMapping("/tasks")
    public String saveTask(@Valid Task task, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("titulo", "Formulario de Tarea");
            return "task/form";
        }
        taskService.saveTask(task);
        return "redirect:/tasks";
    }
}
