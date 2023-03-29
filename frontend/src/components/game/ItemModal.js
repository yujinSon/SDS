import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function ItemModal({}) {
  const navigate = useNavigate();
  return (
    <Container>
      <div>당신이 뽑은 유물은 바로 이거!</div>
      <Button value="완료" onClick={() => navigate('/main')} />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
