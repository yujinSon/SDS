package com.example.gameproject.api.controller;
import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.dto.request.AddStatDto;
import com.example.gameproject.dto.request.YoutubeDto;
import com.example.gameproject.dto.response.InitialBattleCharacterDto;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

import lombok.RequiredArgsConstructor;

//@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/character")
@RequiredArgsConstructor
public class CharacterController {
	@Autowired
	private CharacterService characterService;

	private final JwtTokenProvider jwtTokenProvider;
	// 랜덤으로 3명을 데려온다.
	//    @GetMapping(value = "/random")
	@GetMapping(value = "/random")
	public ResponseEntity<List<RandomCharacterDto>> getRandomCharactersList(@RequestHeader String Authorization) throws Exception{
		String token = Authorization.split(" ")[1];
		String email = jwtTokenProvider.getUserPk(token);
		List<RandomCharacterDto> result = characterService.RandomCharacterEmail(email);
		return ResponseEntity.ok(result);
	}

	@PostMapping(value = "/save")
	public ResponseEntity<?> postSaveRandomCharacter(@RequestBody RandomCharacterDto randomCharacterDto) throws Exception {
		Long userId = 1l;
		characterService.SaveRandomCharacter(randomCharacterDto, userId);
		return ResponseEntity.ok("OK");
	}

	//    @GetMapping("/selected")
	@GetMapping("/selected")
	public ResponseEntity<?> getSelectedCharacterList(){
		long userId = 1L;
		//여기서 access token에서 userId값 가져와야함
		List<SelectedCharacterDto> result = characterService.getCharacterList(userId);
		return ResponseEntity.status(200).body(result);
	}

	@PutMapping("/youtube")
	public ResponseEntity<?> putYoutube(@RequestBody YoutubeDto youtubeDto) throws Exception{
		characterService.updateartifact(youtubeDto);
		return ResponseEntity.status(200).body("ok");
	}

	@PutMapping("/addstat")
	public ResponseEntity<?> updateStat(@RequestBody AddStatDto addStatDto) throws Exception{
		Long userId = 1l;
		List<InitialBattleCharacterDto> res = characterService.updateStat(addStatDto, userId);
		return ResponseEntity.status(200).body(res);
	}

}
