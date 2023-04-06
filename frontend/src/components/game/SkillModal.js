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
        <Div>{effect}</Div>
      </Container>

  );
}


const Container = styled.div`
  font-size: 1.2rem;
  text-align: center;
`;

const Div = styled.div`
  margin-bottom: 1rem;
`;


const SelectedButton = styled.button`
  background-color: rgba(140, 140, 140, 0.8);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
`;
