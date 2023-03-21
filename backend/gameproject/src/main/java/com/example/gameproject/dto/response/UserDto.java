package com.example.gameproject.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private String nickname;
    private String email;
    private int bestScore;
    private int stage;
    private int subStage;
    private int turn;
    private int finalScore;
}
