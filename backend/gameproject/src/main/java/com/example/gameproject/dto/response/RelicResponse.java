package com.example.gameproject.dto.response;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter

public class RelicResponse {
	private String name;
	private boolean isRange;
	private int targetClass;
	private String stat;
	private int value;

	public RelicResponse(com.example.gameproject.db.entity.Artifact artifact){
		this.name = artifact.getName();
		this.isRange = artifact.isRange();
		this.targetClass = artifact.getTargetClass();
		this.stat = artifact.getStat();
		this.value = artifact.getValue();
	}
}
