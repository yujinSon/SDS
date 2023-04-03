package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.MyCharacter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArtifactRepository extends JpaRepository<Artifact, Long> {
    List<Artifact> findAll();


    @Query(value = "select * from artifact ar where ar.target_class=:target_class or ar.target_class='전체'", nativeQuery = true)
    List<Artifact> findByClass(@Param("target_class") String target_class);
}

