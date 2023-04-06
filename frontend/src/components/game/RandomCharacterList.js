import React, { useState } from 'react';
import styled from 'styled-components';

import charactersPK from 'constants/charactersPK';

import IMG from 'assets/img/고병진.png';

export default function RandomCharacterList({
  data,
  selectedRandomCh,
  setSelectedRandomCh,
  addCharacter,
}) {
  return (
    <Frame>
      {data
        ? data.map((character, idx) => (
            <Container
              key={idx}
              onClick={() => setSelectedRandomCh(idx)}
              selected={selectedRandomCh === idx}
            >
              <ImageContainer>
                <img
                  src={charactersPK[character.subClassName]}
                  alt="캐릭터 img"
                />
              </ImageContainer>
              <TextContainer>
                <div>{character.className}</div>
                <div>{character.subClassName}</div>
                <div>
                  level: {character.level} hp: {character.hp}
                </div>
                <div>
                  ad: {character.ad} ap: {character.ap} speed: {character.speed}{' '}
                  critical: {character.critical} avoid: {character.avoid}
                </div>
              </TextContainer>
            </Container>
          ))
        : null}

      <ButtonContainer onClick={addCharacter}>
        <SelectedButton>선택</SelectedButton>
      </ButtonContainer>
    </Frame>
  );
}

const Container = styled.div`
  background-color: rgba(189, 189, 189, 0.7);
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 0.5rem;

  

  ${(props) =>
    props.selected &&
    `
    border-color: yellow;
    border: 5px solid;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;

  img {
    width: 130%;
    height: auto;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const SelectedButton = styled.button`
  background-color: rgba(140, 140, 140, 0.8);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
`;
