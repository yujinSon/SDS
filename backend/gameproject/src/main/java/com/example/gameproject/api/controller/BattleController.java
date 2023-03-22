package com.example.gameproject.api.controller;

import com.example.gameproject.api.service.BattlePlayerTurnService;
import com.example.gameproject.api.service.BattleService;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
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
    BattlePlayerTurnService battlePlayerTurnService;

    @PostMapping("/player/{userId}")
    public ResponseEntity<?> attackEnemy(@RequestBody PlayerAttackDto playerAttackDto, @PathVariable("userId") long userId){
        List<MyCharacterAttackDto> res = battlePlayerTurnService.myTurnAttack(playerAttackDto, userId);


        return ResponseEntity.status(200).body(res);
    }

}
