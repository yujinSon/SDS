package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.StageService;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.dto.response.MyCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stage")
public class StageController {

    @Autowired
    private StageService stageService;

    // 전투 페이지 진입시 정보 불러오기.
    @GetMapping(value = "/load/{stage}/{step}")
    public ResponseEntity<?> getBattleSetting(@PathVariable int stage, @PathVariable int step) throws Exception {
//        Map<String, List> res = stageService.BalttleSetting(stage, step);
        List<MyCharacterDto> res = stageService.BattleSetting(stage, step);
        System.out.println("되는 거야 마는 거야???");
        System.out.println(res);
        return ResponseEntity.ok(res);
    }
}
