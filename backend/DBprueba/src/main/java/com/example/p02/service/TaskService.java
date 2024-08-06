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

    public List<Task> getTask() {
        return taskRepository.findAll();
    }

    public Optional<Task> getTask(Long id) {
        return taskRepository.findById(id);    }
    
    public void eliminar(Long id) {
        taskRepository.deleteById(id);
    }

    public void saveTask(Task task) {
        taskRepository.save(task);
    }

    public void editTask(Long id, Task task){
       Optional<Task> optionalTask = taskRepository.findById(id);

       Task updateTask = optionalTask.get();
       updateTask.setName(task.getName());
       updateTask.setDescription(task.getDescription());
       updateTask.setDueDate(task.getDueDate());
       updateTask.setCreatedAt(task.getCreatedAt());
       updateTask.setUpdatedAt(task.getUpdatedAt());
       taskRepository.save(updateTask);
    }
}
