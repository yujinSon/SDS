package com.example.gameproject.dto.request;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@NoArgsConstructor
@ToString
public class ShopChangeRequest {

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
	private int pos;
}
