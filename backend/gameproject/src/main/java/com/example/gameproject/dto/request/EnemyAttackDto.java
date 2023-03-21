package com.example.gameproject.dto.request;

import com.example.gameproject.dto.response.SkillDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EnemyAttackDto {
//    boolean isRange;
//    boolean isAttack;
//    int damage;
    int target;
    SkillRequestDto skill;
}
