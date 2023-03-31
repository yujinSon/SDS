package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
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
    public ResponseEntity<?> getRandomCharactersList(@RequestHeader String Authorization) throws Exception{
        String token = Authorization.split(" ")[1];
        String userEmail = jwtTokenProvider.getUserPk(token);
        List<RandomCharacterDto> result = characterService.RandomCharacter(userEmail);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> postSaveRandomCharacter(@RequestBody RandomCharacterDto randomCharacterDto) throws Exception {
        characterService.SaveRandomCharacter(randomCharacterDto);
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

}
