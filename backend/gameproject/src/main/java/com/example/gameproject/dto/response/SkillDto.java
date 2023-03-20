package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SkillDto {

    private int skillNum;
    private String skillName;
    private int skillType;
    private boolean isRange;
    private int value;
    private int skillTarget;
    private String stat;
    private int coolTime;

    public SkillDto(Skill skill) {
        this.skillName = skill.getSkillName();
        this.skillNum = skill.getSkillNum();
        this.skillType = skill.getSkillType();
        this.isRange = skill.isRange();
        this.value = skill.getValue();
        this.skillTarget = skill.getSkillTarget();
        this.stat = skill.getStat();
        this.coolTime = skill.getCoolTime();

    }

}
