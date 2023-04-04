package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.DefaultCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DefaultCharacterRepository extends JpaRepository<DefaultCharacter, Long> {


//    @Query(value = "SELECT * FROM default_character c WHERE c.id BETWEEN  1 AND 5 ORDER BY c.id LIMIT3", nativeQuery = true)
//    List<DefaultCharacter> getRandomCharacters();
    @Query(value = "select * from default_character c where c.id between 1 and 14 order by rand() limit 3", nativeQuery = true)
    List<DefaultCharacter> getRandomCharacters();

    // RandomCharacter를 가져오기 위한 
    DefaultCharacter getByClassNameAndSubName(String className, String subName);

    DefaultCharacter findBySubName(String sumName);

}

