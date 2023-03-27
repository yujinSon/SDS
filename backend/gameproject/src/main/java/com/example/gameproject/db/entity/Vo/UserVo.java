package com.example.gameproject.db.entity.Vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder // Setter 개념
@Getter // Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;
    private String email;
    private int bestScore;
    private int stage;
    private int subStage;
    private int turn;
    private int finalScore;



}
