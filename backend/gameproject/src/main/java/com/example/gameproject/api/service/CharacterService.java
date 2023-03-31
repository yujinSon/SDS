package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.DefaultCharacter;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.DefaultCharacterRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.response.RandomCharacterDto;
import com.example.gameproject.dto.response.SelectedCharacterDto;
import com.example.gameproject.dto.response.SkillDto;
import com.example.gameproject.dto.response.UserDto;
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
    private final SkillRepository skillRepository;


    public List<RandomCharacterDto> RandomCharacter(int stage){
        List<RandomCharacterDto> result = new ArrayList<>();
        int randomLevel = (int) (Math.random() * 4) + (stage-1) * 4 + 1 ;

        List<DefaultCharacter> characters = defaultCharacterRepository.getRandomCharacters(1 + (randomLevel/10)*6, 6+ (randomLevel/10)*6);

        for (DefaultCharacter character : characters){
                RandomCharacterDto randomCharacterDto = new RandomCharacterDto(character, randomLevel, skillRepository);
                result.add(randomCharacterDto);
        }
        return result;
    }

    @Transactional
    public void SaveRandomCharacter(RandomCharacterDto randomCharacterDto) {
        DefaultCharacter defaultCharacter = defaultCharacterRepository.getByClassNameAndSubName(randomCharacterDto.getClassName(), randomCharacterDto.getSubClassName());
        User user = userRepository.getById(1L);
        List<Integer> poseDefine = new ArrayList<>();
        int realPos = 10;
        for (MyCharacter myCharacter : user.getMyCharacters()) {
            poseDefine.add(myCharacter.getPos());
        }

        for (int i = 0; i < 3; i++) {
            boolean is_pos = true;
            for (int j : poseDefine) {
                if (i == j) {
                    is_pos = false;
                    break;
                }
            }
            if (is_pos) {
                realPos = i;
                break;
            }
        }

        if (realPos != 10) {
            MyCharacter myCharacter = new MyCharacter(randomCharacterDto, defaultCharacter, user, realPos);
            myCharacterRepository.save(myCharacter);
        }
    }

    public List<SelectedCharacterDto> getCharacterList(long userId){
        List<SelectedCharacterDto> result = new ArrayList<>();
        //user 찾기
        User user = userRepository.findById(userId).get();
        //내 캐릭터 리스트 찾기
        List<MyCharacter> characters = myCharacterRepository.findByUserId(userId);
        for(MyCharacter character : characters){
            //캐릭터 가져오기
            DefaultCharacter defaultCharacter = defaultCharacterRepository.findById(character.getDefaultCharacter().getId()).get();
            //스킬 가져오기
            List<Skill> skills = skillRepository.findByCharacter_id(defaultCharacter.getId());
            List<SkillDto> skillDtos = new ArrayList<>();
            UserDto userDto = UserDto.builder()
                    .nickname(user.getNickname())
                    .email(user.getEmail())
                    .bestScore(user.getBestScore())
                    .stage(user.getStage())
                    .subStage(user.getSubStage())
                    .bestScore(user.getBestScore())
                    .build();
            for(Skill skill : skills){
                skillDtos.add(
                        SkillDto.builder()
                                .skillNum(skill.getSkillNum())
                                .skillName(skill.getSkillName())
                                .skillType(skill.getDurationTurn())
                                .isRange(skill.isRange())
                                .value(skill.getValue())
                                .skillTarget(skill.getSkillTarget())
                                .stat(skill.getStat())
                                .coolTime(skill.getCoolTime())
                                .build()
                );
            }
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
                    userDto,
                    skillDtos
            ));
        }//for
        return result;
    }
}
