package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.repository.SkillRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class SkillListDto {

    private List<SkillDto> skillListDto = new ArrayList<>();

    public SkillListDto(List<Skill> skills) {
        for (Skill skill : skills) {
            SkillDto skillDto = new SkillDto(skill);
            this.skillListDto.add(skillDto);
        }
    }
}
