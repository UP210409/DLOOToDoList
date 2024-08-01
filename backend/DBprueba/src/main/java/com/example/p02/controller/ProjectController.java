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
import com.example.p02.model.Project;
import com.example.p02.service.ProjectService;
import jakarta.validation.Valid;

@Controller
public class ProjectController {
    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects")
    public String listProjects(Model model) {
        model.addAttribute("titulo", "Listado de Proyectos");
        model.addAttribute("projects", projectService.getProjects());
        return "project/list"; // project/list.html
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Optional<Project>> getProject(@PathVariable Long id) {
        return ResponseEntity.ok(projectService.getProject(id));
    }

    @GetMapping("/projects/delete/{id}")
    public String deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return "redirect:/projects";
    }

    @GetMapping("/projects/edit/{id}")
    public String editProject(@PathVariable Long id, Model model) {
        Optional<Project> project = projectService.getProject(id);
        if (project.isPresent()) {
            model.addAttribute("titulo", "Editar Proyecto");
            model.addAttribute("project", project.get());
            return "project/form"; // project/form.html
        } else {
            return "redirect:/projects";
        }
    }

    @GetMapping("/projects/new")
    public String createProjectForm(Model model) {
        model.addAttribute("titulo", "Nuevo Proyecto");
        model.addAttribute("project", new Project());
        return "project/form"; // project/form.html
    }

    @PostMapping("/projects")
    public String saveProject(@Valid Project project, BindingResult result