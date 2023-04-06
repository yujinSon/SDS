import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import relicPK from 'constants/relicPK';

export default function ItemModal({ relicId }) {
  const navigate = useNavigate();
  console.log(relicId);
  return (
    <>
      {relicId ? (
        <Container>
          <Img src={relicPK[relicId].relicImg} alt="유물사진" />
          <RelicName>{relicPK[relicId].relicName}</RelicName>
          <RelicDetail>{relicPK[relicId].relicDetail}</RelicDetail>
          <RelicDetail>{relicPK[relicId].relicEffect}</RelicDetail>
          <MyButton onClick={() => navigate('/game/ready')}>완료</MyButton>
        </Container>
      ) : null}
    </>
  );
}

const Container = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 20rem;
  height: 20rem;
  margin: 0.5rem;
  border: 3px solid white;
  border-radius: 7px;
`;

const RelicName = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const RelicDetail = styled.div`
  font-size: 1.3rem;

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
