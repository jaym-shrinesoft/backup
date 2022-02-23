package com.example.country.service;

import com.example.country.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public User getUser(int userId);
    void delete(int userId);
    void saveOrUpdate(User user);
    List<User> loginWithEmailandPassword(User user);
}
