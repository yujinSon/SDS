import React, { useState } from 'react';
import styled from 'styled-components';

import POS from 'constants/pk';

import IMG from 'assets/img/고병진.png';
import IMG2 from 'assets/img/손민혁.png';

export default function Battle({
  characters,
  monsters,
  selectedCh, // 현재 차례인 케릭터의 인덱스
  clickCh,
  clickMonster,
  nowTurn,
  stageStep,
}) {
  return (
    <>
      <StageContainer>
        {stageStep ? (
          <>
            <StageDiv>
              {stageStep[0]} - {stageStep[1]}
            </StageDiv>
            <BarContainer>
              <Bar progress={stageStep[1]} />
            </BarContainer>
          </>
        ) : null}
      </StageContainer>

      {characters
        ? characters.map((ch, idx) => (
            <CharacterContainer
              ch={ch}
              key={idx}
              onClick={() => {
                clickCh(ch);
              }}
              // go={selectedCh === ch.pos}
              selectedCh={selectedCh === idx}
              POS={POS}
            >
              <Circle src={IMG2}></Circle>
              <Text>{ch.subName}</Text>
              <ProgressContainer>
                <ProgressBar hpBar={(ch.hp / ch.maxHp) * 100} />
              </ProgressContainer>
              {nowTurn === ch.pos ? <TurnBox>Turn</TurnBox> : null}
            </CharacterContainer>
          ))
        : null}
      {monsters
        ? monsters.map((monster, idx) => (
            <MonsterContainer
              monster={monster}
              key={idx}
              POS={POS}
              onClick={() => clickMonster(monster.pos)}
            >
              <Circle src={IMG}></Circle>
              <Text>{monster.subName}</Text>
              <ProgressContainer>
                <ProgressBar hpBar={(monster.hp / monster.maxHp) * 100} />
              </ProgressContainer>
              {nowTurn === monster.pos ? <TurnBox>Turn</TurnBox> : null}
            </MonsterContainer>
          ))
        : null}
    </>
  );
}

const CharacterContainer = styled.div`
  position: absolute;

  top: ${({ POS, ch }) => POS[ch.pos][0]}%;
  left: ${({ POS, ch }) => POS[ch.pos][1]}%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ selectedCh }) =>
    selectedCh &&
    `
    border: 3px solid #ccc;
    border-color: yellow;
  `}
`;

const MonsterContainer = styled.div`
  position: absolute;

  top: ${({ POS, monster }) => POS[monster.pos][0]}%;
  left: ${({ POS, monster }) => POS[monster.pos][1]}%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Circle = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f2f2f2;
`;

const Text = styled.p`
  margin: 3px 0px;
  font-size: 18px;
  font-weight: bold;
`;

const ProgressContainer = styled.div`
  width: 150px;
  height: 10px;
  background-color: red;
`;
const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${({ hpBar }) => hpBar}%;
`;

const TurnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  margin-top: 0.3rem;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;
const StageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const BarContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  height: 2%;
  width: 30%;
  border-radius: 10px;
  background-color: #e4e4e4;
  overflow: hidden;
`;
const Bar = styled.div`
  height: 100%;
  background: linear-gradient(to right, #67b26f, #4ca2cd);
  width: ${({ progress }) => `${25 * progress}%`};
  border-radius: 10px;
`;

const StageDiv = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
