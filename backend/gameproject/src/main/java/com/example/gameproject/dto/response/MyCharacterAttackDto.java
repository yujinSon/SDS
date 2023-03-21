package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.MyCharacter;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MyCharacterAttackDto {
    private String className;
    private String subClassName;
    private int level;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private int maxHp;
    private int pos;

    private List<SkillDtoCons> skills;
    private List<Boolean> skillCoolTime;


    public MyCharacterAttackDto(MyCharacter myCharacter) {
        this.className = myCharacter.getDefaultCharacter().getClassName();
        this.subClassName = myCharacter.getDefaultCharacter().getClassName();
        this.level = myCharacter.getLevel();
        this.hp = myCharacter.getHp();
        this.ad = myCharacter.getAd();
        this.ap = myCharacter.getAp();
        this.speed = myCharacter.getSpeed();
        this.critical = myCharacter.getCritical();
        this.avoid = myCharacter.getAvoid();
        this.maxHp = myCharacter.getHp();
        this.pos = myCharacter.getPos();




    }
}
