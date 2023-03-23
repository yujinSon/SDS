package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SkillDtoCons {

    private Long skillId;
    private int skillNum;
    private String skillName;
    private int skillType;
    private boolean isRange;
    private int value;
    private int skillTarget;
    private String stat;
    private int coolTime;
    private String factor;

    public SkillDtoCons(Skill skill) {
        this.skillId = skill.getId();
        this.skillName = skill.getSkillName();
        this.skillNum = skill.getSkillNum();
        this.skillType = skill.getDurationTurn();
        this.isRange = skill.isRange();
        this.value = skill.getValue();
        this.skillTarget = skill.getSkillTarget();
        this.stat = skill.getStat();
        this.coolTime = skill.getCoolTime();
        this.factor = skill.getFactor();

    }

}
