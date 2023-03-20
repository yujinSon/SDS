package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.MyCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MyCharacterRepository extends JpaRepository<MyCharacter, Long> {

    @Query(value = "select * from my_character c where c.user_id = :userId ORDER BY c.pos ASC", nativeQuery = true)
    List<MyCharacter> getMyCharacters(@Param("userId") int userId);

    @Query("select mc from MyCharacter mc where mc.user.id=:id")
    List<MyCharacter> findByUserId(@Param("id") long userId);

}

