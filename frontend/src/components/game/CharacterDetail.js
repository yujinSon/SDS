import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import skillsPK from 'constants/skillsPK';
import SkillModal from './SkillModal';

export default function CharacterDetail({ data }) {
  const [ch, setCh] = useState(null);

  const [selectedSkillIdx, setSelectedSkillIdx] = useState(null);

  useEffect(() => {
    if (!data) return;
    let copy = { ...data };
    setCh(copy);
  }, [data]);

  return (
    <Container>
      {ch ? (
        <TopDiv>
          <ModalContainer>
            <SkillModal
              data={skillsPK[ch.subClassName].skillDetails[selectedSkillIdx]}
            />
          </ModalContainer>
          <div>
            <StatDiv>{ch.className}</StatDiv>
            <StatDiv>{ch.subClassName} </StatDiv>
            <StatDiv>level: {ch.level} </StatDiv>
            <StatDiv>
              skills:
              {ch.skills.map((skill, idx) => (
                <div key={idx}>{skill.skillName} </div>
              ))}
              {skillsPK[ch.subClassName].skillImgs.map((skillImg, idx) => (
                <IMG
                  src={skillImg}
                  alt="스킬 이미지"
                  key={idx}
                  onClick={() => setSelectedSkillIdx(idx)}
                />
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

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; // z-index 값을 높임
`;

const IMG = styled.img`
  width: 100px;
  height: 100px;
`;
