package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.Artifact;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ArtifactDto {
    private boolean isRange;
    private String name;
    private String stat;
    private String targetClass;
    private int value;

    public ArtifactDto(Artifact artifact) {
        this.isRange = artifact.isRange();
        this.name = artifact.getName();
        this.stat = artifact.getStat();
        this.targetClass = artifact.getTargetClass();
        this.value = artifact.getValue();
    }

}
