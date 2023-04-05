package com.example.gameproject.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CoolTimePlayerTurnDto {
    private int turn;
    private Long myCharacterId;
    private Long skillId;

    public CoolTimePlayerTurnDto(SkillDtoCons skill, Long myCharacterId) {
        this.turn = skill.getCoolTime();
        this.skillId = skill.getSkillId();
        this.myCharacterId = myCharacterId;

    }

}
