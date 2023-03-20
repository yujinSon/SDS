package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill, Long> {
    @Query("select s from Skill s where s.defaultCharacter.id=:id")
    List<Skill> findByCharacter_id(@Param("id") long characterId);
}

