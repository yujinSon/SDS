package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BattleService {
    private final MyCharacterRepository myCharacterRepository;


    @Transactional
    public List<MyCharacterUpdateDto> updateStat(long userId, EnemyAttackDto enemyAttackDto){
        //user에서 mycharacter 가져오기
        List<MyCharacter> myCharacters = myCharacterRepository.findByUserId(userId);
        //해당 위치
        MyCharacter targetCharacter = myCharacters.get(enemyAttackDto.getTarget());
        //해당 위치에 있는 애한테 스킬 적용

        //남은 스킬 턴 및 누가 누구한테 썼는지 저장



        return null;

    }

}
