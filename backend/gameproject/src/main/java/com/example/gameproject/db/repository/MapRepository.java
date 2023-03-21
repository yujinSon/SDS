package com.example.gameproject.db.repository;

import com.example.gameproject.db.entity.Map;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MapRepository extends JpaRepository<Map, Long> {

    @Query(value="select * from map m where m.stage = :myStage and m.now_step = :myStep", nativeQuery = true)
    List<Map> getMyMap(@Param("myStage") int myStage, @Param("myStep") int myStep);

}

