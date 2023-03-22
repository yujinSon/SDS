package com.example.gameproject.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class EffectTime implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int turn;
    private int pos; // 0 ~ 2 , 3 이라면 전체 적용 스킬

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "skill_id")
    private Skill skill;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mycharacter_id")
    private MyCharacter myCharacter;

    public void BattleEffectTimeUpdate(int turn){
        this.turn = turn - 1;
    }
}
