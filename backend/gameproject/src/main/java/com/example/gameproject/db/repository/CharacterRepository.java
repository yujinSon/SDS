package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {

//    @Query(value = "SELECT * FROM `character` WHERE id BETWEEN ?1 AND ?2 ORDER BY RAND() LIMIT 3", nativeQuery = true)
//    List<Character> getRandomCharacters(Long startId, Long endId);

    @Query(value = "SELECT * FROM `character` WHERE id BETWEEN 1 AND 5", nativeQuery = true)
    List<Character> getRandomCharacters();


//    @Query("SELECT * FROM character WHERE id BETWEEN 1 AND 6 ORDER BY LIMIT 3")
////    @Query("select c from character c where c.id between 1 and 6")
//    List<Character> getTestCharacters();

    Character findBySubName(String subName);
}

