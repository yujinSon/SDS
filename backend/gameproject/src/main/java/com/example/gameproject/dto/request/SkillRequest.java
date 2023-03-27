package com.example.gameproject.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillRequest {
    private int skillNum;
    private String skillName;
    private int skillType;
    private boolean isRange;
    private int value;
    private int skillTarget;
    private String stat;
    private int coolTime;
}
