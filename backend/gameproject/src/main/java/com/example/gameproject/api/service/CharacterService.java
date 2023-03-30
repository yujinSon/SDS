package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import com.example.gameproject.dto.request.AddStatDto;
import com.example.gameproject.dto.request.YoutubeDto;
import com.example.gameproject.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
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
    private final ArtifactRepository artifactRepository;


    public List<RandomCharacterDto> RandomCharacter(Long userId) throws IOException {
        String testurl = "http://127.0.0.1:8000/";
        URL url = new URL(testurl);
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        
        User user = userRepository.getById(userId);
        int stage = user.getNowStage();
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


            // 유물 효과 적용
            List<Artifact> myArtifacts = new ArrayList<>();
            for (UserArtifact userArtifact : user.getUserArtifacts()) {
                myArtifacts.add(userArtifact.getArtifact());
            }

            for (Artifact myArtifact : myArtifacts) {
                if (myArtifact.isRange() == true) {
                    // 전체 효과 인경우
                    System.out.println("전테 효과 스텟 : " + myArtifact.getStat());
                    addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
                } else if (myArtifact.getTargetClass().equals(myCharacter.getDefaultCharacter().getClassName())) {
                    // 특정 클래스 효과인경우
                    System.out.println("특정 효과 스텟 : " + myArtifact.getStat());
                    addStat(myCharacter, myArtifact.getStat(), myArtifact.getValue());
                }
            }

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
                    .nickname(user.getUsername())
                    .email(user.getEmail())
                    .bestScore(user.getBestScore())
                    .stage(user.getStage())
                    .subStage(user.getSubStage())
                    .finalScore(user.getFinalScore())
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
                    character.getStatPoint(),
                    character.getAddHp(),
                    character.getAddAd(),
                    character.getAddAp(),
                    character.getAddSpeed(),
                    character.getAddCritical(),
                    character.getAddAvoid(),
                    userDto,
                    skillDtos
            ));
        }//for
        return result;
    }

    // api/character/addstat
    public void updateStat(AddStatDto addStatDto, Long userId) {
//        List<MyCharacter>
    }

    // 효과 적용 함수
    // 효과 적용이기 떄문에 저장하지는 않음
    public void addStat(MyCharacter myCharacter, String stat, int value) {
        if (stat.equals("hp")) {
            myCharacter.addHd(value);
            // 유물 적용할때만 maxHP증가
            myCharacter.addMaxHp(value);
        } else if (stat.equals(("ad"))) {
            myCharacter.addAd(value);
        } else if (stat.equals(("ap"))) {
            myCharacter.addAp(value);
        } else if (stat.equals(("speed"))) {
            myCharacter.addSpeed(value);
        } else if (stat.equals(("avoid"))) {
            myCharacter.addAvoid(value);
        } else {
            // critical
            myCharacter.addCritical(value);
        }
    }

    @Transactional
    public void updateartifact(YoutubeDto youtubeDto){
        List<Artifact> artifacts = artifactRepository.findAll();
        for (Artifact artifact : artifacts){
            if (artifact.getName().equals(youtubeDto.getWord())){
                artifact.updateArtifact(artifact, youtubeDto.getValue());
                artifactRepository.save(artifact);
            }
        }
    }
}
