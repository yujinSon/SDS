package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.Villain;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class VillainDto {

    private String className;
    private String subName;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private boolean isBoss;
    private int maxHp;

    private int pos;

    private List<SkillDtoCons> skills = new ArrayList<>();

    public VillainDto(Villain villain, List<Skill> skills, int pos) {
        this.className = villain.getClassName();
        this.subName = villain.getSubName();
        this.hp = villain.getHp();
        this.ad = villain.getAd();
        this.ap = villain.getAp();
        this.speed = villain.getSpeed();
        this.critical = villain.getCritical();
        this.avoid = villain.getAvoid();
        this.isBoss = villain.isBoss();
        this.maxHp = villain.getMaxHp();

        for (Skill skill : skills) {
            SkillDtoCons skillDto = new SkillDtoCons(skill);
            this.skills.add(skillDto);
        }

        this.pos = pos;
    }

}
