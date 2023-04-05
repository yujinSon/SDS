
package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EnemyAttackService {
    private final SkillRepository skillRepository;
    private final MyCharacterRepository myCharacterRepository;
    private final EffectTimeRepository effectTimeRepository;
    private final CoolTimeRepository coolTimeRepository;
    private final UserArtifactRespository userArtifactRespository;
    private final UserRepository userRepository;


    @Transactional
    public Map<String, List> enemyAttack(EnemyAttackDto enemyAttackDto, String email) {
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        Map<String, List> res = new HashMap<>();
        List<Integer> valueRes = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            valueRes.add(-1);
        }

        int damage = enemyAttackDto.getDamage();

        // Front 에 줄 정보, BattlePlayerTurnService의 부분과 같다.
        List<MyCharacterAttackDto> myCharacterAttackDtos = new ArrayList<>();
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        List<EffectTime> mySkills = new ArrayList<>();


        // 적이 사용한 스킬 객체 가져오고 디버프 일때 이펙트에 등록
        Skill villianSkill = null;
        if (!enemyAttackDto.getSkillName().equals("일반 공격")) {
            // 그냥 일반공격이면 가져울 수 없음, 이름이 중복돼서;; 디버프 스킬인경우
            villianSkill = skillRepository.getSkillUsingSkillName(enemyAttackDto.getSkillName());
            if (!villianSkill.getStat().equals("hp")) {
                // 디버프 스킬인경우
                damage = 0;
                for (MyCharacter myc : myCharacters) {
                    if (enemyAttackDto.getTarget() == 3) {
                        // 전체 범위면 추가
                        EffectTime skill = new EffectTime(villianSkill, myc, myc.getPos());
                        effectTimeRepository.save(skill);
                    } else if (enemyAttackDto.getTarget() == myc.getPos()) {
                        EffectTime skill = new EffectTime(villianSkill, myc, myc.getPos());
                        effectTimeRepository.save(skill);
                    }
                }
            }
        }



        for (MyCharacter mc : myCharacters) {
            List<EffectTime> myEffects = effectTimeRepository.findByMyCharacterId(mc.getId());
            List<CoolTime> myCools = coolTimeRepository.findByMyCharacterId(mc.getId());
            List<Skill> myCharacterSkills = skillRepository.findByCharacter_id(mc.getDefaultCharacter().getId());
            List<Long> coolTimeSkillId = new ArrayList<>();
            for (EffectTime et : myEffects) {
                mySkills.add(et); // 내 캐릭들이 쓴 모든 스킬들 or  빌런이 쓴 디버프( 이팩트 타임에서 꺼내 쓸꺼임, 누구에게 쓸건지에 대한 값이 필요해서)
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
                // 빌런이 쓴 스킬이 아닌 경우

                if (effSkill.getSkill().isRange() == true) {
                    // 전체 스킬인 경우 모두 적용
                    for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                        applyEffect(myc, stat, effskillValue);
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
                // skillNum 이 3이라서 빌런이 쓴 스킬인 경우 == 디버프 스킬인경우
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


        // 이제 회피율 고여해서 데미지 계산 단 데미지가 0이라면 공격스킬이 아니니 로직 처리 안함.
        if (damage != 0) {
            if (enemyAttackDto.getTarget() == 3) {
                // 전체 공격인 경우
                for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                    int avoidValue = myc.getAvoid();
                    int applyDamage = damage * avoidRes(avoidValue);
                    int myHp = myc.getHp() - applyDamage;
                    valueRes.set(myc.getPos(), applyDamage);

                    if (myHp <= 0) {
                        MyCharacter mycDB = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, myc.getPos());
                        myc.setHp(0);
                        myCharacterRepository.delete(mycDB);
                    } else {
                        myc.setHp(myHp);
                        MyCharacter mycDB = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, myc.getPos());
                        mycDB.setHp(myHp);
                        myCharacterRepository.save(mycDB);
                    }
                }
            } else {
                // 단일 대상인 경우
                for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                    if (myc.getPos() == enemyAttackDto.getTarget()) {
                        int avoidValue = myc.getAvoid();
                        int applyDamage = damage * avoidRes(avoidValue);
                        int myHp = myc.getHp() - applyDamage;
                        valueRes.set(myc.getPos(), applyDamage);

                        if (myHp <= 0) {
                            MyCharacter mycDB = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, myc.getPos());
                            myc.setHp(0);
                            myCharacterRepository.delete(mycDB);
                        } else {
                            MyCharacter mycDB = myCharacterRepository.getMyCharacterUsingUserIdPos(userId, myc.getPos());
                            myc.setHp(myHp);
                            mycDB.setHp(myHp);
                            myCharacterRepository.save(mycDB);
                        }
                    }
                }
            }
        }

        res.put("myCharacter", myCharacterAttackDtos);
        res.put("valueRes", valueRes);


        return res;
    }

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
