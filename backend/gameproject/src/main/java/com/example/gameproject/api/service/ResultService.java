package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.Artifact;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.entity.UserArtifact;
import com.example.gameproject.db.repository.*;
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
    private final UserArtifactRepository userArtifactRepository;


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
    public void GameOver(String email){
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        User user = userRepository.getById(userId);
        user.gameOverUpdate();
        userRepository.save(user);

        List<UserArtifact> myArtifacts = userArtifactRepository.findAllByUser_Id(userId);
        for (UserArtifact uaf : myArtifacts) {
            userArtifactRepository.delete(uaf);
        }
    }

    @Transactional
    public void Clear(){
        myCharacterRepository.deleteAll(myCharacterRepository.findByUserId(1L));
    }

    @Transactional
    public void GameWin(String email) {
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
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
