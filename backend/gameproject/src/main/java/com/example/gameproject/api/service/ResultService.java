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
                    .nickname(user.getNickname())
                    .bestScore(user.getBestScore())
                    .stage(user.getStage())
                    .subStage(user.getSubStage())
                    .build();
            result.add(rankingDto);
        }
        return result;
    }

    @Transactional
    public int GameOver(){
        User user = userRepository.getById(1L);
        int Score = user.getStage() * 1000 + user.getSubStage() * 100 - user.getTurn();
        user.gameOverUpdate(Math.max(user.getBestScore(), Score));
        userRepository.save(user);
        return Score;
    }

    @Transactional
    public void Clear(){
        myCharacterRepository.deleteAll(myCharacterRepository.findByUserId(1L));
    }
}
