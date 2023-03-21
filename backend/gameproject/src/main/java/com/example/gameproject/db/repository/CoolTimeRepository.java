package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.CoolTime;
import com.example.gameproject.db.entity.EffectTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CoolTimeRepository extends JpaRepository<CoolTime, Long> {

    // myCharacter 가 쓴 스킬 가져오기
    @Query(value = "select ct from cool_time ct where ct.mycharacter_id=:id", nativeQuery = true)
    List<CoolTime> findByMyCharacterId(@Param("id") long myCharacterId);

}

