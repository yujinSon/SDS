package com.example.gameproject.db.entity;

import javax.persistence.Entity;

@Entity
public class Villain {
    private String ClassName;
    private String name;
    private int HP;
    private int AD;
    private int AP;
    private int SPEED;
    private int CRITICAL;
    private int AVOID;
    private boolean isBoss;
}
