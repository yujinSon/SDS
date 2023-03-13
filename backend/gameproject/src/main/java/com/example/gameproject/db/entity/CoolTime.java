package com.example.gameproject.db.entity;

import javax.persistence.*;

@Entity
public class CoolTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int turn;

    @ManyToOne
    private MyCharacter myCharacter;

    @ManyToOne
    private Skill skill;



}
