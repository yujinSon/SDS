import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function CharacterDetail({ data }) {
  // 여기서 데이터는 캐릭터 하나의 객체를 의미함

  const [ch, setCh] = useState(null);

  useEffect(() => {
    if (!data) return;
    let copy = { ...data };
    setCh(copy);
  }, [data]);

  return (
    <Container>
      {ch ? (
        <TopDiv>
          <div>
            <StatDiv>{ch.className}</StatDiv>
            <StatDiv>{ch.subClassName} </StatDiv>
            <StatDiv>level: {ch.level} </StatDiv>
            <StatDiv>
              skills:
              {ch.skills.map((skill, idx) => (
                <div key={idx}>{skill.skillName} </div>
              ))}
            </StatDiv>
          </div>
          <div>
            <AddStatDiv>
              <span>
                hp: {ch.hp} / {ch.maxHp}
              </span>{' '}
            </AddStatDiv>
            <AddStatDiv>
              <span>ad: {ch.ad}</span>{' '}
            </AddStatDiv>
            <AddStatDiv>
              <span>ap: {ch.ap}</span>{' '}
            </AddStatDiv>
            <AddStatDiv>
              <span>speed: {ch.speed}</span>{' '}
            </AddStatDiv>
            <AddStatDiv>
              <span>critical: {ch.critical}</span>{' '}
            </AddStatDiv>
            <AddStatDiv>
              <span>avoid: {ch.avoid}</span>{' '}
            </AddStatDiv>
          </div>
        </TopDiv>
      ) : (
        <div>능력치 보고 싶은 캐릭터 선택하셈</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(189, 189, 189, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  border-radius: 20px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`;

const StatDiv = styled.div`
  margin: 0.5rem;
`;

const AddStatDiv = styled(StatDiv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddStatButton = styled.button`
  background-color: red;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 0 0 3rem;

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

const MinusStatButton = styled.button`
  background-color: red;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 0 0 1rem;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
  }

  &:after {
    width: 2px;
    height: 60%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const StatSaveButton = styled.button`
  background-color: rgba(116, 116, 116, 0.7);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
  width: 20vw;
`;
