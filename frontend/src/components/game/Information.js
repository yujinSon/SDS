import React, { useState } from 'react';
import styled from 'styled-components';

import skillsPK from 'constants/skillsPK';

import IMG from 'assets/img/고병진.png';
import IMG2 from 'assets/img/손민혁.png';

export default function Information({
  character,
  selectedSkill,
  setSelectedSkill,
  clickSkill,
}) {
  return (
    <NoneTag>
      {character ? (
        <Container>
          <LeftContainer>
            <StatDiv>{character.className}</StatDiv>
            <StatDiv>
              {character.subName} (level : {character.level})
            </StatDiv>
            <StatDiv>
              HP: {character.hp} / {character.maxHp}
            </StatDiv>
            <StatDiv>AD: {character.ad}</StatDiv>
            <StatDiv>AP: {character.ap}</StatDiv>
            <StatDiv>Speed: {character.speed}</StatDiv>
            <StatDiv>Critical: {character.critical}</StatDiv>
            <StatDiv>Avoid: {character.avoid}</StatDiv>
          </LeftContainer>
          <RightContainer>
            <SkillContainer>
              {character.skills.map((skill, idx) => {
                return character.skillCoolTime[idx] ? (
                  <SkillImg
                    src={skillsPK[character.subName].skillImgs[idx]}
                    alt="스킬사진"
                    key={idx}
                    onClick={() => {
                      clickSkill(idx);
                    }}
                    selectedSkill={selectedSkill === idx}
                  />
                ) : (
                  <SkillImg src={skillsPK[0]} alt="스킬사진" key={idx} />
                );
              })}
            </SkillContainer>
            {selectedSkill != null ? (
              <SkillDetail>
                <div>{character.skills[selectedSkill].skillName}</div>
                <div>
                  {skillsPK[character.subName].skillDetails[selectedSkill]}
                </div>
                <div>
                  {skillsPK[character.subName].skillEffects[selectedSkill]}
                </div>
              </SkillDetail>
            ) : (
              <SkillDetail>
                <div>스킬을 클릭하십쇼</div>
              </SkillDetail>
            )}
          </RightContainer>
        </Container>
      ) : (
        <NoneSelectBox>
          캐릭터를 클릭하여 능력치와 스킬을 확인하세요.
        </NoneSelectBox>
      )}
    </NoneTag>
  );
}
const Container = styled.div`
  background-color: rgba(189, 189, 189, 0.7);

  display: flex;
  flex-direction: row;

  color: black;
  height: 100%;

  padding: 1rem;
  gap: 0.5rem;
`;

const LeftContainer = styled.div`
  background-color: rgba(93, 93, 93, 0.5);
  border-radius: 10px;
  border: none;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: black;
  width: 40%;
  height: 100%;

  padding-left: 0.5rem;
`;

const StatDiv = styled.div`
  margin: 0.1rem;
  font-size: calc(0.2rem + 0.8vw);
  font-weight: bold;
  max-width: 90%;
`;

const RightContainer = styled.div`
  background-color: gray;
  background-color: rgba(93, 93, 93, 0.5);
  border-radius: 10px;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;
  width: 60%;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: black;
  width: 100%;
  height: 50%;
`;

const SkillImg = styled.img`
  max-width: 95%;
  max-height: 95%;
  object-fit: cover;
  border-radius: 10px;
  ${({ selectedSkill }) =>
    selectedSkill &&
    `
    border: 5px solid #ccc;
    border-color: yellow;
    `}
`;

const SkillDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: calc(0.3rem + 1vw);
  font-weight: bold;

  height: 100%;
`;

const NoneSelectBox = styled.div`
  background-color: rgba(189, 189, 189, 0.7);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: black;
  height: 100%;
  width: 100%;
  font-size: 24px;
  font-weight: bold;

  padding: 1rem;
  gap: 0.5rem;
`;

const NoneTag = styled.div`
  display: flex;
  height: 26.5vh;
`;
