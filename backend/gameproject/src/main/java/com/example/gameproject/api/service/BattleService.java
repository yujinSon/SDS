package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.repository.EffectTimeRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.CharacterVictoryStat;
import com.example.gameproject.dto.response.MyCharacterAttackDto;
import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BattleService {
    private final MyCharacterRepository myCharacterRepository;
    private final DefaultCharacterRepository defaultCharacterRepository;
    private final UserRepository userRepository;
    private final SkillRepository skillRepository;
    private final CoolTimeRepository coolTimeRepository;
    private final EffectTimeRepository effectTimeRepository;


    @Transactional
    public void updateStat(String email, List<CharacterVictoryStat> chagedStatList){
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        for(int i=0;i<chagedStatList.size();i++){
            MyCharacter myCharacter = myCharacterRepository.findByUserIdAndPos(userId,i);
            CharacterVictoryStat stat = chagedStatList.get(i);
            int maxHp = myCharacter.getMaxHp() + myCharacter.getAddHp() * stat.getAddHp();
            int hp = myCharacter.getHp() + myCharacter.getAddHp() * stat.getAddHp();
            int ad = myCharacter.getAd() + myCharacter.getAddAd() * stat.getAddAd();
            int ap = myCharacter.getAp() + myCharacter.getAddAp() * stat.getAddAp();
            int speed = myCharacter.getSpeed() + myCharacter.getAddSpeed() * stat.getAddSpeed();
            int critical = myCharacter.getCritical() + myCharacter.getAddCritical() * stat.getAddCritical();
            int avoid = myCharacter.getAvoid() + myCharacter.getAddAvoid() * stat.getAddAvoid();

            myCharacter.updateVictoryStat(maxHp, hp, ad, ap, speed, critical, avoid);
            myCharacterRepository.save(myCharacter);



        }
   }
    // CoolTime에서 Turn을 하나씩 지우는 방식을 사용
    @Transactional
    public void CoolTime(String email) {
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        for (CoolTime coolTime : coolTimes) {
            if (coolTime.getMyCharacter().getUser().getId() == userId) {
                coolTime.BattleCoolTimeUpdate(coolTime.getTurn());
                if (coolTime.getTurn() <= 0) {
                    coolTimeRepository.delete(coolTime);
                } else {
                    coolTimeRepository.save(coolTime);
                    // 여기에 챔피언을 강화시키는 로직 처리 필요
                }
            }
        }
    }

    // Effect Turn을 하나씩 지우는 방식을 사용
    @Transactional
    public void EffectTime(String email) {
        List<EffectTime> effectTimes = effectTimeRepository.findAll();
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        for (EffectTime effectTime : effectTimes) {
            if (effectTime.getMyCharacter().getUser().getId() == userId) {
                effectTime.BattleEffectTimeUpdate(effectTime.getTurn());
                if (effectTime.getTurn() <= 0) {
                    effectTimeRepository.delete(effectTime);
                } else {
                    effectTimeRepository.save(effectTime);
                }
            }
        }
    }

    public boolean InLIst(int pos, List<Integer> isPos) {
        for (int p : isPos) {
            if (p == pos) {
                return true; // 포함된다.
            }
        }
        return false; // 포함되어 있지 않다.
    }

    public CoolTime getCoolTime(Long id) {
        Optional<CoolTime> coolTime = coolTimeRepository.findById(id);
        if (coolTime.isPresent()) {
            return coolTime.get();
        }
        // User not found
        return null;
    }

    public List<MyCharacterAttackDto> MyCharacterList(String email) {
        List<MyCharacterAttackDto> myCharacterAttackDtos = new ArrayList<>();
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
        List<MyCharacter> myCharacters = myCharacterRepository.getMyCharacters(userId);
        List<EffectTime> mySkills = new ArrayList<>();
        for (MyCharacter mc : myCharacters) {
            List<EffectTime> myEffects = effectTimeRepository.findByMyCharacterId(mc.getId());
            List<CoolTime> myCools = coolTimeRepository.findByMyCharacterId(mc.getId());
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

            // 디버프로 인해서 스텟이 -가 됐다면 0으로 보정
            for (MyCharacterAttackDto myc : myCharacterAttackDtos) {
                myc.setAd(Math.max(0, myc.getAd()));
                myc.setAp(Math.max(0, myc.getAp()));
                myc.setSpeed(Math.max(0, myc.getSpeed()));
                myc.setAvoid(Math.max(0, myc.getAvoid()));
                myc.setCritical(Math.max(0, myc.getCritical()));
            }

        }


        return myCharacterAttackDtos;
    }

    @Transactional
    public void DeleteEffect(String email) {
        // 내 정보를 찾아서
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        List<EffectTime> effectTimes = effectTimeRepository.findAll();
        long userId = userRepository.findByEmail(email).orElseThrow().getId();
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
