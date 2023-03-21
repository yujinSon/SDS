package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.Map;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MapDto {
    private int stage;
    private int nowStep;
    private int nextStep;

    public MapDto(Map map) {
        this.stage = map.getStage();
        this.nowStep = map.getNowStep();
        this.nextStep = map.getNextStep();
    }

}
