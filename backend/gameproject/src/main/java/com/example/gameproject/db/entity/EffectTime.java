package com.example.gameproject.db.entity;

import javax.persistence.*;

@Entity
public class EffectTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int turn;

    @ManyToOne
    private Skill skill;

}
