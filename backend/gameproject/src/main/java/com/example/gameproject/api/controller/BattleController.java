package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.dto.request.CharacterVictoryStat;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    BattleService battleService;

//    @PutMapping("/enemy")
@PutMapping("/enemy/{userId}")
ResponseEntity<?> attackedFromEnemy(@RequestBody EnemyAttackDto enemyAttackDto, @PathVariable("userId") long userId) {
    try{
        battleService.updateStat(userId, enemyAttackDto);
        return ResponseEntity.status(200).body("success");
    }
    catch (Exception e){
        e.printStackTrace();
        return ResponseEntity.status(400).body("update error");
    }
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
