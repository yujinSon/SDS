package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.dto.request.AddStatDto;
import com.example.gameproject.dto.request.YoutubeDto;
import com.example.gameproject.dto.response.InitialBattleCharacterDto;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/character")
@RequiredArgsConstructor
public class CharacterController {
    private final CharacterService characterService;
    private final JwtTokenProvider jwtTokenProvider;

    // 랜덤으로 3명을 데려온다.
    @GetMapping(value = "/random")
    public ResponseEntity<List<RandomCharacterDto>> getRandomCharactersList(@RequestHeader String Authorization) throws Exception{
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        List<RandomCharacterDto> result = characterService.RandomCharacter(email);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> postSaveRandomCharacter(@RequestHeader String Authorization, @RequestBody RandomCharacterDto randomCharacterDto) throws Exception {
        System.out.println(randomCharacterDto.toString());
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        characterService.SaveRandomCharacter(randomCharacterDto, email);
        return ResponseEntity.ok("OK");
    }

//    @GetMapping("/selected")
    @GetMapping("/selected")
    public ResponseEntity<?> getSelectedCharacterList(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        List<SelectedCharacterDto> result = characterService.getCharacterList(email);
        return ResponseEntity.status(200).body(result);
    }

    @PutMapping("/youtube")
    public ResponseEntity<?> putYoutube(@RequestBody YoutubeDto youtubeDto) throws Exception{
        characterService.updateartifact(youtubeDto);
        return ResponseEntity.status(200).body("ok");
    }

    @PutMapping("/addstat")
    public ResponseEntity<?> updateStat(@RequestHeader String Authorization, @RequestBody AddStatDto addStatDto) throws Exception{
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        List<InitialBattleCharacterDto> res = characterService.updateStat(addStatDto, email);
        return ResponseEntity.status(200).body(res);
    }
}
