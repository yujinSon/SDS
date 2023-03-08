package com.example.gameproject.db.entity;

import javax.persistence.Entity;

@Entity
public class Relics {
    private String name;
    private boolean isRange;
    private String reflectClass; // 효과를 받는 클래스 이름 ( 전체 범위면 그냥 null)
    private String targetStat; // 효과를 받는 스텟
    private int value;


    private User user;

}
