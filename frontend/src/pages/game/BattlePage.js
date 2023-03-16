import React, { useState } from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/고병진.png';

export default function BattlePage() {
  const name = '고병진';
  const [percent, setPercent] = useState(100);

  const decreaseHp = () => {
    setPercent(percent - 10);
  };
  return (
    <MainContainer>
      <BattleContainer>
        <Container>
          <Circle src={IMG}></Circle>
          <Text>{name}</Text>
          <ProgressContainer>
            <ProgressBar percent={percent} />
          </ProgressContainer>
          <button onClick={decreaseHp}>Decrease HP</button>
        </Container>
      </BattleContainer>
      <BottomContainer>
        <LeftContainer>여기는 왼쪽 아래</LeftContainer>
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

const LeftContainer = styled.div`
  display: flex;
  flex-directino: row;

  color: black;
  width: 50%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-directino: row;

  color: black;
  width: 50%;
`;

const Container = styled.div`
  position: absolute;
  top: 10%;
  left: 20%;
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
