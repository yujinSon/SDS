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
@NoArgsConstructor // Builder를 쓸 때 필요함 => Bulder에서 아무것도 안쓸 때를 대비해서 쓰긴 해야함
@AllArgsConstructor
public class ArtifactVo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private Boolean isRange;
    private int targetClass;
    private String stat;
    private int value;

}