package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {
    @Query(value = "SELECT * FROM hackerton.literature order by RAND() limit 3 where id between :minvalue and :maxvalue",nativeQuery = true)
    List<Character> randomfind(@Param("minvalue") int minvalue, @Param("maxvalue") int maxvalue);

}

