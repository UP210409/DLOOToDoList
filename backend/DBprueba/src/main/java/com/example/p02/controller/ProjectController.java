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

import com.example.p02.service.ProjectService;

import jakarta.validation.Valid;

import java.util.*;

import com.example.p02.model.Project;

@RestController
@RequestMapping({"/projects"})
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController (@Autowired ProjectService projectService){
        this.projectService = projectService;
    }

    @GetMapping({"/all"})
    public ResponseEntity<List<Project>> getProjects(){
        return ResponseEntity.ok(projectService.getProjects());
    }

    // @PostMapping({"/save"})
    // @ResponseStatus(HttpStatus.CREATED)
    // public Task saveTask(@Valid @RequestBody Task data){
    //     return taskService.saveTask(data);
    // }

    // @PutMapping({"/edit/{id}"})
    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // public void editTask(@PathVariable Long id, @Valid @RequestBody Task data){
    //       taskService.editTask(id, data);
    // }
    
    // @DeleteMapping({"/delete/{id}"})
    // @ResponseStatus(HttpStatus.NO_CONTENT)
    // public void deleteTask(@PathVariable Long id){
    //       taskService.deleteTask(id);
    // }
    
}
