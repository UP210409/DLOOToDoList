package com.example.p02.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.p02.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users where email = ?1", nativeQuery = true)
    public User findUserByEmail(String email);
}