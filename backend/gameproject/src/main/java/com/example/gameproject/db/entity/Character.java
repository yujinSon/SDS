package com.example.gameproject.db.entity;


import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "`character") // mysql 예약어
public class Character {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String className;
    private String subName;

    @OneToOne
    @JoinColumn(name = "characterStat_id")
    private CharacterStat characterStat;

    @OneToMany(mappedBy = "character", cascade = CascadeType.ALL)
    private List<MyCharacter> myCharacters = new ArrayList<>();

    @OneToMany(mappedBy = "character", cascade = CascadeType.ALL)
    private List<Skill> mySkill = new ArrayList<>();


}
