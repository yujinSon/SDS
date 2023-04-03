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
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
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
    //@PreAuthorize("hasRole('ROLE_USER')")
    @GetMapping(value = "/random")
    public ResponseEntity<List<RandomCharacterDto>> getRandomCharactersList(@RequestHeader String Authorization) throws Exception{
        String token = Authorization.split(" ")[1];
        String userEmail = jwtTokenProvider.getUserPk(token);
        List<RandomCharacterDto> result = characterService.RandomCharacter(userEmail);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> postSaveRandomCharacter(@RequestHeader String Authorization, @RequestBody RandomCharacterDto randomCharacterDto) throws Exception {
        String token = Authorization.split(" ")[1];
        String userEmail = jwtTokenProvider.getUserPk(token);
        characterService.SaveRandomCharacter(randomCharacterDto, userEmail);
        return ResponseEntity.ok("OK");
    }

//    @GetMapping("/selected")
    @GetMapping("/selected")
    public ResponseEntity<?> getSelectedCharacterList(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String userEmail = jwtTokenProvider.getUserPk(token);
        List<SelectedCharacterDto> result = characterService.getCharacterList(userEmail);
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
