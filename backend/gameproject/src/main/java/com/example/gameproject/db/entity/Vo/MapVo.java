package com.example.gameproject.db.entity.Vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Builder // Setter 개념
@Getter // Getter
@NoArgsConstructor
@AllArgsConstructor
public class MapVo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int Stage;
    private int nowStep;
    private int nextStep;

}
