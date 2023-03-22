package com.example.gameproject.dto.request;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StageDto {
    private int stage;
    private int subStage;

    public StageDto(int nextStage, int nextStep) {
        this.stage = nextStage;
        this.subStage = nextStep;
    }
}
