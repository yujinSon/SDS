package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.CharacterStat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterStatRepository extends JpaRepository<CharacterStat, Long> {
    CharacterStat getById(Long id);
    CharacterStat findByDefaultCharacterId(long id);
}

