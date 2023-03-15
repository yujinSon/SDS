import React from 'react';
import styled from 'styled-components';

import Button from 'components/common/Button';
import IMG from 'assets/img/고병진.png';

export default function RandomCharacterList({ data }) {
  return (
    <>
      {data.map((character, idx) => (
        <Container key={idx}>
          <ImageContainer>
            <img src={IMG} alt="캐릭터 img" />
          </ImageContainer>
          <TextContainer>
            <div>{character.name}</div>
            <div>
              level: {character.level} hp: {character.hp}
            </div>
          </TextContainer>
        </Container>
      ))}
      <ButtonContainer>
        <Button value="선택" />
      </ButtonContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledButton = styled.button`
  width: 100px;
  height: 30px;
`;
