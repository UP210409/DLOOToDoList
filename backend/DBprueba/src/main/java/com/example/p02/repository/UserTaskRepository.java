package com.example.p02.repository;

import com.example.p02.model.UserTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTaskRepository extends JpaRepository<UserTask, Long> {
    List<UserTask> findByUserId(Long userId);
    List<UserTask> findByTaskId(Long taskId);
}
