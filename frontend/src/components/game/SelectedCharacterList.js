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
          <>
          {character.subClassName != null ? (
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
                <div>{character.subClassName}</div>
              </TextContainer>
            </CharacterContainer>
          ) : <NoneCharacterContainer
                key={idx}>
                <ImageContainer>
                  <img src={IMG} alt="없는 케릭터 img" />
                </ImageContainer>
                <TextContainer>
                <div>???</div>
                </TextContainer>
            </NoneCharacterContainer>}
          </>
          ))
        : null}
    </Container>
  );
}


const Container = styled.div`
  display: flex;
`;

const CharacterContainer = styled.span`
background-color: rgba(189, 189, 189, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

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
  width: 80%;
  height: 80%;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 0.5rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const NoneCharacterContainer = styled(CharacterContainer)`
  cursor: auto;
`;

const TextContainer = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
