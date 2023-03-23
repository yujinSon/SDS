package com.example.gameproject.api.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.gameproject.api.service.ShopService;
import com.example.gameproject.dto.request.ShopAddRequest;
import com.example.gameproject.dto.request.ShopChangeRequest;
import com.example.gameproject.dto.response.RelicResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/shop")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ShopController {

	private final ShopService shopService;

	@PostMapping("/add/{userId}")
	public ResponseEntity<String> addCharacter(@RequestBody List<ShopAddRequest> characterList , @PathVariable long userId){
		shopService.addCharacter(userId, characterList);
		return ResponseEntity.status(201).body("success");
	}

	@PutMapping("/change/{userId}")
	public ResponseEntity<String> changeCharacter(@RequestBody List<ShopChangeRequest> characterList, @PathVariable long userId){
		shopService.changeCharacter(userId, characterList);
		return ResponseEntity.status(200).body("success");

	}

	@PutMapping("/rest/{userId}")
	public ResponseEntity<?> healHp(@PathVariable long userId){
		shopService.updateHp(userId);
		return ResponseEntity.status(200).body("success");
	}

	@PostMapping("relic/{userId}")
	public ResponseEntity<RelicResponse> sendRelic(@PathVariable long userId){
		RelicResponse relic = shopService.getRelic(userId);
		return ResponseEntity.status(201).body(relic);
	}
}
