package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.MyCharacter;

public class MyCharacterDto {

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

    public MyCharacterDto(MyCharacter myCharacter) {
        this.level = myCharacter.getLevel();
        this.maxHp = myCharacter.getMaxHp();

        this.hp = myCharacter.getHp();
        this.ad = myCharacter.getAd();
        this.ap = myCharacter.getAp();
        this.speed = myCharacter.getSpeed();
        this.critical = myCharacter.getCritical();
        this.avoid = myCharacter.getAvoid();

        this.addHp = myCharacter.getAddHp();
        this.addAd = myCharacter.getAddAd();
        this.addAp = myCharacter.getAddAp();
        this.addSpeed = myCharacter.getAddSpeed();
        this.addCritical = myCharacter.getAddCritical();
        this.addAvoid = myCharacter.getAddAvoid();

        this.pos = myCharacter.getPos();
        this.statPoint = myCharacter.getStatPoint();

    }
}
