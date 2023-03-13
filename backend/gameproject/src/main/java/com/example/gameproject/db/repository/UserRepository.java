package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
