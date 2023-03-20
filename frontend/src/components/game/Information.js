import React, { useState } from 'react';
import styled from 'styled-components';

export default function Information({
  character,
  selectedSkill,
  setSelectedSkill,
  clickSkill,
}) {
  return (
    <>
      {character ? (
        <Container>
          <LeftContainer>
            <div>{character.name}</div>
            <div>HP: {character.hp}</div>
            <div>AD: {character.ad}</div>
            <div>AP: {character.ap}</div>
          </LeftContainer>
          <RightContainer>
            <SkillContainer>
              {character.skillImg.map((img, idx) => (
                <Img
                  src={img[0]}
                  alt="스킬사진"
                  key={idx}
                  onClick={() => {
                    clickSkill(idx);
                  }}
                  selectedSkill={selectedSkill === idx}
                />
              ))}
            </SkillContainer>
            {selectedSkill != null ? (
              <div>{character.skillImg[selectedSkill][1]}</div>
            ) : (
              <div>스킬을 클릭하십쇼</div>
            )}
          </RightContainer>
        </Container>
      ) : (
        <Container>No Information</Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;

  color: black;
  width: 50%;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  width: 50%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  width: 50%;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;

  color: black;
  width: 30%;
  height: 30%;
`;

const Img = styled.img`
  ${({ selectedSkill }) =>
    selectedSkill &&
    `
border: 3px solid #ccc;
border-color: yellow;
`}
`;
