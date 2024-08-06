package com.example.p02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.p02.model.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

}