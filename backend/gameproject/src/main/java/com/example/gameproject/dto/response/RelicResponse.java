package com.example.gameproject.dto.response;


import com.example.gameproject.db.entity.Artifact;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class RelicResponse {
	private long id;

	public RelicResponse(Artifact artifact) {
		this.id = artifact.getId();
	}
}

