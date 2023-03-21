package com.example.gameproject.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MyCharacterUpdateDto {
    private int level;
    private int maxHp;
    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;
    private int addHp;
    private int addAd;
    private int addAp;
    private int addSpeed;
    private int addCritical;
    private int addAvoid;
    private int pos;
    private int statPoint;
}
