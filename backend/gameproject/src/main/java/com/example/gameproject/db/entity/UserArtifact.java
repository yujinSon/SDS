package com.example.gameproject.db.entity;

import javax.persistence.*;

@Entity
public class UserArtifact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Artifact artifact;
}
