package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.EffectTime;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EffectTimeRepository extends JpaRepository<EffectTime, Long> {
    List<EffectTime> findAll();
}

