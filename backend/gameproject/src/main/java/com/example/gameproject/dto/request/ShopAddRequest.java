package com.example.gameproject.dto.request;

import java.util.List;

import com.example.gameproject.db.entity.Skill;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class ShopAddRequest {

	private String className;
	private String subClassName;
	private List<SkillRequest> skills;
	private int level;
	private int hp;
	private int ad;
	private int ap;
	private int speed;
	private int critical;
	private int avoid;
	private int maxHP;
}
