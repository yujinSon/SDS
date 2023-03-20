package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.entity.Villain;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.db.repository.VillainRepository;
import com.example.gameproject.dto.response.MyCharacterDto;
import com.example.gameproject.dto.response.SkillListDto;
import com.example.gameproject.dto.response.VillainDto;
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


    public Map<String, List> BattleSetting(){
        // 유저 정보를 받아서 바꿔줘야 함.
        int userId = 1; // 나중에 로그인 구현시 바꿔줘야될 부분
        int stage = 1;
        int step = 10; // 스텝이 10 이라면 보스스테이지.
        String stageName = "환경";


        Map<String, List> res = new HashMap<>();

        List<MyCharacterDto> characterDtos = new ArrayList<>();
//        List<SkillListDto> mySkill = new ArrayList<>();
        List<SkillListDto> mySkill = new ArrayList<>();
        List<VillainDto> villain = new ArrayList<>(); // 프론트에 줄 빌런들

        List<MyCharacter> myCharacter = myCharacterRepository.getMyCharacters(userId);

        List<Villain> villainList = villainRepository.getVillains(stageName); // 랜덤으로 뽑을 빌런들 목록
        Villain boss =villainRepository.getBoss(stageName); // 해당 스테이지에 보스 뽑기

        for (MyCharacter myC : myCharacter) {
            // 캐릭터 객체 받기
            MyCharacterDto myCharacterDto = new MyCharacterDto(myC);
            characterDtos.add(myCharacterDto);

            // 스킬 받기
            Long characterId = myC.getDefaultCharacter().getId();
            List<Skill> skills = skillRepository.getskills(characterId);
            SkillListDto skillListDto = new SkillListDto(skills);
            mySkill.add(skillListDto);
        }

        // 빌런 보스 스테이지가 아닐때.
        Random random = new Random();
        if (step != 10) {
            for (int i = 0; i < 4; i++) {
                int randomIndex = random.nextInt(villainList.size());
                Villain randomVillain = villainList.get(randomIndex);
                Long villainId = randomVillain.getId();
                List<Skill> villainSkills = skillRepository.getVillainSkills(villainId);
                VillainDto villainDto = new VillainDto(randomVillain, villainSkills);
                villain.add(villainDto);
            }
        } else {
            // 보스 스테이지 일때.
            for (int i = 0; i < 3; i++) {
                int randomIndex = random.nextInt(villainList.size());
                Villain randomVillain = villainList.get(randomIndex);
                Long villainId = randomVillain.getId();
                List<Skill> villainSkills = skillRepository.getVillainSkills(villainId);
                VillainDto villainDto = new VillainDto(randomVillain, villainSkills);
                villain.add(villainDto);
            }
            Long bossId = boss.getId();
            List<Skill> bossSkills = skillRepository.getVillainSkills(bossId);
            VillainDto villainDto = new VillainDto(boss, bossSkills);
            villain.add(villainDto);
        }

        res.put("Character", characterDtos);
        res.put("mySkill", mySkill);
        res.put("Villain",  villain);

        return res;
    }
}
