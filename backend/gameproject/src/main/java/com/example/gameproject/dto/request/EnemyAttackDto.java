package com.example.gameproject.dto.request;

import com.example.gameproject.dto.response.SkillDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class EnemyAttackDto {
    int target;
    int damage;
    String skillName;
}
