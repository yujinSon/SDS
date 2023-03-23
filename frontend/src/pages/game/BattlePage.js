import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'libs/axios';
import api from 'constants/api';

import Battle from 'components/game/Battle';
import Information from 'components/game/Information';

export default function BattlePage() {
  useEffect(() => {
    const [url, method] = api('loadStage');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('전투페이지 불러오기', res.data);
        setCharacters(res.data.character);
        setMonsters(res.data.villain);
      })
      .catch((err) => {});
  }, []);

  const [characters, setCharacters] = useState(null);
  const [monsters, setMonsters] = useState(null);

  const [turnOrder, setTurnOrder] = useState(null);
  // 현재 턴인 pos
  const [nowTurn, setNowTurn] = useState(null);
  // turnOrder 배열의 인덱스
  const [nowIdx, setNowIdx] = useState(0);

  // speed에 따라 공격 turn 계산하기
  useEffect(() => {
    if (!characters | !monsters) return;
    // 턴 한 번만 처음 계산해줌 (nowIdx가 0인 경우에)
    if (nowIdx !== 0) return;
    const mergedArr = [
      ...characters.map(({ pos, speed }) => ({ pos, speed })),
      ...monsters.map(({ pos, speed }) => ({ pos, speed })),
    ];
    mergedArr.sort((a, b) => b.speed - a.speed);
    // 현재 턴 박스 표시해주기 (캐릭터 바뀌면 수정할 수 밖에 없음..)
    setNowTurn(mergedArr[nowIdx].pos);
    setTurnOrder(mergedArr);

    console.log(mergedArr, '새로 가져온다!');
  }, [characters, monsters]);
  // console.log('턴', turnOrder);

  // 턴 순서에 따라서 공격 logic 실행
  useEffect(() => {
    if (!turnOrder) return;
    console.log(nowIdx, '되냐?');
    setNowTurn(turnOrder[nowIdx].pos);
    // console.log('현재 공격 pos', turnOrder[nowIdx]);
  }, [nowIdx]);

  // 빌런 공격 로직 (이거 마저 완성해야함) ****************************
  useEffect(() => {
    // 캐릭터 공격 차례면 pass
    if (nowTurn < 3) return;
    console.log('빌런의 공격 차례가 도래했다!!!');
    let myMonster = 0;
    for (let idx = 0; idx < monsters.length; idx++) {
      if (monsters[idx].pos === nowTurn) {
        myMonster = monsters[idx];
        console.log('현재 공격 턴인 빌런', myMonster);
      }
    }

    // 몬스터가 사용할 스킬
    const mySkill =
      myMonster.skills[Math.floor(Math.random() * myMonster.skills.length)];

    // 수정필요 (axios url 문제인지 뭔지 모르겠는데 수정 필요)
    let data = {};
    if (mySkill.range === true) {
      data = {
        target: 3, // 전체공격
        damage: 300,
      };
    } else {
      // 몬스터가 공격할 캐릭터의 pos를 랜덤으로 가져옴
      const targetCh = Math.floor(Math.random() * characters.length);
      data = { target: targetCh, damage: 300 };
    }
    const [url, method] = api('enemysTurn');
    const config = { url, method, data };
    axios(config)
      .then((res) => {
        console.log('빌런 공격 결과', res.data);
      })
      .catch((err) => {});

    if (nowIdx < 6) {
      setNowIdx(nowIdx + 1);
    } else {
      setNowIdx(0);
    }
  }, [nowTurn]);

  // playerTurn이 2가 된 상태에서 몬스터를 클릭하면 공격하는 것으로 간주
  const [playerTurn, setPlayerTurn] = useState(0);
  const [selectedCh, setSelectedCh] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [attackedMonster, setAttackedMonster] = useState(null);

  const clickCh = (ch) => {
    // 버프 주는 거임
    if (playerTurn === 2) {
      console.log('옛다 버프다~');

      let chIdx = 0;
      for (let idx = 0; idx < characters.length; idx++) {
        if (characters[idx].pos === nowTurn) {
          chIdx = idx;
          break;
        }
      }
      const data = {
        // 스킬 사용 시전자의 pos
        pos: nowTurn,
        skillName: characters[chIdx].skills[selectedSkill].skillName,
        // 스킬을 적용시킬 대상의 pos - 전체면 3 (ch.pos)
        target: characters[selectedCh].skills[selectedSkill].range ? 3 : ch.pos,
      };
      console.log(data, '회복스킬 시전 시 보낼 data');
      const [url, method] = api('playersTurn');
      const config = { url, method, data };
      axios(config)
        .then((res) => {
          console.log('버프 요청 axios', res.data);
          // 새롭게 업데이트 된 캐릭터 정보 저장
          setCharacters(res.data);
        })
        .catch((err) => {});

      setPlayerTurn(0);
      if (nowIdx < 6) {
        setNowIdx(nowIdx + 1);
      } else {
        setNowIdx(0);
      }
    } else {
      if (ch.pos === nowTurn) {
        setSelectedCh(ch.pos);
        setSelectedSkill(null);
        setPlayerTurn(1);
      } else {
        console.log('응 니턴 아니야~');
      }
    }
  };

  const clickSkill = (idx) => {
    setSelectedSkill(idx);
    if (playerTurn === 1) {
      setPlayerTurn(2);
    }
  };

  const clickMonster = (pos) => {
    if (playerTurn !== 2) return;

    const mySkill = characters[selectedCh].skills[selectedSkill];
    const myCharacter = characters[selectedCh];

    if (mySkill.skillTarget === 0) {
      // 몬스터가 뚜까맞을 데미지 (뒤에는 계수임 ㅅㄱㅇ)
      // const damage = mySkill.value * myCharacter[mySkill.factor];
      let damage = mySkill.value; // 추후 수정해야함 ㅅㄱㅇ
      // console.log('데미지', damage);

      const randomPercent = Math.floor(Math.random() * 100);
      // console.log('랜덤', randomNum);
      if (randomPercent <= myCharacter.critical) {
        console.log(
          '크리 떴다 수고해라!!!',
          `내 크리 :${myCharacter.critical}`,
          `랜덤 숫자 :${randomPercent}`,
        );
        const criticalPercent = Math.random() + 1;
        damage = Math.floor(criticalPercent * damage);
      }

      // 스킬이 1인 범위일 경우, 전체 스킬 일 경우 분기 설정
      // 전체 스킬인 경우
      if (mySkill.range === true) {
        let copy = [...monsters];
        let tmp = [];

        for (let idx = 0; idx < monsters.length; idx++) {
          // 개별 데미지 적용
          let eachDamage = damage;
          console.log(monsters[idx].hp, '이전 체력');
          // 회피했는지 아닌지 계산
          eachDamage *= calculateDodge(monsters[idx].avoid);
          const afterHp = monsters[idx].hp - eachDamage;
          copy[idx].hp = afterHp;
          console.log(afterHp, '남은 체력');
        }
        // hp가 0이하로 떨어져서 사망한 경우
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].hp > 0) {
            tmp.push(copy[i]);
          }
        }
        setMonsters(tmp);
      }
      // 단일 스킬인 경우
      else {
        for (let idx = 0; idx < monsters.length; idx++) {
          if (monsters[idx].pos === pos) {
            console.log(monsters[idx].hp, '이전 체력');
            // 회피했는지 아닌지 계산
            damage *= calculateDodge(monsters[idx].avoid);
            const afterHp = monsters[idx].hp - damage;

            console.log(afterHp, '남은 체력');
            let copy = [...monsters];
            let tmp = [];

            // hp가 0이하로 떨어져서 사망한 경우
            if (afterHp <= 0) {
              for (let i = 0; i < copy.length; i++) {
                if (i !== idx) {
                  tmp.push(copy[i]);
                }
              }
              setMonsters(tmp);
              // hp가 달았지만 그래도 0이상인 경우
            } else {
              copy[idx].hp = afterHp;
              setMonsters(copy);
            }
            break;
          }
        }
      }
    }

    // 플레이어 턴 초기화
    setPlayerTurn(0);

    // 플레이어가 공격했으면 다음 턴으로 넘어감
    if (nowIdx < 6) {
      setNowIdx(nowIdx + 1);
    } else {
      setNowIdx(0);
    }
    // 현재 몇 번재 턴인지 출력
    console.log('내가 방금 공격한 턴', nowIdx);
  };

  // 회피여부 판단하는 함수
  const calculateDodge = (avoid) => {
    const randomPercent = Math.floor(Math.random() * 100);
    if (randomPercent <= avoid) {
      console.log('운 좋게 피함 ㅅㄱㅇ');
      return 0;
    }
    console.log('넌 그냥 맞아라 회피 못했다.');
    return 1;
  };

  return (
    <MainContainer>
      <BattleContainer>
        <Battle
          characters={characters}
          monsters={monsters}
          selectedCh={selectedCh}
          clickCh={clickCh}
          clickMonster={clickMonster}
          nowTurn={nowTurn}
        />
      </BattleContainer>
      <BottomContainer>
        {(selectedCh === 0) | selectedCh ? (
          <Information
            character={characters[selectedCh]}
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
            clickSkill={clickSkill}
          >
            여기는 왼쪽 아래
          </Information>
        ) : null}

        <RightContainer>여기는 오른쪽 아래</RightContainer>
      </BottomContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const BattleContainer = styled.div`
  width: 100%;
  height: 70%;

  background-image: url(${({ theme }) => `${theme.battleBgImg}`});
  background-size: cover;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-directino: row;

  height: 30%;

  color: black;
`;

const RightContainer = styled.div`
  display: flex;
  flex-directino: row;

  color: black;
  width: 50%;
`;
