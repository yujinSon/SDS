package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.UserArtifact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserArtifactRepository extends JpaRepository<UserArtifact, Long> {

}

