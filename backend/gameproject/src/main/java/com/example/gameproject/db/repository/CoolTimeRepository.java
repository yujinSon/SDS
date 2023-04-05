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




}

