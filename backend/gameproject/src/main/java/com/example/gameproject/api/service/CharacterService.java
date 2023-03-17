package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.entity.Vo.UserVo;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
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
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MyCharacterRepository myCharacterRepository;
    @Autowired
    private SkillRepository skillRepository;

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

    public List<SelectedCharacterDto> getCharacterList(long userId){
        List<SelectedCharacterDto> result = new ArrayList<>();
        //user 찾기
        User user = userRepository.findById(userId).get();
        //내 캐릭터 리스트 찾기
        List<MyCharacter> characters = myCharacterRepository.findByUserId(userId);
        for(MyCharacter character : characters){
            //캐릭터 가져오기
            DefaultCharacter defaultCharacter = defaultCharacterRepository.findById(character.getId()).get();
            //스킬 가져오기
            List<Skill> skills = skillRepository.findByCharacter_id(defaultCharacter.getId());
            result.add(new SelectedCharacterDto(
                    defaultCharacter.getClassName(),
                    defaultCharacter.getSubName(),
                    character.getLevel(),
                    character.getHp(),
                    character.getAd(),
                    character.getAp(),
                    character.getSpeed(),
                    character.getCritical(),
                    character.getAvoid(),
                    character.getMaxHp(),
                    character.getPos(),
                    user,
                    skills
            ));
        }//for
        return result;
    }
}
