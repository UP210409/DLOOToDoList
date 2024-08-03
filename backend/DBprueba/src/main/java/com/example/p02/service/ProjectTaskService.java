package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.ProjectTask;
import com.example.p02.repository.ProjectTaskRepository;

@Service
public class ProjectTaskService {
    private final ProjectTaskRepository projectTaskRepository;

    @Autowired
    public ProjectTaskService(ProjectTaskRepository projectTaskRepository) {
        this.projectTaskRepository = projectTaskRepository;
    }

    public List<ProjectTask> getProjectTasks() {
        return projectTaskRepository.findAll();
    }

    public Optional<ProjectTask> getProjectTask(Long id) {
        return projectTaskRepository.findById(id);
    }

    public List<ProjectTask> getProjectTasksByProjectId(Long projectId) {
        return projectTaskRepository.findByProjectId(projectId);
    }

    public List<ProjectTask> getProjectTasksByTaskId(Long taskId) {
        return projectTaskRepository.findByTaskId(taskId);
    }

    public void deleteProjectTask(Long id) {
        projectTaskRepository.deleteById(id);
    }

    public void saveProjectTask(ProjectTask projectTask) {
        projectTaskRepository.save(projectTask);
    }

    public void editProjectTask(Long id, ProjectTask projectTaskDetails) {
        Optional<ProjectTask> optionalProjectTask = projectTaskRepository.findById(id);

        if (optionalProjectTask.isPresent()) {
            ProjectTask updateProjectTask = optionalProjectTask.get();
            if (projectTaskDetails.getProject() != null) {
                updateProjectTask.setProject(projectTaskDetails.getProject());
            }
            if (projectTaskDetails.getTask() != null) {
                updateProjectTask.setTask(projectTaskDetails.getTask());
            }
            projectTaskRepository.save(updateProjectTask);
        } else {
            throw new RuntimeException("ProjectTask not found with id " + id);
        }
    }
}
