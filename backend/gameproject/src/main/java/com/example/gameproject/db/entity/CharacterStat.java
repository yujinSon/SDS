package com.example.gameproject.db.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
public class CharacterStat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @OneToOne
    @JoinColumn(name = "character_id")
    private Character character;


}
