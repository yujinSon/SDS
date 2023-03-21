package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/battle")
public class BattleController {
    @Autowired
    BattleService battleService;

//    @PutMapping("/enemy")
    @PutMapping("/enemy/{userId}")
    ResponseEntity<?> attackedFromEnemy(@RequestBody EnemyAttackDto enemyAttackDto, @PathVariable("userId") long userId) {
        List<MyCharacterUpdateDto> result = battleService.updateStat(userId, enemyAttackDto);
        return ResponseEntity.status(200).body(result);
    }

//    @PostMapping("/player")
    @PostMapping("/player/{userId}")
    ResponseEntity<?> attackEnemy(@RequestBody PlayerAttackDto playerAttackDto, @PathVariable("userId") long userId){
//        List<MyCharacterUpdateDto> myCharacterUpdateDtos = battleService.updateMyCharacter();
        HashMap<String, Object> result = new HashMap<>();
//        result.put("myCharacter", );
//        result.put("mySkillCoolTime", );
        return ResponseEntity.status(200).body(result);
    }

}
