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
    @Column(columnDefinition = "int(1) default 0")
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

//        double[] randombox = {0.7,0.8,0.9,1.0,1.1,1.2,1.3};
//        Random random = new Random(); * random.nextInt(randombox.length)
        this.addHp = (int) Math.round(defaultCharacter.getCharacterStat().getAddHp());
        this.addAd = (int) Math.round(defaultCharacter.getCharacterStat().getAddAd());
        this.addAp = (int) Math.round(defaultCharacter.getCharacterStat().getAddAp());
        this.addSpeed = (int) Math.round(defaultCharacter.getCharacterStat().getAddSpeed());
        this.addCritical = (int) Math.round(defaultCharacter.getCharacterStat().getAddCritical());
        this.addAvoid = (int) Math.round(defaultCharacter.getCharacterStat().getAddAvoid());
        this.pos = pos;
        this.statPoint = randomCharacterDto.getLevel() - 1;
    }
    public void updateHP(){
        this.hp = this.maxHp;
    } // -> 이건 풀 회복 아님??

    public void setHp(int hp) {
        this.hp = hp;
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
