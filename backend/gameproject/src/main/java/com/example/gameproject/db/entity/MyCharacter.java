package com.example.gameproject.db.entity;

import com.example.gameproject.dto.response.RandomCharacterDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Entity
@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class MyCharacter implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int level;
    private int maxHp;

    private int hp;
    private int ad;
    private int ap;
    private int speed;
    private int critical;
    private int avoid;

    private int addHp;
    private int addAd;

    private int addAp;

    private int addSpeed;

    private int addCritical;

    private int addAvoid;

    private int pos;
    private int statPoint;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "character_id")
    private DefaultCharacter defaultCharacter;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private  User user;

    @OneToMany(mappedBy = "myCharacter", cascade = CascadeType.ALL)
    private List<EffectTime> effectTimes = new ArrayList<>();

    @OneToMany(mappedBy = "myCharacter", cascade = CascadeType.ALL)
    private List<CoolTime> coolTimes = new ArrayList<>();

    public MyCharacter(RandomCharacterDto randomCharacterDto, DefaultCharacter defaultCharacter, User user, int pos){
        this.user = user;
        this.defaultCharacter = defaultCharacter;
        this.level = randomCharacterDto.getLevel();
        this.hp = randomCharacterDto.getHp();
        this.ad = randomCharacterDto.getAd();
        this.ap = randomCharacterDto.getAp();
        this.speed = randomCharacterDto.getSpeed();
        this.critical = randomCharacterDto.getCritical();
        this.avoid = randomCharacterDto.getAvoid();
        this.maxHp = randomCharacterDto.getMaxHp();

        double[] randombox = {0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4};
        Random rand = new Random();

        this.addHp = (int) Math.round(defaultCharacter.getCharacterStat().getAddHp() * randombox[rand.nextInt(randombox.length)]);
        this.addAd = (int) Math.round(defaultCharacter.getCharacterStat().getAddAd() * randombox[rand.nextInt(randombox.length)]);
        this.addAp = (int) Math.round(defaultCharacter.getCharacterStat().getAddAp() * randombox[rand.nextInt(randombox.length)]);
        this.addSpeed = (int) Math.round(defaultCharacter.getCharacterStat().getAddSpeed() * randombox[rand.nextInt(randombox.length)]);
        this.addCritical = (int) Math.round(defaultCharacter.getCharacterStat().getAddCritical() * randombox[rand.nextInt(randombox.length)]);
        this.addAvoid = (int) Math.round(defaultCharacter.getCharacterStat().getAddAvoid() * randombox[rand.nextInt(randombox.length)]);

        this.pos = pos;
        this.statPoint = (randomCharacterDto.getLevel() - 1) * 3;
    }
    public void updateHP(){
        this.hp = this.maxHp;
    } // -> 이건 풀 회복 아님??

    public void setHp(int hp) {
        this.hp = hp;
    }

    public void addHp(int value) {this.hp += value;}
    public void addMaxHp(int value) {this.maxHp += value;}
    public void addAd(int value) {this.ad += value;}
    public void addAp(int value) {this.ap += value;}
    public void addSpeed(int value) {this.speed += value;}
    public void addCritical(int value) {this.critical += value;}
    public void addAvoid(int value) {this.avoid += value;}
    public void usedStatPoint(int value) {this.statPoint -= value;}

    public void levelUp() {
        this.level += 1;
        this.statPoint += 3;
    }

    public void updateStat(int hp, int ap, int ad, int speed, int critical, int avoid){
        this.hp = hp;
        this.ap = ap;
        this.ad = ad;
        this.speed = speed;
        this.critical = critical;
        this.avoid = avoid;
    }

    public void updateVictoryStat( int maxHp, int hp,int ad, int ap, int speed, int critical, int avoid){
        this.maxHp = maxHp;
        this.hp = hp;
        this.ad = ad;
        this.ap = ap;
        this.speed = speed;
        this.critical = critical;
        this.avoid = avoid;
    }

}
