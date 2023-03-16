package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.DefaultCharacter;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RandomCharacterDto {
    private String ClassName;
    private String Subclass;
    private int level;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;


    public RandomCharacterDto(DefaultCharacter character, int level){
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
