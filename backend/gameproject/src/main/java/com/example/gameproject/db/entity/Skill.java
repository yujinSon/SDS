package com.example.gameproject.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int skillNum;
    private String skillName;
    private int skillType;
    private Boolean isRange;
    private int value;
    private int skillTarget;
    private String Stat;
    private int coolTime;

    @ManyToOne
    private Character character;

    @ManyToOne
    private Skill skill;

    @OneToMany
    private List<EffectTime> effectTimes = new ArrayList<>();

    @OneToMany
    private List<CoolTime> coolTimes = new ArrayList<>();



}
