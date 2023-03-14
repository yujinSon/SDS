package com.example.gameproject.db.entity.Vo;

import com.example.gameproject.db.entity.Artifact;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Builder // Setter 개념
@Getter // Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserArtifactVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private UserVo user;

    @ManyToOne
    private Artifact artifact;
}
