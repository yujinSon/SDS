import React from 'react';
import styled from 'styled-components';

export default function CharacterDetail({ data, selectedCharacter }) {
  return (
    <Container>
      {data && selectedCharacter != null ? (
        <div>
          <div>{data[selectedCharacter].className}</div>
          <div>{data[selectedCharacter].subClassName} </div>
          <div>level: {data[selectedCharacter].level} </div>
          <div>
            skills:
            {data[selectedCharacter].skills.map((skill, idx) => (
              <span key={idx}>{skill.skillName} </span>
            ))}
          </div>
          <div>maxHP: {data[selectedCharacter].maxHp} </div>
          <div>hp: {data[selectedCharacter].hp} </div>
          <div>ad: {data[selectedCharacter].ad} </div>
          <div>ap: {data[selectedCharacter].ap} </div>
          <div>speed: {data[selectedCharacter].speed} </div>
          <div>critical: {data[selectedCharacter].critical} </div>
          <div>avoid: {data[selectedCharacter].avoid} </div>
        </div>
      ) : (
        <div>능력치 보고 싶은 캐릭터 선택하셈</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;
