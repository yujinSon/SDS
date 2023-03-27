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

import java.util.ArrayList;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/battle")
public class BattleController {
    @Autowired
    BattlePlayerTurnService battlePlayerTurnService;

    @Autowired
    BattleService battleService;

    @Autowired
    EnemyAttackService enemyAttackService;

    //    @PutMapping("/enemy")
    @PutMapping("/enemy/{userId}")
    ResponseEntity<?> attackedFromEnemy(@RequestBody EnemyAttackDto enemyAttackDto, @PathVariable("userId") long userId) {
        System.out.println("YRETYTERYEYERYERYRE");
        List<MyCharacterAttackDto> res = enemyAttackService.enemyAttack(enemyAttackDto, userId);

        return ResponseEntity.status(200).body(res);
    }

//    @PostMapping("/player")
    @PostMapping("/player/{userId}")
    public ResponseEntity<?> attackEnemy(@RequestBody PlayerAttackDto playerAttackDto, @PathVariable("userId") long userId){
        List<MyCharacterAttackDto> res = battlePlayerTurnService.myTurnAttack(playerAttackDto, userId);


        return ResponseEntity.status(200).body(res);
    }

    @GetMapping("/finished")
    public ResponseEntity<?> GetTurnFinished(){
        battleService.CoolTime();
        battleService.EffectTime();
        return ResponseEntity.ok(battleService.MyCharacterList());
    }

    @DeleteMapping("/end")
    public ResponseEntity<?> DeleteCoolTimeEffectTime(){
        battleService.DeleteEffect();
        return ResponseEntity.ok("delete_ok");
    }

    @PutMapping("/victory/{userId}")
    public ResponseEntity<String> updateStat(@RequestBody List<CharacterVictoryStat> chagedStatList, @PathVariable long userId){
        battleService.updateStat(userId, chagedStatList);
        return ResponseEntity.status(200).body("success");
    }
}
