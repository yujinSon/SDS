package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.Villain;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VillainRepository extends JpaRepository<Villain, Long> {

    // 보스가 아닌 빌런 뽑기
    @Query(value = "select * from villain v where v.class_name = :className", nativeQuery = true)
    List<Villain> getVillains(@Param("className") String className);
}

