import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SkillModal({
  showSkillModal,
  setShowSkillModal,
  skillName,
  detail,
  effect,
}) {
  const navigate = useNavigate();
  console.log(detail);
  return (
    <Container>
      <Div>{skillName}</Div>
      <Div>{detail}</Div>
      <Div>효과 : {effect}</Div>
      <Button
        value="완료"
        onClick={() => {
          setShowSkillModal(!showSkillModal);
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  font-size: 1.2rem;
  text-align: center;
  background-color: orange;
`;

const Div = styled.div`
  margin-bottom: 1rem;
`;
