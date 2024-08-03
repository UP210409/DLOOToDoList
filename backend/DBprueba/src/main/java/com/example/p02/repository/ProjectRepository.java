package com.example.p02.repository;

import com.example.p02.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario
}
