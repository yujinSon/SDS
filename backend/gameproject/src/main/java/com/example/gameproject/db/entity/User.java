package com.example.gameproject.db.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.example.gameproject.dto.request.MapSaveRequest;

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

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserArtifact> userArtifacts = new ArrayList<>();

    public void gameOverUpdate(){
        this.stage = 1;
        this.subStage = 1;
    }

    public void stageUpdate(int stage, int subStage) {
        this.stage = stage;
        this.subStage = subStage;
    }


}
