package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {

}

