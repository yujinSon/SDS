import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import skillsPK from 'constants/skillsPK';

export default function ItemModal({}) {
  const navigate = useNavigate();
  return (
    <Container>
      <Img src={skillsPK['안보전문가 용찬'].skillImgs[2]} alt="유물사진" />
      <RelicName>캐릭터의 모든 HP가 회복되었습니다.</RelicName>
      <MyButton onClick={() => navigate('/game/ready')}>완료</MyButton>
    </Container>
  );
}

const Img = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 0.5rem;
  border: 3px solid white;
  border-radius: 7px;
`;
const Container = styled.div`
  text-align: center;
`;

const RelicName = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const MyButton = styled.button`
  background-color: green;
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: 2px solid white;
  width: 10rem;
`;
