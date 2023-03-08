package com.example.gameproject.db.entity;


import javax.persistence.Entity;

@Entity
public class Character {
    private String className;
    private String name;
    private String subName;
    private int HP;
    private int AD;
    private int AP;
    private int SPEED;
    private int CRITICAL;
    private int AVOID;


    // 유저와 중계테이블 연결 필요


}
