package com.example.gameproject.db.entity;

import javax.persistence.Entity;

@Entity
public class Skill {
    private String skillName;
    private int skillType;
    private boolean isRange;
    private int value;
    private  boolean isEnemy;
    private int target;
    private int coolDown;


    private Character character;
    private Villain villain;


}
