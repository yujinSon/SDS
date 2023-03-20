import React from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/고병진.png';

export default function SelectedCharacterList({
  data,
  selectedCharacter,
  setSelectedCharacter,
}) {
  return (
    <Container>
      {data
        ? data.map((character, idx) => (
            <CharacterContainer
              key={idx}
              onClick={() => {
                setSelectedCharacter(idx);
              }}
              selected={selectedCharacter === idx}
            >
              <ImageContainer>
                <img src={IMG} alt="캐릭터 img" />
              </ImageContainer>
              <TextContainer>
                <div>{character.subClass}</div>
                <div>level: {character.level}</div>
              </TextContainer>
            </CharacterContainer>
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const CharacterContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  margin-right: 1rem;

  ${(props) =>
    props.selected &&
    `
    border-color: yellow;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
