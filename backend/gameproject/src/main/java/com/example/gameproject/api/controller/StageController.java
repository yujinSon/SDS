package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.StageService;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.dto.request.StageDto;
import com.example.gameproject.dto.response.MyCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/stage")
public class StageController {

    @Autowired
    private StageService stageService;

    // 전투 페이지 진입시 정보 불러오기.
    @GetMapping(value = "/load")
    public ResponseEntity<?> getBattleSetting() throws Exception {
        Map<String, List> res = stageService.BattleSetting();

        return ResponseEntity.ok(res);
    }

    // 내 스테이지 진행상황을 저장한다.
    @PutMapping(value = "/save")
    public ResponseEntity<?> saveMyStage(@RequestBody StageDto stageDto) throws Exception {
        stageService.saveMyStage(stageDto);
        return ResponseEntity.ok("OK");
    }
}
