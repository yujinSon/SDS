package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.repository.SkillRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class RandomCharacterDto {
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

    private List<SkillDtoCons> skills = new ArrayList<>();


    public RandomCharacterDto(DefaultCharacter character, int level, SkillRepository skillRepository){
        this.className = character.getClassName();
        this.subClassName = character.getSubName();
        this.level = level;
        this.hp = character.getCharacterStat().getHp();
        this.ad = character.getCharacterStat().getAd();
        this.ap = character.getCharacterStat().getAp();
        this.speed = character.getCharacterStat().getSpeed();
        this.critical = character.getCharacterStat().getCritical();
        this.avoid = character.getCharacterStat().getAvoid();
        this.maxHp = character.getCharacterStat().getHp();

        List<Skill> skillList = skillRepository.getskills(character.getId());

        for (Skill skill : skillList) {
            SkillDtoCons skillDto = new SkillDtoCons(skill);
            this.skills.add(skillDto);
        }
    }
}
