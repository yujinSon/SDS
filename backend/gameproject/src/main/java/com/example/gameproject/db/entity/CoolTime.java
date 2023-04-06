package com.example.gameproject.db.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class CoolTime implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int turn;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mycharacter_id")
    private MyCharacter myCharacter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "skill_id")
    private Skill skill;

    public CoolTime(Skill skill, MyCharacter myCharacter) {
        this.turn = skill.getCoolTime();
        this.myCharacter = myCharacter;
        this.skill = skill;

    }


    public void BattleCoolTimeUpdate(int turn){
        this.turn = turn - 1;
    }
    public void setTurn(int turn) {
        this.turn = turn;
    }

    public void setMyCharacter(MyCharacter myCharacter) {
        this.myCharacter = myCharacter;
    }

    public void setSkill(Skill skill) {
        this.skill = skill;
    }

}
