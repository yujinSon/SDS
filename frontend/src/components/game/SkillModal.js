import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function SkillModal({
  data,
  showSkillModal,
  setShowSkillModal,
}) {
  const navigate = useNavigate();
  console.log(data);
  return (
    <Container>
      <div>{data}</div>
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
  text-align: center;
  background-color: orange;
`;
