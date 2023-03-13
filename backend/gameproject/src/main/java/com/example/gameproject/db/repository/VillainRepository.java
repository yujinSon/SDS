package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.Villain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VillainRepository extends JpaRepository<Villain, Long> {

}

