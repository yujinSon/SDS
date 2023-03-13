package com.example.gameproject.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

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

    @OneToMany
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany
    private List<UserArtifact> userArtifacts = new ArrayList<>();


}
