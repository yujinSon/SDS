package com.example.gameproject.api.service;


import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
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
public class BattlePlayerTurnService {
    private final MyCharacterRepository myCharacterRepository;
    private  final CoolTimeRepository coolTimeRepository;
    private final SkillRepository skillRepository;
    private final EffectTimeRepository effectTimeRepository;

    @Transactional
    public List<MyCharacterAttackDto> myTurnAttack(PlayerAttackDto playerAttackDto, Long userId) {
        int casterPos = playerAttackDto.getPos(); // 스킬을 쓴 케릭터 위치값
        int targetPos = playerAttackDto.getTarget(); // 스킬의 효과를 받은 대상 위치값, 전체라면 3


        // 위치값을 가지고 myCharacter 가져오기.
        MyCharacter caster = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, casterPos);
        Long casterId = caster.getId();

        // 스킬 가져오기.
        Skill skill = skillRepository.getSkillUsingSkillName(playerAttackDto.getSkillName());

        if (skill.getStat() != "hp") {
            // skill.getStat() 이 hp 라면 회복 스킬임 -> 이펙트가 없는 스킬
            // 이팩트타임 등록
            EffectTime effectTime = new EffectTime();
            effectTime.setPos(targetPos); // 스킬적용 대상 위치값
            effectTime.setTurn(skill.getSkillType()); // 스킬 효과 지속시간
            effectTime.setMyCharacter(caster);
            effectTime.setSkill(skill);
            effectTimeRepository.save(effectTime);

        } else {
            List<MyCharacter> myCharacters= myCharacterRepository.getMyCharacters(userId);
            // 단순 체력 회복
            int addHp = skill.getValue();
            if (targetPos == 3) {
                // 전체 회복인 경우
                for (MyCharacter myc : myCharacters) {
                    int value = min(myc.getAd()+addHp, myc.getMaxHp());
                    myc.setHp(value);
                }
            } else {
                // 단일 회복인 경우.
                for (MyCharacter myc : myCharacters) {
                    if (targetPos == myc.getPos()) {
                        int value = min(myc.getAd()+addHp, myc.getMaxHp());
                        myc.setHp(value);
                    }
                }
            }

        }

        // 쿨타임 등록
        CoolTime coolTime = new CoolTime();
        coolTime.setTurn(skill.getCoolTime());
        coolTime.setMyCharacter(caster);
        coolTime.setSkill(skill);
        coolTimeRepository.save(coolTime);


        // effectTime에서 효과 적용후 List<MyCharacterAttackDto> 값 리턴.
        // List<MyCharacterAttackDto> 만들때 쿨타임 반영
        List<MyCharacterAttackDto> myCharacterAttackDtos = new ArrayList<>();
        // 1. 내 캐릭터 들고 와서 List<MyCharacterAttackDto> 생성 -> 효과 미적용 상태
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        // 1 - 1. 내 캐릭터가 쓴 스킬들 가져오기 -> 이펙트타임에 있는 것들 중에
        List<EffectTime> mySkills = new ArrayList<>(); // 이건 효과적용할때 쓸꺼임.
        for (MyCharacter mc : myCharacters) {
            List<EffectTime> myEffects = effectTimeRepository.findByMyCharacterId(mc.getId());
            List<CoolTime> myCools = coolTimeRepository.findByMyCharacterId(mc.getId());
//            List<Skill> myCharacterSkills = new ArrayList<>();
            List<Skill> myCharacterSkills = skillRepository.findByCharacter_id(mc.getDefaultCharacter().getId());
            List<Long> coolTimeSkillId = new ArrayList<>();
            for (EffectTime et : myEffects) {
//                myCharacterSkills.add(et.getSkill()); // 내 캐릭중에 mc가 쓴 스킬들
                mySkills.add(et); // 내 캐릭들이 쓴 모든 스킬들 ( 이팩트 타임에서 꺼내 쓸꺼임, 누구에게 쓸건지에 대한 값이 필요해서)
            }
            for (CoolTime ct : myCools) {
                coolTimeSkillId.add(ct.getSkill().getId()); // 쿨타임 중인 스킬 아이디 등록
            }
            // 효과 적용안한 상태. 쿨타임은 적용함. [true, false] 뭐 이런거
            MyCharacterAttackDto myCharacterAttackDto = new MyCharacterAttackDto(mc, myCharacterSkills, coolTimeSkillId);
            myCharacterAttackDtos.add(myCharacterAttackDto);

        }


        // 효과 적용하기.
        for (EffectTime effSkill : mySkills) {
            String stat = effSkill.getSkill().getStat();
            int value = effSkill.getSkill().getValue();
            if (effSkill.getSkill().isRange() == true) {
                // 전체 스킬인 경우 모두 적용
                for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                    applyEffect(myc, stat, value);
                }
            } else {
                // 단일 스킬인 경우
                // 1. 일단 누구에게쓰는 건지 찾기
                int tp = effSkill.getPos();
                for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                    if (myc.getPos() == tp) {
                        // 찾았으면 적용
                        applyEffect(myc, stat, value);
                    }
                }
            }
        }

        return myCharacterAttackDtos;
    }

    // MyCharacterAttackDto에 스탯 적용하는 함수
    public void applyEffect(MyCharacterAttackDto myCharacterAttackDto, String stat, int value) {
        int totalValue;
        if (stat.equals(("ad"))) {
            totalValue = myCharacterAttackDto.getAd() + value;
            myCharacterAttackDto.setAd(totalValue);
        } else if (stat.equals(("ap"))) {
            totalValue = myCharacterAttackDto.getAp() + value;
            myCharacterAttackDto.setAp(totalValue);
        } else if (stat.equals(("speed"))) {
            totalValue = myCharacterAttackDto.getSpeed() + value;
            myCharacterAttackDto.setSpeed(totalValue);
        } else if (stat.equals(("avoid"))) {
            totalValue = myCharacterAttackDto.getAvoid() + value;
            myCharacterAttackDto.setAvoid(totalValue);
        } else {
            // critical
            totalValue = myCharacterAttackDto.getCritical() + value;
            myCharacterAttackDto.setCritical(totalValue);
        }
    }

    // min 함수
    public int min(int a, int b) {
        if (a > b) {
            return b;
        } else {
            return a;
        }
    }

}