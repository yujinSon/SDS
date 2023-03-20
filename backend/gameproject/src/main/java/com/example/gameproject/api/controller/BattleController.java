package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.dto.request.EnemyAttackDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

}
