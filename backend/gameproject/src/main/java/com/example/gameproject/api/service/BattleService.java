package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import com.example.gameproject.dto.response.SkillDtoCons;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BattleService {
    private final UserRepository userRepository;
    private final MyCharacterRepository myCharacterRepository;

    @Transactional
    public List<MyCharacterAttackDto> myTurnAttack(PlayerAttackDto playerAttackDto, Long userId) {
//        User user = userRepository.getById(userId);
        int casterPos = playerAttackDto.getPos(); // 스킬을 쓴 케릭터 위치값
        int targetPos = playerAttackDto.getTarget(); // 스킬의 효과를 받은 대상 위치값, 전체라면 3

        // 위치값을 가지고 myCharacter 가져오기.
        MyCharacter caster = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, casterPos);

        // 스킬 가져오기.
        SkillDtoCons skill = playerAttackDto.getSkill();

        // 쿨타임 등록

        // 이팩트타임 등록


    }


}
