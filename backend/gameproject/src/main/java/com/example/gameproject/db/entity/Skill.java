package com.example.gameproject.db.entity;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int skillNum;
    private String skillName;
    private int skillType;
    @Column(columnDefinition = "TINYINT(1)")
    private boolean isRange;
    private int value;
    private int skillTarget;
    private String Stat;
    private int coolTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private Character character;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "villain_id")
    private Villain villain;

    @OneToMany(mappedBy = "skill", cascade = CascadeType.ALL)
    private List<EffectTime> effectTimes = new ArrayList<>();

    @OneToMany(mappedBy = "skill", cascade = CascadeType.ALL)
    private List<CoolTime> coolTimes = new ArrayList<>();



}
