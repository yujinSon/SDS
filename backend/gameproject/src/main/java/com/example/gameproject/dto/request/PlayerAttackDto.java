package com.example.gameproject.dto.request;

import com.example.gameproject.dto.response.SkillDto;
import com.example.gameproject.dto.response.SkillDtoCons;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PlayerAttackDto {
    int pos;
    String skillName;
    int target;
}
