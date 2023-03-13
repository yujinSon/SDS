package com.example.gameproject.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class MyCharacter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int level;
    private int maxHp;

    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;

    private int addHp;
    private int addAd;
    private int addAp;
    private int addSpeed;
    private int addCritical;
    private int addAvoid;

    private int pos;
    private int statPoint;

    @ManyToOne
    private Character character;

    @ManyToOne
    private  User user;

    @OneToMany
    private List<EffectTime> effectTimes = new ArrayList<>();

    @OneToMany
    private List<CoolTime> coolTimes = new ArrayList<>();

}
