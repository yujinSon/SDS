package com.example.gameproject.db.entity;

import com.example.gameproject.db.entity.Vo.ArtifactVo;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
public class Artifact {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Column(columnDefinition = "TINYINT(1)")
    private boolean isRange;
    private int targetClass;
    private String stat;
    private int value;

    @OneToMany(mappedBy = "artifact", cascade = CascadeType.ALL)
    private List<UserArtifact> userArtifacts = new ArrayList<>();

    public Artifact(ArtifactVo artifactVo){
        this.id = artifactVo.getId();
        this.name = artifactVo.getName();
    }
}
