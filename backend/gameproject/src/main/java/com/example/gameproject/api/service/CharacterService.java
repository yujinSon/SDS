package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.response.RandomCharacterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CharacterService {
    private final MyCharacterRepository myCharacterRepository;
    private final DefaultCharacterRepository defaultCharacterRepository;
    private final UserRepository userRepository;

    public List<RandomCharacterDto> RandomCharacter(int stage){
        List<RandomCharacterDto> result = new ArrayList<>();
        int randomLevel = (int) (Math.random() * 4) + (stage-1) * 4 + 1 ;

        List<DefaultCharacter> characters = defaultCharacterRepository.getRandomCharacters(1 + (randomLevel/10)*6, 6+ (randomLevel/10)*6);

        for (DefaultCharacter character : characters){
                RandomCharacterDto randomCharacterDto = new RandomCharacterDto(character, randomLevel);
                result.add(randomCharacterDto);
        }
        return result;
    }

    @Transactional
    public void SaveRandomCharacter(RandomCharacterDto randomCharacterDto){
        DefaultCharacter defaultCharacter = defaultCharacterRepository.getByClassNameAndSubName(randomCharacterDto.getClassName(), randomCharacterDto.getSubclass());
        User user = userRepository.getById(1L);
        List<Integer> poseDefine = new ArrayList<>();
        int realPos = 10;
        for (MyCharacter myCharacter : user.getMyCharacters()){
            poseDefine.add(myCharacter.getPos());
        }

        for (int i = 0; i < 3; i++){
            boolean is_pos = true;
            for (int j : poseDefine){
                if (i == j){
                    is_pos = false;
                    break;
                }
            }
            if (is_pos){
                realPos = i;
                break;
            }
        }

        if (realPos != 10){
            MyCharacter myCharacter = new MyCharacter(randomCharacterDto, defaultCharacter, user, realPos);
            myCharacterRepository.save(myCharacter);
        }
    }
}
