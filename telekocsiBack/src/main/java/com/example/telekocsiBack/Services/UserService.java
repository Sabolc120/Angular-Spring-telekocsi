package com.example.telekocsiBack.Services;

import com.example.telekocsiBack.Model.UserModel;
import com.example.telekocsiBack.Repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserModel registerUserData(UserModel userModel){
        return userRepo.save(userModel);
    }
    public List<UserModel> getUsersService(){
        return userRepo.findAll();
    }
    public void deleteUser(Long id){
        userRepo.deleteById(id);
    }
    public UserModel updateUser(UserModel user){
        long Id = user.getId();
        UserModel u = userRepo.findById(Id).get();
        u.setUserName(user.getUserName());
        u.setEmail(user.getEmail());
        u.setCarColour(user.getCarColour());
        u.setCarType(user.getCarType());
        return userRepo.save(u);
    }
}
