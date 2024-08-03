package com.example.p02.service;

import java.util.Optional;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.p02.model.User;
import com.example.p02.repository.UserRepository;
import com.example.p02.exception.UserNotFoundException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
            Pattern.CASE_INSENSITIVE
    );

    public Optional<User> loginUser(String usernameOrEmail, String password) {
        Optional<User> userOptional;

        if (EMAIL_PATTERN.matcher(usernameOrEmail).matches()) {
            userOptional = userRepository.findByEmail(usernameOrEmail);
        } else {
            userOptional = userRepository.findByUsername(usernameOrEmail);
        }

        if (userOptional.isPresent() && password.equals(userOptional.get().getPassword())) {
            return userOptional;
        }
        return Optional.empty();
    }

    public Optional<User> getUser(long id) {
        return userRepository.findById(id);
    }

    public void deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            throw new UserNotFoundException("User not found with id " + id);
        }
    }
}
