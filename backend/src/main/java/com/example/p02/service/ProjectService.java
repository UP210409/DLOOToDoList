package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.Project;
import com.example.p02.model.Task;
import com.example.p02.repository.ProjectRepository;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Optional<Project> getProject(Long id) {
        return projectRepository.findById(id);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }

    public Optional<Project> getpProjectById(Long id) {
        return projectRepository.findById(id); 
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    public void editProject(Long id, Project project){
        project.setId(id);
        projectRepository.save(project);
    }

}