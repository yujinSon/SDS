package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.StageService;
import com.example.gameproject.dto.request.StageDto;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/stage")
@RequiredArgsConstructor
public class StageController {

    private final StageService stageService;
    private final JwtTokenProvider jwtTokenProvider;

    // 전투 페이지 진입시 정보 불러오기.
    @GetMapping(value = "/load")
    public ResponseEntity<?> getBattleSetting(@RequestHeader String Authorization) throws Exception {
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        Map<String, List> res = stageService.BattleSetting(email);

        return ResponseEntity.ok(res);
    }

    // 내 스테이지 진행상황을 저장한다.
    @PutMapping(value = "/save")
    public ResponseEntity<?> saveMyStage(@RequestBody StageDto stageDto) throws Exception {
        stageService.saveMyStage(stageDto);
        return ResponseEntity.ok("OK");
    }
}
