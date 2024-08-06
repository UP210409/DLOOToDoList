package com.example.p02.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.p02.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    
}
