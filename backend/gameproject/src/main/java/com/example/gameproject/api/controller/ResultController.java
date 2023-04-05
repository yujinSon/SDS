package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.ResultService;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/result")
@RequiredArgsConstructor
public class ResultController {
    private final ResultService resultService;
    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/ranking")
    public ResponseEntity<?> getRankingList() throws Exception{
        return ResponseEntity.ok(resultService.Ranking());
    }

    // 내 캐릭이 다 죽어서 게임 패배
    @PutMapping("/gameover")
    public ResponseEntity<?> getGameOver(@RequestHeader String Authorization) throws Exception{
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        resultService.GameOver(email);
        return ResponseEntity.ok("update ok");
    }

    // 적 빌런이 모두 죽어서 승리했을때.
    @PutMapping("/win")
    public ResponseEntity<?> win(
        @RequestHeader String Authorization) throws Exception{
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        resultService.GameWin(email);
        return ResponseEntity.ok("update ok");
    }

    @DeleteMapping("/clear")
    public ResponseEntity<?> deleteCharacters() throws Exception{
        resultService.Clear();
        return ResponseEntity.ok("Delete Ok");
    }

}
