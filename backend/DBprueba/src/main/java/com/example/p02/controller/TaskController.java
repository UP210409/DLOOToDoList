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
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.p02.model.Task;
import com.example.p02.service.TaskService;
import jakarta.validation.Valid;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@Tag(name = "Información Usuarios", description = "CRUD de usuarios")
@Controller
@RequestMapping("/tasks")
public class TaskController {
    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public String listTasks(Model model) {
        model.addAttribute("titulo", "Listado de Tareas");
        model.addAttribute("tasks", taskService.getTasks());
        return "task/list"; // task/list.html
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Task>> getTask(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTask(id));
    }

    @GetMapping("/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "redirect:/tasks";
    }

    @GetMapping("/edit/{id}")
    public String editTask(@PathVariable Long id, Model model) {
        Optional<Task> task = taskService.getTask(id);
        if (task.isPresent()) {
            model.addAttribute("titulo", "Editar Tarea");
            model.addAttribute("task", task.get());
            return "task/form"; // task/form.html
        } else {
            return "redirect:/tasks";
        }
    }

    @GetMapping("/new")
    public String createTaskForm(Model model) {
        model.addAttribute("titulo", "Nueva Tarea");
        model.addAttribute("task", new Task());
        return "task/form"; // task/form.html
    }

    @PostMapping
    public String saveTask(@Valid Task task, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("titulo", "Formulario de Tarea");
            return "task/form";
        }
        taskService.saveTask(task);
        return "redirect:/tasks";
    }
}