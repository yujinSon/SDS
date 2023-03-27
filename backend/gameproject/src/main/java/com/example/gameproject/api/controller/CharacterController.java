package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.CharacterService;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/character")
public class CharacterController {
    @Autowired
    private CharacterService characterService;

    // 랜덤으로 3명을 데려온다.
//    @GetMapping(value = "/random")
    @GetMapping(value = "/random")
    public ResponseEntity<?> getRandomCharactersList(@PathVariable Long userId) throws Exception{
        List<RandomCharacterDto> result = characterService.RandomCharacter(userId);
        return ResponseEntity.ok(result);
    }

    @PostMapping(value = "/save")
    public ResponseEntity<?> postSaveRandomCharacter(@RequestBody RandomCharacterDto randomCharacterDto) throws Exception {
        characterService.SaveRandomCharacter(randomCharacterDto);
        return ResponseEntity.ok("OK");
    }

//    @GetMapping("/selected")
    @GetMapping("/selected/{userId}")
    public ResponseEntity<?> getSelectedCharacterList(@PathVariable("userId") long userId){
        //여기서 access token에서 userId값 가져와야함
        List<SelectedCharacterDto> result = characterService.getCharacterList(userId);
        return ResponseEntity.status(200).body(result);
    }

}
