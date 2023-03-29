import React from 'react';
import styled from 'styled-components';

export default function CharacterDetail({ data, selectedCharacter }) {
  return (
    <Container>
      {data && selectedCharacter != null ? (
        <TopDiv>
          <div>
            <StatDiv>{data[selectedCharacter].className}</StatDiv>
            <StatDiv>{data[selectedCharacter].subClassName} </StatDiv>
            <StatDiv>level: {data[selectedCharacter].level} </StatDiv>
            <StatDiv>
            skills:
            {data[selectedCharacter].skills.map((skill, idx) => (
              <div key={idx}>{skill.skillName} </div>
            ))}
            </StatDiv>
          </div>
          <div>
            <AddStatDiv><span>hp: {data[selectedCharacter].hp} / {data[selectedCharacter].maxHp}</span> <AddStatButton/></AddStatDiv>
            <AddStatDiv><span>ad: {data[selectedCharacter].ad}</span> <AddStatButton/></AddStatDiv>
            <AddStatDiv><span>ap: {data[selectedCharacter].ap}</span> <AddStatButton/></AddStatDiv>
            <AddStatDiv><span>speed: {data[selectedCharacter].speed}</span> <AddStatButton/></AddStatDiv>
            <AddStatDiv><span>critical: {data[selectedCharacter].critical}</span> <AddStatButton/></AddStatDiv>
            <AddStatDiv><span>avoid: {data[selectedCharacter].avoid}</span> <AddStatButton/></AddStatDiv>
          </div>
        </TopDiv>
      ) : (
        <div>능력치 보고 싶은 캐릭터 선택하셈</div>
      )}
    </Container>
  );
}

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

const Container = styled.div`
  background-color: rgba(189, 189, 189, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-top: 1rem;
  font-size : 1.5rem;
  border-radius: 20px;
`;

const StatDiv = styled.div`
  margin: 0.5rem;
`;

const AddStatDiv = styled(StatDiv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  width: 100%;  
`;

const AddStatButton = styled.button`
  background-color: red;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 0 0 4rem;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
  }

  &:before {
    width: 60%;
    height: 2px;
    transform: translate(-50%, -50%);
  }

  &:after {
    width: 2px;
    height: 60%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
`;