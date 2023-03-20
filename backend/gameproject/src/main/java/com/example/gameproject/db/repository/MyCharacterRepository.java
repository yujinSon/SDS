package com.example.gameproject.db.repository;

import java.util.List;

import com.example.gameproject.db.entity.MyCharacter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MyCharacterRepository extends JpaRepository<MyCharacter, Long> {
	List<MyCharacter> findAllByUser_Id(long userId);
}

