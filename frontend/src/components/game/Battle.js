import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import VictoryModal from './VictoryModal';
import DefeatModal from './DefeatModal';
import POS from 'constants/pk';
import charactersPK from 'constants/charactersPK';
import monstersPK from 'constants/monstersPK';
import stagePK from 'constants/stagePK';
import stepPK from 'constants/stepPK';

export default function Battle({
  characters,
  monsters,
  selectedCh, // 현재 차례인 케릭터의 인덱스
  clickCh,
  clickMonster,
  nowTurn,
  stageStep,
  showVictoryModal,
  showDefeatModal,
  characterShaking,
  dynamicStat,
}) {
  return (
    <>
      <StageContainer>
        {stageStep ? (
          <>
            <StageDiv>
              {stagePK[stageStep[0]]} - {stepPK[stageStep[1]]} Stage
            </StageDiv>
            <BarContainer>
              <Bar progress={stageStep[1]} />
            </BarContainer>
          </>
        ) : null}
      </StageContainer>
      {showVictoryModal ? (
        <ModalContainer>
          <VictoryModal stageStep={stageStep} />
        </ModalContainer>
      ) : null}
      {showDefeatModal ? (
        <ModalContainer>
          <DefeatModal stageStep={stageStep} />
        </ModalContainer>
      ) : null}
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
              shaking={characterShaking[ch.pos]}
              dynamicStat={dynamicStat[ch.pos] !== ''}
            >
              <DynamicStat dynamicStat={dynamicStat} chPos={ch.pos}>
                {dynamicStat[ch.pos]}
              </DynamicStat>
              <Circle src={charactersPK[ch.subName]}></Circle>
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
              shaking={characterShaking[monster.pos]}
              dynamicStat={dynamicStat[monster.pos] !== ''}
            >
              <DynamicStat dynamicStat={dynamicStat} chPos={monster.pos}>
                {dynamicStat[monster.pos]}
              </DynamicStat>
              <Circle src={monstersPK[monster.subName]}></Circle>
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

const shakeAnimation = keyframes`
  0%, 100% {
    transform: translate(-50%, -50%);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translate(calc(-50% - 10px), -50%);
  }
  20%, 40%, 60%, 80% {
    transform: translate(calc(-50% + 10px), -50%);
  }
`;

const blinkingAnimation = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

const DynamicStat = styled.div`
  font-size: 23px;
  font-weight: bold;
  min-height: 35px;

  color: ${({ dynamicStat, chPos }) => {
    const stat = dynamicStat[chPos];
    return stat.startsWith('+')
      ? 'red'
      : stat.startsWith('-')
      ? 'blue'
      : 'white';
  }};

  ${({ dynamicStat, chPos }) =>
    dynamicStat[chPos] &&
    css`
      animation: ${blinkingAnimation} 0.5s linear infinite;
      animation-duration: 1s;
    `}
`;

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

  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.3s;
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

  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.3s;
    `}
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

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
