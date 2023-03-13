package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.CoolTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoolTimeRepository extends JpaRepository<CoolTime, Long> {

}

