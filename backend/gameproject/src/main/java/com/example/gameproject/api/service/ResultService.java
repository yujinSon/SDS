package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ResultService {
    private final MyCharacterRepository myCharacterRepository;
    private final DefaultCharacterRepository defaultCharacterRepository;
    private final UserRepository userRepository;
    private final SkillRepository skillRepository;


    public List<RankingDto> Ranking(){
        List<User> users = userRepository.orderSelect();
        List<RankingDto> result = new ArrayList<>();
        for (User user : users){
            RankingDto rankingDto = RankingDto.builder()
                    .nickname(user.getUsername())
                    .bestScore(user.getBestScore())
                    .stage(user.getStage())
                    .subStage(user.getSubStage())
                    .build();
            result.add(rankingDto);
        }
        return result;
    }

    @Transactional
    public void GameOver(){
        User user = userRepository.getById(1L);
        user.gameOverUpdate();
        userRepository.save(user);
    }

    @Transactional
    public void Clear(){
        myCharacterRepository.deleteAll(myCharacterRepository.findByUserId(1L));
    }

    @Transactional
    public void GameWin(Long userId) {
        User user = userRepository.getById(userId);
        user.gameWin();

        // 케릭터 레벨업 및 스텟포인트 부여
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        for (MyCharacter mch : myCharacters) {
            mch.levelUp();
            myCharacterRepository.save(mch);
        }
        userRepository.save(user);

    }
}
