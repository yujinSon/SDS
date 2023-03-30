import React, { useState } from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/고병진.png';
import IMG2 from 'assets/img/손민혁.png';

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
            <div>{character.className}</div>
            <div>
              {character.subName} (level : {character.level})
            </div>
            <div>
              HP: {character.hp} / {character.maxHp}
            </div>
            <div>AD: {character.ad}</div>
            <div>AP: {character.ap}</div>
            <div>Speed: {character.speed}</div>
            <div>Critical: {character.critical}</div>
            <div>Avoid: {character.avoid}</div>
          </LeftContainer>
          <RightContainer>
            <SkillContainer>
              {character.skills.map((skill, idx) => {
                return character.skillCoolTime[idx] ? (
                  <Img
                    src={IMG}
                    alt="스킬사진"
                    key={idx}
                    onClick={() => {
                      clickSkill(idx);
                    }}
                    selectedSkill={selectedSkill === idx}
                  />
                ) : (
                  <Img src={IMG2} alt="스킬사진" key={idx} />
                );
              })}
            </SkillContainer>
            {selectedSkill != null ? (
              <>
                <div>{character.skills[selectedSkill].skillName}</div>
                {/* <div>stat: {character.skills[selectedSkill].stat}</div>
                <div>damage: {character.skills[selectedSkill].value}</div> */}
              </>
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
  width: 100%;
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
  width: 50%;
  height: 50%;
`;

const Img = styled.img`
  width: 70px;
  height: 60px;
  ${({ selectedSkill }) =>
    selectedSkill &&
    `
border: 3px solid #ccc;
border-color: yellow;
`}
`;
