package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.db.entity.Character;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.TestDto;
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

    @GetMapping(value = "/test/{stage}")
    public ResponseEntity<?> TestApi(@PathVariable int stage) throws Exception {
        TestDto result = characterService.MyTest(stage);
        return ResponseEntity.ok(result);
    }

}
