package com.example.gameproject.api.service;

import com.example.gameproject.db.entity.MyCharacter;
import com.example.gameproject.db.entity.User;
import com.example.gameproject.db.repository.EffectTimeRepository;
import com.example.gameproject.db.repository.MyCharacterRepository;
import com.example.gameproject.db.repository.UserRepository;
import com.example.gameproject.dto.request.EnemyAttackDto;
import com.example.gameproject.dto.request.SkillRequestDto;
import com.example.gameproject.dto.response.MyCharacterUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BattleService {
    private final MyCharacterRepository myCharacterRepository;
    private final EffectTimeRepository effectTimeRepository;


    @Transactional
    public void updateStat(long userId, EnemyAttackDto enemyAttackDto){
        //user에서 mycharacter 가져오기
        List<MyCharacter> myCharacters = myCharacterRepository.findByUserId(userId);
        SkillRequestDto skill = enemyAttackDto.getSkill();
        if(!skill.isRange()) { // 단일
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
        }
        else{//전체
            for(MyCharacter targetCharacter : myCharacters){
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
