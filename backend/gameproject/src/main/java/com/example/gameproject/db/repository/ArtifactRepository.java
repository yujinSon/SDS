package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtifactRepository extends JpaRepository<Artifact, Long> {

}

