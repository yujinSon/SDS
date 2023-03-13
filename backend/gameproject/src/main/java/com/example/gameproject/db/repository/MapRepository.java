package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.Map;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MapRepository extends JpaRepository<Map, Long> {

}

