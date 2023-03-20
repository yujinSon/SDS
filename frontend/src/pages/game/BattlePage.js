import React, { useState } from 'react';
import styled from 'styled-components';

import Battle from 'components/game/Battle';
import Information from 'components/game/Information';

import IMG from 'assets/img/고병진.png';
import IMG2 from 'assets/img/손민혁.png';

export default function BattlePage() {
  const [characters, setCharacters] = useState([
    {
      name: '경찰 병진',
      level: 7,
      top: 10,
      left: 20,
      hp: 120,
      ad: 70,
      ap: 30,
      pos: 0,
      skillImg: [
        [IMG2, '공격력 2 증가'],
        [IMG2, '체력 3 증가'],
        [IMG, 'AP 20증가'],
      ],
    },
    {
      name: '비혼주의자 민혁',
      level: 3,
      top: 30,
      left: 8,
      hp: 160,
      ad: 30,
      ap: 80,
      pos: 1,
      skillImg: [
        [IMG, '공격력 24 증가'],
        [IMG2, '체력 351 증가'],
        [IMG2, 'AP 203 증가'],
      ],
    },
    {
      name: '예비군 용찬',
      level: 4,
      top: 55,
      left: 20,
      hp: 670,
      ad: 50,
      ap: 37,
      pos: 2,
      skillImg: [
        [IMG, '공격력 122 증가'],
        [IMG2, '체력 334 증가'],
        [IMG, 'AP 205 증가'],
      ],
    },
  ]);

  const [monsters, setMonsters] = useState([
    {
      name: '턱스크 빌런',
      top: 10,
      left: 80,
      pos: 4,
    },
    {
      name: '신종플루 걸린 개',
      top: 30,
      left: 92,
      pos: 5,
    },
    {
      name: '감염된 의사',
      top: 45,
      left: 80,
      pos: 6,
    },
    {
      name: '메르스 감염자',
      top: 55,
      left: 92,
      pos: 7,
    },
  ]);

  // playerTurn이 2가 된 상태에서 몬스터를 클릭하면 공격하는 것으로 간주
  const [playerTurn, setPlayerTurn] = useState(0);
  const [selectedCh, setSelectedCh] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const clickCh = (ch) => {
    setSelectedCh(ch.pos);
    setSelectedSkill(null);
    setPlayerTurn(1);
  };

  const clickSkill = (idx) => {
    setSelectedSkill(idx);
    if (playerTurn === 1) {
      setPlayerTurn(2);
    }
    console.log(playerTurn);
  };

  return (
    <MainContainer>
      <BattleContainer>
        <Battle
          characters={characters}
          monsters={monsters}
          selectedCh={selectedCh}
          clickCh={clickCh}
        />
      </BattleContainer>
      <BottomContainer>
        <Information
          character={characters[selectedCh]}
          selectedSkill={selectedSkill}
          setSelectedSkill={setSelectedSkill}
          clickSkill={clickSkill}
        >
          여기는 왼쪽 아래
        </Information>
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
