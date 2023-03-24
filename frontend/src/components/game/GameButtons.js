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
        <Button value="유물보기" onClick={() => setItemModal(!itemModal)} />
        <Button value="스텟찍기" onClick={() => setStatModal(!statModal)} />
      </ButtonContainer>
      <ButtonContainer>
        <Button value="Logout" onClick={() => navigate('/')} />
        <Button
          value="모험하기"
          onClick={() => {
            navigate('/map');
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin: 1rem;
`;
