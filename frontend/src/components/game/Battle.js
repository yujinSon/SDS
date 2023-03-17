import React, { useState } from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/고병진.png';
import IMG2 from 'assets/img/손민혁.png';

export default function Battle({ characters, monsters, selectedCh, clickCh }) {
  const [percent, setPercent] = useState(100);

  const decreaseHp = () => {
    setPercent(percent - 10);
  };

  return (
    <>
      {characters.map((ch, idx) => (
        <CharacterContainer
          ch={ch}
          key={idx}
          onClick={() => clickCh(ch)}
          selectedCh={selectedCh === ch.pos}
        >
          <Circle src={IMG2}></Circle>
          <Text>{ch.name}</Text>
          <ProgressContainer>
            <ProgressBar percent={percent} />
          </ProgressContainer>
          <button onClick={decreaseHp}>Decrease HP</button>
        </CharacterContainer>
      ))}
      {monsters.map((monster, idx) => (
        <MonsterContainer monster={monster} key={idx}>
          <Circle src={IMG}></Circle>
          <Text>{monster.name}</Text>
          <ProgressContainer>
            <ProgressBar percent={percent} />
          </ProgressContainer>
          <button onClick={decreaseHp}>Decrease HP</button>
        </MonsterContainer>
      ))}
    </>
  );
}

const CharacterContainer = styled.div`
  position: absolute;

  top: ${({ ch }) => ch.top}%;
  left: ${({ ch }) => ch.left}%;
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

  top: ${({ monster }) => monster.top}%;
  left: ${({ monster }) => monster.left}%;
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
  background-color: #f2f2f2;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #4caf50;
  width: ${({ percent }) => percent}%;
`;
