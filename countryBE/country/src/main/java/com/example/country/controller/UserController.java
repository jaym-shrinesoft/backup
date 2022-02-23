package com.example.country.controller;
import com.example.country.model.User;
import com.example.country.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping(path = "/register")
    public String add(@RequestBody User user){
        final String s = user.getPassword();
        final byte[] authBytes = s.getBytes(StandardCharsets.UTF_8);
        final String encoded = Base64.getEncoder().encodeToString(authBytes);
        user.setPassword(encoded);
        userService.saveUser(user);
        return "New User is added.";
    }

    @PostMapping(path="/login")
    public List<User> login(@RequestBody User user){
        final String s = user.getPassword();
        final byte[] authBytes = s.getBytes(StandardCharsets.UTF_8);
        final String encoded = Base64.getEncoder().encodeToString(authBytes);
        user.setPassword(encoded);
        return userService.loginWithEmailandPassword(user);
    }

    @GetMapping("/user/{userId}")
    private User getUser(@PathVariable("userId") int userId)
    {
        return userService.getUser(userId);
    }
    @GetMapping("/getAll")
    private List<User> list(){
        return userService.getAllUsers();
    }

    @DeleteMapping("/delete/{userId}")
    public String deleteUser(@PathVariable("userId") int userId){
        userService.delete(userId);
        return "User is deleted";
    }

    @PutMapping("/update")
    private User update(@RequestBody User user){
        userService.saveOrUpdate(user);
        return user;
    }
}