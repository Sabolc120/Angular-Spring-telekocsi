package com.example.telekocsiBack.Repositories;

import com.example.telekocsiBack.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserModel, Long> {
}
