package com.example.gameproject.db.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String className;
    private String subName;

    @OneToOne
    private CharacterStat characterStat;

    @OneToMany
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany
    private List<Skill> mySkill = new ArrayList<>();


}
