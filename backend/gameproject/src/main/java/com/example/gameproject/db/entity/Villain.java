package com.example.gameproject.db.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Villain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String className;
    private String subName;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private boolean isBoss;

    @OneToMany(mappedBy = "villain", cascade = CascadeType.ALL)
    private List<Skill> mySkill = new ArrayList<>();


}
