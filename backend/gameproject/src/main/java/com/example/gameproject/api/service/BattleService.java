package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.EffectTimeRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.CharacterVictoryStat;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.SkillRequestDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import com.example.gameproject.db.entity.*;
import com.example.gameproject.db.repository.*;
import com.example.gameproject.dto.response.BattleTurnSkillDto;
import com.example.gameproject.dto.response.MyCharacterTurnDto;
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
    public void updateStat(long userId, List<CharacterVictoryStat> chagedStatList){
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
    public void CoolTime() {
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        for (CoolTime coolTime : coolTimes) {
            coolTime.BattleCoolTimeUpdate(coolTime.getTurn());
            if (coolTime.getTurn() <= 0) {
                coolTimeRepository.delete(coolTime);
            } else {
                coolTimeRepository.save(coolTime);
                // 여기에 챔피언을 강화시키는 로직 처리 필요
            }
        }
    }

    // Effect Turn을 하나씩 지우는 방식을 사용
    @Transactional
    public void EffectTime() {
        List<EffectTime> effectTimes = effectTimeRepository.findAll();
        for (EffectTime effectTime : effectTimes) {
            effectTime.BattleEffectTimeUpdate(effectTime.getTurn());
            if (effectTime.getTurn() <= 0) {
                effectTimeRepository.delete(effectTime);
            } else {
                effectTimeRepository.save(effectTime);
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

    public List<MyCharacterTurnDto> MyCharacterList() {
        List<MyCharacterTurnDto> result = new ArrayList<>();
        List<Integer> isPos = new ArrayList<>();
        User user = userRepository.getById(1L);
        List<EffectTime> effectTimes = effectTimeRepository.findAll();
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        for (EffectTime effectTime : effectTimes) { // 각각의 효과들을 넣는다.
            if (effectTime.getMyCharacter().getUser().getId() == 1L) { //  해당 로그인한 유저에만 사용이 가능하다.
                Skill skill = effectTime.getSkill();
                if (skill.isRange() == false) { // 단일 개체
                    continue;
                } else { // 범위 버프
                    CoolTime coolTime = getCoolTime(effectTime.getMyCharacter().getId());
                    if (coolTime == null) {
                        MyCharacterTurnDto myCharacterTurnDto = new MyCharacterTurnDto(effectTime.getMyCharacter(), skill.getStat(), skill.getValue(), 0);
                        isPos.add(effectTime.getMyCharacter().getPos());
                        result.add(myCharacterTurnDto);
                    } else {
                        MyCharacterTurnDto myCharacterTurnDto = new MyCharacterTurnDto(effectTime.getMyCharacter(), skill.getStat(), skill.getValue(), coolTime.getTurn());
                        isPos.add(effectTime.getMyCharacter().getPos());
                        result.add(myCharacterTurnDto);
                    }
                }
            }
        }

        // 아무런 효과도 받지 않았다면 그냥 저장해줘야한다.
        for (MyCharacter myCharacter : user.getMyCharacters()) {
            boolean s = InLIst(myCharacter.getPos(), isPos);
            System.out.println(s);
            if (!s) {
                CoolTime coolTime = getCoolTime(myCharacter.getId());
                System.out.println(111111);
                if (coolTime == null) {
                    MyCharacterTurnDto myCharacterTurnDto = new MyCharacterTurnDto(myCharacter, "no", 0, 0);
                    isPos.add(myCharacterTurnDto.getPos());
                    result.add(myCharacterTurnDto);
                } else {
                    MyCharacterTurnDto myCharacterTurnDto = new MyCharacterTurnDto(myCharacter, "no", 0, coolTime.getTurn());
                    isPos.add(myCharacterTurnDto.getPos());
                    result.add(myCharacterTurnDto);
                }
            }
        }

        return result;
    }

    @Transactional
    public void DeleteEffect() {
        // 내 정보를 찾아서
        List<CoolTime> coolTimes = coolTimeRepository.findAll();
        List<EffectTime> effectTimes = effectTimeRepository.findAll();

        for (CoolTime coolTime : coolTimes) {
            if (coolTime.getMyCharacter().getUser().getId() == 1L) {
                coolTimeRepository.delete(coolTime);
            }
        }

        for (EffectTime effectTime : effectTimes) {
            if (effectTime.getMyCharacter().getUser().getId() == 1L) {
                effectTimeRepository.delete(effectTime);
            }
        }
    }

    @Transactional
    public void updateStat(long userId, EnemyAttackDto enemyAttackDto) {
        //user에서 mycharacter 가져오기
        List<MyCharacter> myCharacters = myCharacterRepository.findByUserId(userId);
        SkillRequestDto skill = enemyAttackDto.getSkill();
        if (!skill.isRange()) { // 단일
            //해당 위치
            MyCharacter targetCharacter = myCharacters.get(enemyAttackDto.getTarget());

            //해당 위치의 플레이어에게 스킬 적용
            if (skill.getStat().equals("hp")) {
                if (targetCharacter.getHp() - skill.getValue() < 0)
                    targetCharacter.updateStat(0, targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                else
                    targetCharacter.updateStat(targetCharacter.getHp() - skill.getValue(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
            } else if (skill.getStat().equals("ap")) {
                if (targetCharacter.getAp() - skill.getValue() < 0)
                    targetCharacter.updateStat(targetCharacter.getHp(), 0, targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                else
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp() - skill.getValue(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
            } else if (skill.getStat().equals("ad")) {
                if (targetCharacter.getAd() - skill.getValue() < 0)
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), 0,
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                else
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd() - skill.getValue(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
            } else if (skill.getStat().equals("speed")) {
                if (targetCharacter.getSpeed() - skill.getValue() < 0)
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            0, targetCharacter.getCritical(), targetCharacter.getAvoid());
                else
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed() - skill.getValue(), targetCharacter.getCritical(), targetCharacter.getAvoid());
            } else if (skill.getStat().equals("critical")) {
                if (targetCharacter.getCritical() - skill.getValue() < 0)
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), 0, targetCharacter.getAvoid());
                else
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical() - skill.getValue(), targetCharacter.getAvoid());
            } else if (skill.getStat().equals("avoid")) {
                if (targetCharacter.getCritical() - skill.getValue() < 0)
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), 0);
                else
                    targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                            targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid() - skill.getValue());
            }
            myCharacterRepository.save(targetCharacter);
        } else {//전체
            for (MyCharacter targetCharacter : myCharacters) {
                //해당 위치의 플레이어에게 스킬 적용
                if (skill.getStat().equals("hp")) {
                    if (targetCharacter.getHp() - skill.getValue() < 0)
                        targetCharacter.updateStat(0, targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                    else
                        targetCharacter.updateStat(targetCharacter.getHp() - skill.getValue(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                } else if (skill.getStat().equals("ap")) {
                    if (targetCharacter.getAp() - skill.getValue() < 0)
                        targetCharacter.updateStat(targetCharacter.getHp(), 0, targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                    else
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp() - skill.getValue(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                } else if (skill.getStat().equals("ad")) {
                    if (targetCharacter.getAd() - skill.getValue() < 0)
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), 0,
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                    else
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd() - skill.getValue(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                } else if (skill.getStat().equals("speed")) {
                    if (targetCharacter.getSpeed() - skill.getValue() < 0)
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                0, targetCharacter.getCritical(), targetCharacter.getAvoid());
                    else
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed() - skill.getValue(), targetCharacter.getCritical(), targetCharacter.getAvoid());
                } else if (skill.getStat().equals("critical")) {
                    if (targetCharacter.getCritical() - skill.getValue() < 0)
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), 0, targetCharacter.getAvoid());
                    else
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical() - skill.getValue(), targetCharacter.getAvoid());
                } else if (skill.getStat().equals("avoid")) {
                    if (targetCharacter.getCritical() - skill.getValue() < 0)
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), 0);
                    else
                        targetCharacter.updateStat(targetCharacter.getHp(), targetCharacter.getAp(), targetCharacter.getAd(),
                                targetCharacter.getSpeed(), targetCharacter.getCritical(), targetCharacter.getAvoid() - skill.getValue());
                }
                myCharacterRepository.save(targetCharacter);
            }//for
        }
    }
}
