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
    const mergedArr = [
      ...characters.map(({ pos, speed }) => ({ pos, speed })),
      ...monsters.map(({ pos, speed }) => ({ pos, speed })),
    ];
    mergedArr.sort((a, b) => b.speed - a.speed);
    // 현재 턴 박스 표시해주기 (캐릭터 바뀌면 수정할 수 밖에 없음..)
    setNowTurn(mergedArr[nowIdx].pos);
    setTurnOrder(mergedArr);
  }, [characters, monsters]);
  // console.log('턴', turnOrder);

  // 턴 순서에 따라서 공격 logic 실행
  useEffect(() => {
    if (!turnOrder) return;
    setNowTurn(turnOrder[nowIdx].pos);
    // console.log('현재 공격 pos', turnOrder[nowIdx]);
  }, [nowIdx]);

  // playerTurn이 2가 된 상태에서 몬스터를 클릭하면 공격하는 것으로 간주
  const [playerTurn, setPlayerTurn] = useState(0);
  const [selectedCh, setSelectedCh] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [attackedMonster, setAttackedMonster] = useState(null);

  const clickCh = (ch) => {
    // 버프 주는 거임
    if (playerTurn === 2) {
      console.log('옛다 버프다~');
      setPlayerTurn(0);
      setNowIdx(nowIdx + 1);
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

    // console.log(characters[selectedCh].skills[selectedSkill], '고뱀');
    // 선택된 캐릭터가 몬스터에게 사용할 스킬
    const myCharacter = characters[selectedCh];
    const mySkill = characters[selectedCh].skills[selectedSkill];

    if (mySkill.skillTarget === 0) {
      // console.log(monsters, '고뱀몬스터');
      // 몬스터가 뚜까맞을 데미지 (뒤에는 계수임 ㅅㄱㅇ)
      // const damage = mySkill.value * myCharacter[mySkill.factor];
      const damage = mySkill.value;
      // 스킬이 1인 범위 일경우, 전체 스킬 일 경우 분기 필요
      for (let idx = 0; idx < 4; idx++) {
        if (monsters[idx].pos === pos) {
          const afterHp = monsters[idx].hp - damage;
          console.log(afterHp, '남은 체력');
          let copy = [...monsters];
          let tmp = [];

          if (afterHp <= 0) {
            for (let i = 0; i < copy.length; i++) {
              console.log(i);
              if (i !== idx) {
                tmp.push(copy[i]);
              }
            }
            setMonsters(tmp, '사망');
          } else {
            copy[idx].hp = afterHp;
            setMonsters(copy);
            console.log(monsters, '양수');
          }
          break;
        }
      }
    }

    // 플레이어 턴 초기화
    setPlayerTurn(0);

    // 플레이어가 공격했으면 다음 턴으로 넘어감
    setNowIdx(nowIdx + 1);
    // 현재 몇 번재 턴인지 출력
    console.log('내가 방금 공격한 턴', nowIdx);
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
