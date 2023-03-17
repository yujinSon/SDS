package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.dto.response.RandomCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/character")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    // 랜덤으로 3명을 데려온다.
    @GetMapping(value = "/random/{stage}")
    public ResponseEntity<?> getRandomCharactersList(@PathVariable int stage) throws Exception{
        List<RandomCharacterDto> result = characterService.RandomCharacter(stage);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> postSaveRandomCharacter(@RequestBody RandomCharacterDto randomCharacterDto) throws Exception{
        characterService.SaveRandomCharacter(randomCharacterDto);
        return ResponseEntity.ok("OK");
    }

}
