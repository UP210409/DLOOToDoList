package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.Task;
import com.example.p02.repository.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTasks() {
        return taskRepository.findAll();
    }

    public List<Task> getTasksByUserId(Long userId) {
        return taskRepository.findByUserId(userId);
    }

    public List<Task> getTasksByProjectId(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }

    public List<Task> getTasksByProjectUserId(Long projectId, Long userId) {
        return taskRepository.findByProjectUserId(projectId, userId);
    }

    public Optional<Task> getTask(Long id) {
        return taskRepository.findById(id);
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public void editTask(Long id, Task task){

    taskRepository.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id); 
    }


}
