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
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import com.example.p02.model.User;
import com.example.p02.service.UserService;
import jakarta.validation.Valid;

@Controller
@Tag(name = "User", description = "Operaciones relacionadas con los usuarios")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Obtener todos los usuarios")
    @GetMapping("/users")
    public ResponseEntity<List<User>> listUsers() {
        List<User> users = userService.getUsers();
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Obtener un usuario por ID")
    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @Operation(summary = "Eliminar un usuario por ID")
    @GetMapping("/users/delete/{id}")
    public String deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return "redirect:/users";
    }

    @Operation(summary = "Editar un usuario por ID")
    @GetMapping("/users/edit/{id}")
    public String editUser(@PathVariable Long id, Model model) {
        Optional<User> user = userService.getUser(id);
        if (user.isPresent()) {
            model.addAttribute("titulo", "Editar Usuario");
            model.addAttribute("user", user.get());
            return "user/form";
        } else {
            return "redirect:/users";
        }
    }

    @Operation(summary = "Crear un nuevo usuario")
    @GetMapping("/users/new")
    public String createUserForm(Model model) {
        model.addAttribute("titulo", "Nuevo Usuario");
        model.addAttribute("user", new User());
        return "user/form";
    }

    @Operation(summary = "Guardar un usuario")
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
