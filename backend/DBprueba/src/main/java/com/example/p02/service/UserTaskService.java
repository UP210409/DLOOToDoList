package com.example.p02.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.UserTask;
import com.example.p02.repository.UserTaskRepository;

@Service
public class UserTaskService {
    private final UserTaskRepository userTaskRepository;

    @Autowired
    public UserTaskService(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }

    public List<UserTask> getUserTasks() {
        return userTaskRepository.findAll();
    }

    public Optional<UserTask> getUserTask(Long id) {
        return userTaskRepository.findById(id);
    }

    public List<UserTask> getUserTasksByUserId(Long userId) {
        return userTaskRepository.findByUserId(userId);
    }

    public List<UserTask> getUserTasksByTaskId(Long taskId) {
        return userTaskRepository.findByTaskId(taskId);
    }

    public void deleteUserTask(Long id) {
        userTaskRepository.deleteById(id);
    }

    public void saveUserTask(UserTask userTask) {
        userTaskRepository.save(userTask);
    }

    public void editUserTask(Long id, UserTask userTaskDetails) {
        Optional<UserTask> optionalUserTask = userTaskRepository.findById(id);

        if (optionalUserTask.isPresent()) {
            UserTask updateUserTask = optionalUserTask.get();
            if (userTaskDetails.getUser() != null) {
                updateUserTask.setUser(userTaskDetails.getUser());
            }
            if (userTaskDetails.getTask() != null) {
                updateUserTask.setTask(userTaskDetails.getTask());
            }
            userTaskRepository.save(updateUserTask);
        } else {
            throw new RuntimeException("UserTask not found with id " + id);
        }
    }
}
