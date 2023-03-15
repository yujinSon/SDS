package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.entity.CharacterStat;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@NoArgsConstructor
public class RandomCharacterDto {
    private String ClassName;
    private String Subclass;
//    private String name;
    private int level;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;

    public RandomCharacterDto(Character character, int level){
        this.ClassName = character.getClassName();
        this.Subclass = character.getSubName();
        this.level = level;
        this.hp = character.getCharacterStat().getHp();
        this.ad = character.getCharacterStat().getAd();
        this.ap = character.getCharacterStat().getAp();
        this.speed = character.getCharacterStat().getSpeed();
        this.critical = character.getCharacterStat().getCritical();
        this.avoid = character.getCharacterStat().getAvoid();
    }
}
