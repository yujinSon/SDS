package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.dto.response.MyCharacterDto;
import com.example.gameproject.dto.response.SkillListDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional(readOnly = true)
public class StageService {

    @Autowired
    private MyCharacterRepository myCharacterRepository;

    @Autowired
    private SkillRepository skillRepository;


    public Map<String, List> BattleSetting(){
        // 유저 정보를 받아서 바꿔줘야 함.
        int userId = 1; // 나중에 로그인 구현시 바꿔줘야될 부분
        int stage = 1;
        int step = 1;


        Map<String, List> res = new HashMap<>();

        List<MyCharacterDto> characterDtos = new ArrayList<>();
        List<SkillListDto> mySkill = new ArrayList<>();

        List<MyCharacter> myCharacter = myCharacterRepository.getMyCharacters(userId);

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

        res.put("Character", characterDtos);
        res.put("mySkill", mySkill);

        return res;
    }
}
