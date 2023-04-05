
package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattlePlayerTurnService;
import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.api.service.EnemyAttackService;
import com.example.gameproject.dto.request.CharacterVictoryStat;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import com.example.gameproject.security.jwt.JwtTokenProvider;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.List;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/battle")
@RequiredArgsConstructor
public class BattleController {
    private final BattlePlayerTurnService battlePlayerTurnService;
    private final BattleService battleService;
    private final EnemyAttackService enemyAttackService;
    private final JwtTokenProvider jwtTokenProvider;

    @PutMapping("/enemy")
    public ResponseEntity<?> attackedFromEnemy(@RequestHeader String Authorization, @RequestBody EnemyAttackDto enemyAttackDto) {
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
//        List<MyCharacterAttackDto> res = enemyAttackService.enemyAttack(enemyAttackDto, userId);
        Map<String, List> res = enemyAttackService.enemyAttack(enemyAttackDto, email);
        return ResponseEntity.status(200).body(res);
    }

    @PostMapping("/player")
    public ResponseEntity<?> attackEnemy(@RequestHeader String Authorization, @RequestBody PlayerAttackDto playerAttackDto){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        List<MyCharacterAttackDto> res = battlePlayerTurnService.myTurnAttack(playerAttackDto, email);
        return ResponseEntity.status(200).body(res);
    }

    @PutMapping("/finished")
    public ResponseEntity<?> GetTurnFinished(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        battleService.CoolTime(email);
        battleService.EffectTime(email);
        return ResponseEntity.ok(battleService.MyCharacterList(email));
    }

    @DeleteMapping("/end")
    public ResponseEntity<?> DeleteCoolTimeEffectTime(@RequestHeader String Authorization){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        battleService.DeleteEffect(email);
        return ResponseEntity.ok("delete_ok");
    }

    @PutMapping("/victory")
    public ResponseEntity<String> updateStat(@RequestHeader String Authorization,@RequestBody List<CharacterVictoryStat> chagedStatList){
        String token = Authorization.split(" ")[1];
        String email = jwtTokenProvider.getUserPk(token);
        battleService.updateStat(email, chagedStatList);
        return ResponseEntity.status(200).body("success");
    }
}
