import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from 'components/common/Button';

export default function EndingPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>게임 끝</h1>
      <Button value="다시하기" onClick={() => navigate('/game')} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  background-image: url(${({ theme, bgImgUrl }) =>
    bgImgUrl || theme.mainPageBgImg});
  background-size: cover;
`;
