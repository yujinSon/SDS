package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {

}

