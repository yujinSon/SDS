package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.CoolTime;
import com.example.gameproject.db.entity.EffectTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import java.util.List;
import java.util.Optional;

public interface CoolTimeRepository extends JpaRepository<CoolTime, Long> {
    List<CoolTime> findAll();
    Optional<CoolTime> findById(Long id);

    // myCharacter 가 쓴 스킬 가져오기
    @Query(value = "select * from cool_time ct where ct.mycharacter_id=:id", nativeQuery = true)
    List<CoolTime> findByMyCharacterId(@Param("id") long myCharacterId);


    // userId 의 케릭터 들이 사용한 스킬쿨 가져오기
    @Query(value = "SELECT * FROM cool_time ct JOIN my_character mc ON ct.mycharacter_id = mc.id JOIN user u ON mc.user_id = u.id WHERE u.id = :userId", nativeQuery = true)
    List<CoolTime> findByUserId(@Param("userId") Long userId);


}

