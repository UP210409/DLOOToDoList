package com.example.p02.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.p02.model.Task;
import com.example.p02.model.User;
import com.example.p02.repository.UserRepository;
@Service
public class UserService {
    private final UserRepository userRepository;
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id); 
    }
    public Optional<User> getUser(Long id) {
        return userRepository.findById(id);
    }
   
    public void editUser(Long id, User user){
        userRepository.save(user);
    }
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public Boolean checkPassword(String passwordToCheck, String passwordInDB){
        if (passwordToCheck.equals(passwordInDB)) {
            return true;
        } else {
            return false;
        }
    }
}