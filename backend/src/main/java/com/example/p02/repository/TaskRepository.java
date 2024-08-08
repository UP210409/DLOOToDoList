package com.example.p02.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.p02.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    @Query(value = "SELECT * FROM tasks WHERE user_id = ?1", nativeQuery = true)
    List<Task> findByUserId(Long userId);

    @Query(value = "SELECT * FROM tasks WHERE project_id = ?1", nativeQuery = true)
    List<Task> findByProjectId(Long projectId);

    @Query(value = "SELECT * FROM tasks WHERE project_id = ?1 AND user_id = ?2", nativeQuery = true)
    List<Task> findByProjectUserId(Long projectId, Long userId);
}
