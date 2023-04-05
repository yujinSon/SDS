package com.example.gameproject.api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gameproject.api.service.ShopService;
import com.example.gameproject.dto.request.ShopAddRequest;
import com.example.gameproject.dto.request.ShopChangeRequest;
import com.example.gameproject.dto.response.RelicResponse;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/shop")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ShopController {

	private final ShopService shopService;
	private final JwtTokenProvider jwtTokenProvider;

	@PostMapping("/add")
	public ResponseEntity<String> addCharacter(@RequestHeader String Authorization, @RequestBody List<ShopAddRequest> characterList){
		String token = Authorization.split(" ")[1];
		String email = jwtTokenProvider.getUserPk(token);
		shopService.addCharacter(email, characterList);
		return ResponseEntity.status(201).body("success");
	}

	@PutMapping("/change")
	public ResponseEntity<String> changeCharacter(@RequestHeader String Authorization, @RequestBody List<ShopChangeRequest> characterList){
		String token = Authorization.split(" ")[1];
		String email = jwtTokenProvider.getUserPk(token);
		shopService.changeCharacter(email, characterList);
		return ResponseEntity.status(200).body("success");

	}

	@PutMapping("/rest")
	public ResponseEntity<?> healHp(@RequestHeader String Authorization){
		String token = Authorization.split(" ")[1];
		String email = jwtTokenProvider.getUserPk(token);
		shopService.updateHp(email);
		return ResponseEntity.status(200).body("success");
	}

	@PostMapping("/relic")
	public ResponseEntity<RelicResponse> sendRelic(@RequestHeader String Authorization){
		String token = Authorization.split(" ")[1];
		String email = jwtTokenProvider.getUserPk(token);
		RelicResponse relic = shopService.getRelic(email);
		return ResponseEntity.status(201).body(relic);
	}
}
