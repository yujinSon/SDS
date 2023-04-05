package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.repository.SkillRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Getter
@NoArgsConstructor
@ToString
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
    private  int pos;

    private List<SkillDtoCons> skills = new ArrayList<>();


    public RandomCharacterDto(DefaultCharacter character, int level, SkillRepository skillRepository){
        List<Double> myList = Arrays.asList(0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3);

        Random random = new Random();
        int randomIndex = random.nextInt(myList.size());
        this.className = character.getClassName();
        this.subClassName = character.getSubName();
        this.level = level;
        this.hp = (int) Math.round(character.getCharacterStat().getHp());
        randomIndex = random.nextInt(myList.size());
        this.ad = (int) Math.round(character.getCharacterStat().getAd());
        randomIndex = random.nextInt(myList.size());
        this.ap = (int) Math.round(character.getCharacterStat().getAp());
        randomIndex = random.nextInt(myList.size());
        this.speed = (int) Math.round(character.getCharacterStat().getSpeed());
        randomIndex = random.nextInt(myList.size());
        this.critical = (int) Math.round(character.getCharacterStat().getCritical());
        randomIndex = random.nextInt(myList.size());
        this.avoid = (int) Math.round(character.getCharacterStat().getAvoid());
        this.maxHp = character.getCharacterStat().getHp();
        this.pos = -1;

        List<Skill> skillList = skillRepository.getskills(character.getId());

        for (Skill skill : skillList) {
            SkillDtoCons skillDto = new SkillDtoCons(skill);
            this.skills.add(skillDto);
        }
    }
}
