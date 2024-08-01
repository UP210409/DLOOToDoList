package com.example.p02.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.p02.model.User;
import com.example.p02.service.UserService;
import jakarta.validation.Valid;

@Controller
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public String listUsers(Model model) {
        model.addAttribute("titulo", "Listado de Usuarios");
        model.addAttribute("users", userService.getUsers());
        return "user/list"; // user/list.html
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }

    @GetMapping("/users/edit/{id}")
    public String editUser(@PathVariable Long id, Model model) {
        Optional<User> user = userService.getUser(id);
        if (user.isPresent()) {
            model.addAttribute("titulo", "Editar Usuario");
            model.addAttribute("user", user.get());
            return "user/form"; // user/form.html
        } else {
            return "redirect:/users";
        }
    }

    @GetMapping("/users/new")
    public String createUserForm(Model model) {
        model.addAttribute("titulo", "Nuevo Usuario");
        model.addAttribute("user", new User());
        return "user/form"; // user/form.html
    }

    @PostMapping("/users")
    public String saveUser(@Valid User user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            model.addAttribute("titulo", "Formulario de Usuario");
            return "user/form";
        }
        userService.saveUser(user);
        return "redirect:/users";
    }
}
