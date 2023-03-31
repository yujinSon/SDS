package com.example.gameproject.db.entity;

import com.example.gameproject.db.entity.Vo.ArtifactVo;

import com.example.gameproject.dto.request.YoutubeDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Artifact implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private boolean isRange;
    private String targetClass;
    private String stat;
    private int value;

    @OneToMany(mappedBy = "artifact", cascade = CascadeType.ALL)
    private List<UserArtifact> userArtifacts = new ArrayList<>();

    public void updateArtifact(Artifact artifact, int value){
        this.id = artifact.id;
        this.name = artifact.name;
        this.isRange = artifact.isRange;
        this.targetClass = artifact.targetClass;
        this.stat = artifact.stat;
        this.value = value;
    }
}
