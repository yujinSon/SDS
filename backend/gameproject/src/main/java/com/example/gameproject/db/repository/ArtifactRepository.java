package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Artifact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArtifactRepository extends JpaRepository<Artifact, Long> {
    List<Artifact> findAll();
}

