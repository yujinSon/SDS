package com.example.gameproject.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Builder
@Getter
@ToString
public class UserResponse {
	private String token;
}
