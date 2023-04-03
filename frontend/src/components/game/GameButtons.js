import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function GameButtons({ selectedChList }) {
  const navigate = useNavigate();

  return (
    <Container>
      <ButtonContainer>
        <StartButton
          onClick={() => {
            if (selectedChList.length === 0) {
              alert('캐릭터를 최소 1명 이상 선택해야합니다.');
            } else {
              navigate('/game/ready');
            }
          }}
        >
          완료
        </StartButton>
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
