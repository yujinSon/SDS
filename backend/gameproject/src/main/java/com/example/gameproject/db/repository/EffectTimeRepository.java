package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.CoolTime;
import com.example.gameproject.db.entity.EffectTime;
import com.example.gameproject.db.entity.MyCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import java.util.List;

public interface EffectTimeRepository extends JpaRepository<EffectTime, Long> {
    List<EffectTime> findAll();

    // myCharacter 가 쓴 스킬 가져오기
    @Query(value = "select * from effect_time et where et.mycharacter_id=:id", nativeQuery = true)
    List<EffectTime> findByMyCharacterId(@Param("id") long myCharacterId);


    // userId 의 케릭터 들이 사용한 스킬 이펙트 가져오기
    @Query(value = "SELECT * FROM effect_time et JOIN my_character mc ON ct.mycharacter_id = mc.id JOIN user u ON mc.user_id = u.id WHERE u.id = :userId", nativeQuery = true)
    List<EffectTime> findByUserId(@Param("userId") Long userId);

}

