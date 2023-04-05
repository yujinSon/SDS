package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MyCharacterTurnDto {
    private Long Id;
    private String className;
    private String subClass;
    private int level;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private List<BattleTurnSkillDto> skillList;
    private int pos;
    private int maxHp;


    public MyCharacterTurnDto(MyCharacter character, String stat, int value, int remain){
        if (stat.contains("ad")){
            this.ad = character.getAd() + value;
        }else{
            this.ad = character.getAd();
        }

        if (stat.contains("ap")){
            this.ap = character.getAp() + value;
        }else{
            this.ap = character.getAp();
        }

        if (stat.contains("speed")){
            this.speed = character.getSpeed() + value;
        }else{
            this.speed = character.getSpeed();
        }

        if (stat.contains("avoid")){
            this.avoid = character.getAvoid() + value;
        }else{
            this.avoid = character.getAvoid();
        }

        if(stat.contains("critical")){
            this.critical = character.getCritical() + value;
        }else{
            this.critical = character.getCritical();
        }

        this.Id = character.getId();
        this.className = character.getDefaultCharacter().getClassName();
        this.subClass = character.getDefaultCharacter().getSubName();
        this.level = character.getLevel();
        this.hp = character.getHp();
        this.maxHp = character.getMaxHp();
        this.pos = character.getPos();
        List<BattleTurnSkillDto> skillDtoList = new ArrayList<>();
        for (Skill skill: character.getDefaultCharacter().getMySkill()){
            BattleTurnSkillDto skillDto = BattleTurnSkillDto.builder()
                    .skillNum(skill.getSkillNum())
                    .skillName(skill.getSkillName())
                    .skillType(skill.getDurationTurn())
                    .isRange(skill.isRange())
                    .value(skill.getValue())
                    .skillTarget(skill.getSkillTarget())
                    .stat(skill.getStat())
                    .coolTime(skill.getCoolTime())
                    .remain(remain)
                    .build();
            skillDtoList.add(skillDto);
        }
        this.skillList = skillDtoList;
    }
}
