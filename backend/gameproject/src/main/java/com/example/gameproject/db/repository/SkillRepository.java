package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SkillRepository extends JpaRepository<Skill, Long> {

    @Query(value = "select * from skill s where s.character_id = :characterId", nativeQuery = true)
    List<Skill> getskills(@Param("characterId") Long characterId);
}

