package com.example.gameproject.db.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class Skill implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int skillNum;
    private String skillName;
    private int durationTurn; // 턴 지속시간
    private boolean isRange; // 0 : 단일, 1: 범위
    private int value; // 수치
    private int skillTarget; // 0: 빌런에게 공격, 1: 아군에게 적용
    private String Stat; // 어떤 영향을 미치는 것인가
    private int coolTime; // 쓰고 나서의 시간
    private String factor;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private DefaultCharacter defaultCharacter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "villain_id")
    private Villain villain;

    @OneToMany(mappedBy = "skill", cascade = CascadeType.ALL)
    private List<EffectTime> effectTimes = new ArrayList<>();

    @OneToMany(mappedBy = "skill", cascade = CascadeType.ALL)
    private List<CoolTime> coolTimes = new ArrayList<>();
}
