import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from 'components/common/Button';

export default function GameButtons({
  saveCh,
  itemModal,
  setItemModal,
  statModal,
  setStatModal,
}) {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonContainer>
        <StartButton>완료</StartButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;


const StartButton = styled.button`
  background-color: rgba(140, 140, 140, 0.7);
  font-size: 2rem;
  color: white;
  border-radius: 10px;
  padding: 0.4rem 3rem 0.4rem 3rem;
  border: none;
`;
