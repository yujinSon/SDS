package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.Character;
import com.example.gameproject.db.repository.CharacterRepository;
import com.example.gameproject.dto.response.RandomCharacterDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CharacterService {
    private final CharacterRepository characterRepository;


    public List<RandomCharacterDto> RandomCharacter(int stage){
        List<RandomCharacterDto> result = new ArrayList<>();
        int randomLevel = (int)(Math.random() * 4) + (stage-1) * 4 + 1 ;
        List<Character> characters = new ArrayList<>();
        switch (randomLevel / 10){
            case 0:
                characters = characterRepository.randomfind(0,6);
                break;
            case 1:
                characters = characterRepository.randomfind(7,13);
                break;
            case 2:
                characters = characterRepository.randomfind(14,20);
                break;
        }

        for (Character character : characters){
                RandomCharacterDto randomCharacterDto = new RandomCharacterDto(character, randomLevel);
                result.add(randomCharacterDto);
        }
        return result;
    }
}
