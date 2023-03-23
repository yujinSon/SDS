package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.CoolTime;
import com.example.gameproject.db.entity.EffectTime;
import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.Skill;
import com.example.gameproject.db.repository.CoolTimeRepository;
import com.example.gameproject.db.repository.EffectTimeRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.SkillRepository;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.PlayerAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EnemyAttackService {
    private final SkillRepository skillRepository;
    private final MyCharacterRepository myCharacterRepository;
    private final EffectTimeRepository effectTimeRepository;
    private final CoolTimeRepository coolTimeRepository;


    @Transactional
    public List<MyCharacterAttackDto> enemyAttack(EnemyAttackDto enemyAttackDto, Long userId) {
        int damage = enemyAttackDto.getDamage();

        if (enemyAttackDto.getTarget() == 3) {
            // 전체 공격인 경우
            List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
            for (MyCharacter myc : myCharacters) {
                int avoidValue = myc.getAvoid();
                int myHp = myc.getHp() - (damage * avoidRes(avoidValue));

                if (myHp <= 0) {
                    myCharacterRepository.delete(myc);
                } else {
                    myc.setHp(myHp);
                    myCharacterRepository.save(myc);
                }
            }
        } else {
            // 단일 대상인 경우
            MyCharacter myc = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, enemyAttackDto.getTarget());
            int avoidValue = myc.getAvoid();
            int myHp = myc.getHp() - (damage * avoidRes(avoidValue));

            if (myHp <= 0) {
                myCharacterRepository.delete(myc);
            } else {
                myc.setHp(myHp);
                myCharacterRepository.save(myc);
            }
        }

        // Front 에 줄 정보, BattlePlayerTurnService의 부분과 같다.
        List<MyCharacterAttackDto> myCharacterAttackDtos = new ArrayList<>();
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);

        for (MyCharacter mc : myCharacters) {
            List<EffectTime> myEffects = effectTimeRepository.findByMyCharacterId(mc.getId());
            List<CoolTime> myCools = coolTimeRepository.findByMyCharacterId(mc.getId());
            List<Skill> myCharacterSkills = skillRepository.findByCharacter_id(mc.getDefaultCharacter().getId());
            List<Long> coolTimeSkillId = new ArrayList<>();
            for (EffectTime et : myEffects) {
                mySkills.add(et); // 내 캐릭들이 쓴 모든 스킬들 ( 이팩트 타임에서 꺼내 쓸꺼임, 누구에게 쓸건지에 대한 값이 필요해서)
            }
            for (CoolTime ct : myCools) {
                coolTimeSkillId.add(ct.getSkill().getId()); // 쿨타임 중인 스킬 아이디 등록
            }
            // 효과 적용안한 상태. 쿨타임은 적용함. [true, false] 뭐 이런거
            MyCharacterAttackDto myCharacterAttackDto = new MyCharacterAttackDto(mc, myCharacterSkills, coolTimeSkillId);
            myCharacterAttackDtos.add(myCharacterAttackDto);
        }






    }


    // 회피 결과값
    public int avoidRes(int avoidValue) {
        double standard = (double) avoidValue / 100;
        double randomValue = Math.random();

        if (randomValue < standard) {
            return 0; // 회피 성공
        } else {
            return 1;
        }
    }

}
