package com.example.gameproject.dto.response;


import lombok.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillDto {

    private int skillNum;
    private String skillName;
    private int skillType;
    private boolean isRange;
    private int value;
    private int skillTarget;

    private String stat;
    private int coolTime;

}
