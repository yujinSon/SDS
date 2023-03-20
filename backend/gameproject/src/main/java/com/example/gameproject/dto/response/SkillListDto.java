package com.example.gameproject.dto.response;



import com.example.gameproject.db.entity.Skill;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class SkillListDto {

    private List<SkillDtoCons> skillListDto = new ArrayList<>();

    public SkillListDto(List<Skill> skills) {
        for (Skill skill : skills) {
            SkillDtoCons skillDto = new SkillDtoCons(skill);
            this.skillListDto.add(skillDto);
        }
    }
}
