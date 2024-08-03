package com.example.p02.repository;

import com.example.p02.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);
    
    Optional<User> findByEmail(String email);

    @Query(value = "SELECT * FROM users WHERE role = ?1", nativeQuery = true)
    List<User> findByRole(String role);

    @Query(value = "SELECT * FROM users WHERE first_name = ?1", nativeQuery = true)
    List<User> findByFirstName(String firstName);
}
