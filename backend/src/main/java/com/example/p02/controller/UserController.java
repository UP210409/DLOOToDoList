package com.example.p02.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.p02.service.UserService;
import jakarta.validation.Valid;
import java.util.*;

import com.example.p02.model.Task;
import com.example.p02.model.User;

@RestController
@RequestMapping({"/users"})
public class UserController {

    private final UserService userService;

    public UserController (@Autowired UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(userService.getUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        Optional<User> user = userService.getUserById(id);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @PutMapping({"/edit/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void editUser(@PathVariable Long id, @Valid @RequestBody User data){
        userService.editUser(id, data);
    }

    @PostMapping({"/save"})
    @ResponseStatus(HttpStatus.CREATED)
    public User saveUser(@Valid @RequestBody User data){
        return userService.saveUser(data);
    }

    @DeleteMapping({"/delete/{id}"})
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }




}
