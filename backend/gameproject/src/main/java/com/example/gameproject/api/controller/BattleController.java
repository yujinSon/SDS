package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.dto.request.EnemyAttackDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/battle")
public class BattleController {
    @Autowired
    BattleService battleService;

//    @PutMapping("/enemy")
//    ResponseEntity<?> attackedFromEnemy(@RequestBody EnemyAttackDto enemyAttackDto) {
//        battleService
//        return;
//    }
//    @PostMapping("/player")
//    ResponseEntity<?>

    @GetMapping("/finished")
    public ResponseEntity<?> GetTurnFinished(){
        battleService.CoolTime();
        battleService.EffectTime();
        return ResponseEntity.ok(battleService.MyCharacterList());
    }

}
