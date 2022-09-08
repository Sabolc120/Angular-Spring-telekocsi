package com.example.telekocsiBack.Controllers;

import com.example.telekocsiBack.Model.UserModel;
import com.example.telekocsiBack.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class Controller {
    @Autowired
    private UserService userService;

    @PostMapping("/registerUser")
    public UserModel registerUser(@RequestBody UserModel userModel){
        //Checking...
        System.out.println(userModel.getUserName());
        return userService.registerUserData(userModel);
    }
    @GetMapping("/getUsers")
    public List<UserModel> getStudents(){
        return userService.getUsersService();
    }
    @DeleteMapping("/deleteUser")
    public void deleteUser(@RequestParam Long id){
        userService.deleteUser(id);
    }
    @PutMapping("/updateUser")
    public UserModel updateStudent(@RequestBody UserModel user){
        return userService.updateUser(user);
    }
}
