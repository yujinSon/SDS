package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.dto.response.RandomCharacterDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
//@RequiredArgsConstructor
public class CharacterService {
    @Autowired
    private DefaultCharacterRepository defaultCharacterRepository;

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
}
