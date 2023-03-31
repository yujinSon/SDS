package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.User;
import lombok.*;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SelectedCharacterDto {
    String className;
    String subClassName;
    int level;
    int hp;
    int ad;
    int ap;
    int speed;
    int critical;
    int avoid;
    int maxHp;
    int pos;
    int statPoint;
    int addHp;
    int addAd;
    int addAp;
    int addSpeed;
    int addCritical;
    int addAvoid;
    UserDto user;
    List<SkillDto> skills;
}
