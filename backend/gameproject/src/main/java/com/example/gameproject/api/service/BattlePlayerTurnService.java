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
    private final ArtifactRepository artifactRepository;
    private final UserArtifactRespository userArtifactRespository;
    private final UserRepository userRepository;

    @Transactional
    public List<MyCharacterAttackDto> myTurnAttack(PlayerAttackDto playerAttackDto, String email) {
        int casterPos = playerAttackDto.getPos(); // 스킬을 쓴 케릭터 위치값
        int targetPos = playerAttackDto.getTarget(); // 스킬의 효과를 받은 대상 위치값, 전체라면 3

        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        // 위치값을 가지고 myCharacter 가져오기.
        MyCharacter caster = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, casterPos);
        Long casterId = caster.getId();


        // 스킬 가져오기.
        Skill skill = skillRepository.getSkillUsingSkillName(playerAttackDto.getSkillName());


        String factor = skill.getFactor();
        int factorValue = findFactorValue(caster, factor);

        int skillValue = (int) (factorValue * ((double) skill.getValue() / 100));
        if (skill.getSkillTarget() == 1) {
            // skill.getSkillTarget() == 1 -> 버프나 회복스킬
            if (!skill.getStat().equals("hp")) {
                // skill.getStat() 이 hp 라면 회복 스킬임 -> 이펙트가 없는 스킬
                // 이팩트타임 등
                EffectTime effectTime = new EffectTime(skill, caster, targetPos);
                effectTimeRepository.save(effectTime);

            } else {
                List<MyCharacter> myCharacters= myCharacterRepository.getMyCharacters(userId);
                // 단순 체력 회복
                int addHp = skillValue;
                if (targetPos == 3) {
                    // 전체 회복인 경우
                    for (MyCharacter myc : myCharacters) {
                        int value = min(myc.getHp()+addHp, myc.getMaxHp());
                        myc.setHp(value);
                        myCharacterRepository.save(myc);
                    }
                } else {
                    // 단일 회복인 경우.
                    for (MyCharacter myc : myCharacters) {
                        if (targetPos == myc.getPos()) {
                            System.out.println("회복전 hp : " + myc.getHp());
                            int value = min(myc.getHp()+addHp, myc.getMaxHp());
                            System.out.println("회복치 : " + addHp);
                            myc.setHp(value);
                            System.out.println(myc.getHp());
                            System.out.println("회복후 hp : " + myc.getHp());
                            myCharacterRepository.save(myc);
                        }
                    }
                }

            }
        }


        // 쿨타임 등록
        CoolTime coolTime = new CoolTime(skill, caster);
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
            MyCharacter skillCaster = effSkill.getMyCharacter();
            String skillFactor = effSkill.getSkill().getFactor();
            int effskillValue = effSkill.getSkill().getValue();

            int skillFactorValue = findFactorValue(skillCaster, skillFactor);
            int effSkillValue = (int) (skillFactorValue * ((double) effskillValue / 100));
            String stat = effSkill.getSkill().getStat();
            if (effSkill.getSkill().getSkillNum() != 3) {
                if (effSkill.getSkill().isRange() == true) {
                    // 전체 스킬인 경우 모두 적용
                    for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                        applyEffect(myc, stat, effSkillValue);
                    }
                } else {
                    // 단일 스킬인 경우
                    // 1. 일단 누구에게쓰는 건지 찾기
                    int tp = effSkill.getPos();
                    for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                        if (myc.getPos() == tp) {
                            // 찾았으면 적용
                            applyEffect(myc, stat, effSkillValue);
                        }
                    }
                }
            } else {
                for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                    if (effSkill.getMyCharacter().getPos() == effSkill.getPos()) {
                        applyDebuff(myc, effSkill.getSkill().getStat(), effSkill.getSkill().getValue());
                    }
                }
            }

        }

        // 디버프로 인해서 스텟이 -가 됐다면 0으로 보정
        for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
            myc.setAd(Math.max(0, myc.getAd()));
            myc.setAp(Math.max(0, myc.getAp()));
            myc.setSpeed(Math.max(0, myc.getSpeed()));
            myc.setAvoid(Math.max(0, myc.getAvoid()));
            myc.setCritical(Math.max(0, myc.getCritical()));
        }


        return myCharacterAttackDtos;
    }

    // MyCharacterAttackDto에 스탯 적용하는 함수
    // 효과 적용이기 떄문에 저장하지는 않음
    public void applyDebuff(MyCharacterAttackDto myCharacterAttackDto, String stat, int value) {
        int totalValue;
        if (stat.equals(("ad"))) {
            totalValue = myCharacterAttackDto.getAd() - value;
            myCharacterAttackDto.setAd(totalValue);
        } else if (stat.equals(("ap"))) {
            totalValue = myCharacterAttackDto.getAp() - value;
            myCharacterAttackDto.setAp(totalValue);
        } else if (stat.equals(("speed"))) {
            totalValue = myCharacterAttackDto.getSpeed() - value;
            myCharacterAttackDto.setSpeed(totalValue);
        } else if (stat.equals(("avoid"))) {
            totalValue = myCharacterAttackDto.getAvoid() - value;
            myCharacterAttackDto.setAvoid(totalValue);
        } else {
            // critical
            totalValue = myCharacterAttackDto.getCritical() - value;
            myCharacterAttackDto.setCritical(totalValue);
        }
    }


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

    // factorValue 값 찾기
    public int findFactorValue(MyCharacter caster, String factor) {
        int factorValue;
        switch (factor) {
            case "ap":
                factorValue = caster.getAp();
                break;
            case "ad":
                factorValue = caster.getAd();
                break;
            case "maxHp":
                factorValue = caster.getMaxHp();
                break;
            case "hp":
                factorValue = caster.getHp();
                break;
            case "speed":
                factorValue = caster.getSpeed();
                break;
            case "avoid":
                factorValue = caster.getAvoid();
                break;
            default:
                factorValue = caster.getCritical();
        }
        return factorValue;
    }

}
