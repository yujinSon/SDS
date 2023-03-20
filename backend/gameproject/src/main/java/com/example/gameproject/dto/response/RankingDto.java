package com.example.gameproject.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RankingDto {
    private String nickname;
    private int bestScore;
    private int stage;
    private int subStage;
}
