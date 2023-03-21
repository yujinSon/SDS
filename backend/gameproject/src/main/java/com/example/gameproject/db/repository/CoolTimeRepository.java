package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.CoolTime;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CoolTimeRepository extends JpaRepository<CoolTime, Long> {
    List<CoolTime> findAll();
    Optional<CoolTime> findById(Long id);
}

