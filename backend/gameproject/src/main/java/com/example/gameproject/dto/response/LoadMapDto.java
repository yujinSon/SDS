package com.example.gameproject.dto.response;

import com.example.gameproject.db.entity.Map;
import com.example.gameproject.db.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class LoadMapDto {
    private int stage;
    private int nowStep;
    private List<Integer> nextStep = new ArrayList<>();

    public LoadMapDto(List<Map> myMapList, User user) {
        this.stage = user.getStage();
        this.nowStep = user.getSubStage();
        for (Map map : myMapList) {
            nextStep.add(map.getNextStep());
        }
    }

}
