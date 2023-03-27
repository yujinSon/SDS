package com.example.gameproject.db.repository;


import com.example.gameproject.db.entity.UserArtifact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserArtifactRespository extends JpaRepository<UserArtifact, Long> {

    @Query(value = "select * from user_artifact ua where ua.user_id = :userId", nativeQuery = true)
    List<UserArtifact> findByUserId(@Param("userId") Long userId);

}
