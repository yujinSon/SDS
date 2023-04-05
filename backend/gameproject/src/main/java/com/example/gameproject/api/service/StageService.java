package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import com.example.gameproject.dto.request.StageDto;
import com.example.gameproject.dto.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional(readOnly = true)
public class StageService {


    @Autowired
    private MyCharacterRepository myCharacterRepository;

    @Autowired
    private SkillRepository skillRepository;

    @Autowired
    private VillainRepository villainRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CoolTimeRepository coolTimeRepository;

    @Autowired
    private  EffectTimeRepository effectTimeRepository;


    public Map<String, List> BattleSetting(String email){
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        // 유저 정보를 받아서 바꿔줘야 함.
        User user = userRepository.getById(userId);


        if (user.getSubStage() == 1) {
            List<CoolTime> coolTimes = coolTimeRepository.findAll();
            List<EffectTime> effectTimes = effectTimeRepository.findAll();

            for (CoolTime coolTime : coolTimes) {
                if (coolTime.getMyCharacter().getUser().getId() == userId) {
                    coolTimeRepository.delete(coolTime);
                }
            }

            for (EffectTime effectTime : effectTimes) {
                if (effectTime.getMyCharacter().getUser().getId() == userId) {
                    effectTimeRepository.delete(effectTime);
                }
            }
        }


        int stage = user.getStage();
        int step = user.getSubStage(); // 스텝이 4 이라면 보스스테이지.
        String [] whatStage = {"없음", "환경", "안보", "질병", "사회", "범죄", "인구", "경제"};
        String stageName = whatStage[stage];


        Map<String, List> res = new HashMap<>();

        List<InitialBattleCharacterDto> characterDtos = new ArrayList<>();
        List<List<SkillDtoCons>> mySkill = new ArrayList<>();
        List<VillainDto> villain = new ArrayList<>(); // 프론트에 줄 빌런들

        List<MyCharacter> myCharacter = myCharacterRepository.getMyCharacters(userId);

        List<Villain> villainList = villainRepository.getVillains(stageName); // 랜덤으로 뽑을 빌런들 목록
        Villain boss =villainRepository.getBoss(stageName); // 해당 스테이지에 보스 뽑기

        for (MyCharacter myC : myCharacter) {
            // 스킬 받기
            Long characterId = myC.getDefaultCharacter().getId();
            List<Skill> skills = skillRepository.getskills(characterId);
            List<SkillDtoCons> skillsDtos = new ArrayList<>();
            for (Skill skill : skills) {
                SkillDtoCons skillDtoCon = new SkillDtoCons(skill);
                skillsDtos.add(skillDtoCon);
            }

            // 캐릭터 객체 받기
            InitialBattleCharacterDto myCharacterDto = new InitialBattleCharacterDto(myC, skillsDtos);
            characterDtos.add(myCharacterDto);
        }

        // 빌런 보스 스테이지가 아닐때.
        Random random = new Random();
        if (step != 4) {
            for (int i = 0; i < 4; i++) {
                int randomIndex = random.nextInt(villainList.size());
                Villain randomVillain = villainList.get(randomIndex);
                Long villainId = randomVillain.getId();
                List<Skill> villainSkills = skillRepository.getVillainSkills(villainId);
                VillainDto villainDto = new VillainDto(randomVillain, villainSkills, i+3);
                villain.add(villainDto);
            }
        } else {
            // 보스 스테이지 일때.
            for (int i = 0; i < 3; i++) {
                int randomIndex = random.nextInt(villainList.size());
                Villain randomVillain = villainList.get(randomIndex);
                Long villainId = randomVillain.getId();
                List<Skill> villainSkills = skillRepository.getVillainSkills(villainId);
                VillainDto villainDto = new VillainDto(randomVillain, villainSkills, i+4);
                villain.add(villainDto);
            }
            // 보스 추가.
            Long bossId = boss.getId();
            List<Skill> bossSkills = skillRepository.getVillainSkills(bossId);
            VillainDto villainDto = new VillainDto(boss, bossSkills, 3);
            villain.add(villainDto);
        }


        List<Integer> nowStage = new ArrayList<>();
        nowStage.add(user.getStage());
        nowStage.add(user.getSubStage());

        res.put("character", characterDtos);
        res.put("villain",  villain);
        res.put("nowStage", nowStage);

        return res;
    }

    @Transactional
    public void saveMyStage(StageDto stageDto) {
        Long userId = 1L; // 나중에 유저 아이디 찾아야 함.
        User user = userRepository.getById(userId);
        int stage = stageDto.getStage();
        int subStage = stageDto.getSubStage();

        user.stageUpdate(stage, subStage);
        userRepository.save(user);
    }
}
