package com.example.gameproject.db.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Artifact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Boolean isRange;
    private int targetClass;
    private String stat;
    private int value;

    @OneToMany
    private List<UserArtifact> userArtifacts = new ArrayList<>();


}
