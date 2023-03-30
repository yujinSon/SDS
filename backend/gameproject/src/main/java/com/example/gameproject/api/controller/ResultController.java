package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.ResultService;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.RankingDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/result")
public class ResultController {
    @Autowired
    ResultService resultService;

    @GetMapping("/ranking")
    public ResponseEntity<?> getRankingList() throws Exception{
        return ResponseEntity.ok(resultService.Ranking());
    }

    // 내케릭이 다 죽어서 게임 패배
    @PutMapping("/gameover")
    public ResponseEntity<?> getGameOver() throws Exception{
        return ResponseEntity.ok(resultService.GameOver());
    }

    @DeleteMapping("/clear")
    public ResponseEntity<?> deleteCharacters() throws Exception{
        resultService.Clear();
        return ResponseEntity.ok("Delete Ok");
    }

}
