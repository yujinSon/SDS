package com.example.gameproject.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nickname;
    private String email;
    private int bestScore;
    private int stage;
    private int subStage;
    private int turn;
    private int finalScore; // 나중에 지울거 + maxStage, maxSubstage 있어야함.

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserArtifact> userArtifacts = new ArrayList<>();

    public void gameOverUpdate(int bestScore){
        this.bestScore = bestScore;
        this.stage = 0;
        this.subStage = 0;
        this.turn = 0;
        this.finalScore = 0;
    }

}
