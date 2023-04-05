package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

// 초기 셋팅이므로 스킬 쿨다임은 부조건 [True, True]
@Getter
@NoArgsConstructor
public class InitialBattleCharacterDto {
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

    private String className;
    private String subName;

    private List<SkillDtoCons> skills;
    private List<Boolean> skillCoolTime = new ArrayList<>();

    public InitialBattleCharacterDto(MyCharacter myCharacter, List<SkillDtoCons> skills) {
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

        this.className = myCharacter.getDefaultCharacter().getClassName();
        this.subName = myCharacter.getDefaultCharacter().getSubName();

        this.skills = skills;
        for (int i = 0; i < 3; i++) {
            this.skillCoolTime.add(true);
        }
    }
}
