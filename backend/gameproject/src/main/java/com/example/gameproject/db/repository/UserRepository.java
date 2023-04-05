package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.User;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    User getById(Long userId);

    @Query(value = "select * from user mc order by mc.best_score desc limit 10", nativeQuery = true)
    List<User> orderSelect();

    User findByUsername(String username);
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
}
