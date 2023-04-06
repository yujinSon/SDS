import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import charactersPK from 'constants/charactersPK';
import IMG from 'assets/img/고병진.png';

export default function SelectedCharacterList({
  data,
  selectedCharacter,
  setSelectedCharacter,
}) {
  const [list, setList] = useState(null);

  useEffect(() => {
    if (!data) return;

    let copy = [];
    if (data.length === 0) {
      copy = [{ className: null }, { className: null }, { className: null }];
    } else if (data.length === 1) {
      copy = [...data, { className: null }, { className: null }];
    } else if (data.length === 2) {
      copy = [...data, { className: null }];
    } else {
      copy = [...data];
    }
    setList(copy);
  }, [data]);

  return (
    <Container>
      {list
        ? list.map((character, idx) => (
            <Wrapper key={idx}>
              {character.subClassName != null ? (
                <CharacterContainer
                  onClick={() => {
                    setSelectedCharacter(idx);
                  }}
                  selected={selectedCharacter === idx}
                >
                  <ImageContainer>
                    <img
                      src={charactersPK[character.subClassName]}
                      alt="캐릭터 img"
                    />
                  </ImageContainer>
                  <TextContainer>
                    <div>{character.subClassName}</div>
                  </TextContainer>
                </CharacterContainer>
              ) : (
                <NoneCharacterContainer>
                  <ImageContainer>
                    <img src={charactersPK.사망} alt="없는 케릭터 img" />
                  </ImageContainer>
                  <TextContainer>
                    <div>  ......  </div>
                  </TextContainer>
                </NoneCharacterContainer>
              )}
            </Wrapper>
          ))
        : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
`;

const CharacterContainer = styled.span`
  background-color: rgba(189, 189, 189, 0.7);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-left: 0.5rem;

  height: 80%;
  width: 80%;
  min-width: 140px

  ${(props) =>
    props.selected &&
    `
    border-color: yellow;
    border: 5px solid;
    min-width: 135px
  `}
`;

const ImageContainer = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;

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

const Wrapper = styled.div`
  margin: 0 0.5rem;
`;

