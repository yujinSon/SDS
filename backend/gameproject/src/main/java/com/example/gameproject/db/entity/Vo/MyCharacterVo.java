package com.example.gameproject.db.entity.Vo;

import com.example.gameproject.dto.response.RandomCharacterDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Builder // Setter 개념
@Getter // Getter
@NoArgsConstructor
@AllArgsConstructor
public class MyCharacterVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

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

    @ManyToOne
    private CharacterVo character;

    @ManyToOne
    private UserVo user;

//    public void SelectRandomCharacter(RandomCharacterDto randomCharacterDto){
//        this.character =
//
//    }
}
