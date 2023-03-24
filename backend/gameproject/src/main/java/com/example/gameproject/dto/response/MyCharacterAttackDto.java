package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class MyCharacterAttackDto {
    private String className;
    private String subName;
    private int level;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private int maxHp;
    private int pos;

    private List<SkillDtoCons> skills = new ArrayList<>();
    private List<Boolean> skillCoolTime = new ArrayList<>();;


    public MyCharacterAttackDto(MyCharacter myCharacter, List<Skill>skills, List<Long>coolTimeSkillId) {
        this.className = myCharacter.getDefaultCharacter().getClassName();
        this.subName = myCharacter.getDefaultCharacter().getSubName();
        this.level = myCharacter.getLevel();
        this.hp = myCharacter.getHp();
        this.ad = myCharacter.getAd();
        this.ap = myCharacter.getAp();
        this.speed = myCharacter.getSpeed();
        this.critical = myCharacter.getCritical();
        this.avoid = myCharacter.getAvoid();
        this.maxHp = myCharacter.getMaxHp();
        this.pos = myCharacter.getPos();

        // 스킬 순서가 고정 되어 있어야함, 스킬 쿨타임하고 맞춰야 되니깐
        for (Skill skill : skills) {
            this.skills.add(new SkillDtoCons(skill));
            if (coolTimeSkillId.contains(skill.getId())) {
                // 쿨타임 목록에 있으면 false
                this.skillCoolTime.add(false);
            } else {
                // 있으면 true
                this.skillCoolTime.add(true);
            }
        }

    }
}
