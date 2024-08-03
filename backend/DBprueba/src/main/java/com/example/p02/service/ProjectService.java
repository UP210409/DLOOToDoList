package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.Project;
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

    public void saveProject(Project project) {
        projectRepository.save(project);
    }

    public void editProject(Long id, Project projectDetails) {
        Optional<Project> optionalProject = projectRepository.findById(id);

        if (optionalProject.isPresent()) {
            Project updateProject = optionalProject.get();
            if (projectDetails.getName() != null) {
                updateProject.setName(projectDetails.getName());
            }
            if (projectDetails.getDescription() != null) {
                updateProject.setDescription(projectDetails.getDescription());
            }
            projectRepository.save(updateProject);
        } else {
            throw new RuntimeException("Project not found with id " + id);
        }
    }
}
