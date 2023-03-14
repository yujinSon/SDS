package com.example.gameproject.db.entity.Vo;


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
public class CharacterVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String className;
    private String subName;

    @OneToOne
    private CharacterStatVo characterStat;


}
