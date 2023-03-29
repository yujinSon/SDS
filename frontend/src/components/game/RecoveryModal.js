import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function ItemModal({}) {
  const navigate = useNavigate();
  return (
    <Container>
      <div>캐릭터의 모든 HP가 회복되었습니다.</div>
      <Button value="완료" onClick={() => navigate('/main')} />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;
