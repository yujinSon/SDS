package com.example.gameproject.db.entity.Vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder // Setter 개념
@Getter // Getter
@NoArgsConstructor
@AllArgsConstructor
public class SkillVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int skillNum;
    private String skillName;
    private int skillType;
    private Boolean isRange;
    private int value;
    private int skillTarget;
    private String Stat;
    private int coolTime;

    @ManyToOne
    private CharacterVo character;

    @ManyToOne
    private SkillVo skill;




}
