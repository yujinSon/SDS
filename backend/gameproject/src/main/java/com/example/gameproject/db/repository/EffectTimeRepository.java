package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.EffectTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EffectTimeRepository extends JpaRepository<EffectTime, Long> {

}

