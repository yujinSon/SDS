package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.MyCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MyCharacterRepository extends JpaRepository<MyCharacter, Long> {

    @Query(value = "select * from my_character c where c.user_id = :userId ORDER BY c.pos ASC", nativeQuery = true)
    List<MyCharacter> getMyCharacters(@Param("userId") Long userId);

    @Query("select mc from MyCharacter mc where mc.user.id=:id")
    List<MyCharacter> findByUserId(@Param("id") long userId);

	List<MyCharacter> findAllByUser_Id(long userId);

    // user 객체와 pos 값으로 myCharacter 뽑기
    @Query(value = "select * from my_character mc where mc.user_id = :userId and mc.pos = :pos", nativeQuery = true)
    MyCharacter getMyCharacterUsingUserIdPos(@Param("userId") Long userId, @Param("pos") int pos);

	void deleteByUserIdAndPos(long userId, int pos);
	MyCharacter findByUserIdAndPos(long userId, int pos);
}

