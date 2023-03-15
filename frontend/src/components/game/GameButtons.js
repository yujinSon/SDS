import React from 'react';
import styled from 'styled-components';
import Button from 'components/common/Button';

export default function GameButtons() {
  return (
    <Container>
      <ButtonContainer>
        <Button value="유물보기" />
        <Button value="스텟찍기" />
      </ButtonContainer>
      <ButtonContainer>
        <Button value="Logout" />
        <Button value="모험하기" />
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
