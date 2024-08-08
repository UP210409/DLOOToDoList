package com.example.p02.controller;

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

import com.example.p02.service.TaskService;

import jakarta.validation.Valid;

import java.util.*;

import com.example.p02.model.Task;

@RestController
@RequestMapping({"/tasks"})
public class TaskController {

    private final TaskService taskService;

    public TaskController (@Autowired TaskService taskService){
        this.taskService = taskService;
    }

    @GetMapping
    public ResponseEntity<List<Task>> getTasks(){
        return ResponseEntity.ok(taskService.getTasks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    // @GetMapping("/user/{userId}")
    // public ResponseEntity<List<Task>> getTasksByUserId(@PathVariable Long userId) {
    //     List<Task> tasks = taskService.getTasksByUserId(userId);
    //     if (tasks.isEmpty()) {
    //         return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    //     }
    //     return ResponseEntity.ok(tasks);
    // }

    // @GetMapping("/project/{projectId}")
    // public ResponseEntity<List<Task>> getTasksByProjectId(@PathVariable Long projectId) {
    //     List<Task> tasks = taskService.getTasksByProjectId(projectId);
    //     if (tasks.isEmpty()) {
    //         return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    //     }
    //     return ResponseEntity.ok(tasks);
    // }

    @PostMapping({"/save"})
    @ResponseStatus(HttpStatus.CREATED)
    public Task saveTask(@Valid @RequestBody Task data){
        return taskService.saveTask(data);
    }

    @PutMapping({"/edit/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editTask(@PathVariable Long id, @Valid @RequestBody Task data){
          taskService.editTask(id, data);
    }
    
    @DeleteMapping({"/delete/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable Long id){
          taskService.deleteTask(id);
    }
}
