package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattlePlayerTurnService;
import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.api.service.EnemyAttackService;
import com.example.gameproject.dto.request.CharacterVictoryStat;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.ArrayList;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/battle")
public class BattleController {
    @Autowired
    BattlePlayerTurnService battlePlayerTurnService;

    @Autowired
    BattleService battleService;

    @Autowired
    EnemyAttackService enemyAttackService;


    @PutMapping("/enemy")
    public ResponseEntity<?> attackedFromEnemy(@RequestBody EnemyAttackDto enemyAttackDto) {
        long userId = 1L;
//        List<MyCharacterAttackDto> res = enemyAttackService.enemyAttack(enemyAttackDto, userId);
        Map<String, List> res = enemyAttackService.enemyAttack(enemyAttackDto, userId);


        return ResponseEntity.status(200).body(res);
    }

//    @PostMapping("/player")
    @PostMapping("/player")
    public ResponseEntity<?> attackEnemy(@RequestBody PlayerAttackDto playerAttackDto){
        long userId = 1L;
        List<MyCharacterAttackDto> res = battlePlayerTurnService.myTurnAttack(playerAttackDto, userId);

        return ResponseEntity.status(200).body(res);
    }

//    @PutMapping("/finished")
    @PutMapping("/finished")
    public ResponseEntity<?> GetTurnFinished(){
        long userId = 1L;
        battleService.CoolTime(userId);
        battleService.EffectTime(userId);

        return ResponseEntity.ok(battleService.MyCharacterList(userId));
    }

    @DeleteMapping("/end")
    public ResponseEntity<?> DeleteCoolTimeEffectTime(){
        long userId = 1L;
        battleService.DeleteEffect(userId);
        return ResponseEntity.ok("delete_ok");
    }

    @PutMapping("/victory")
    public ResponseEntity<String> updateStat(@RequestBody List<CharacterVictoryStat> chagedStatList){
        long userId = 1L;
        battleService.updateStat(userId, chagedStatList);
        return ResponseEntity.status(200).body("success");
    }

}
