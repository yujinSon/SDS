import React from 'react';
import styled from 'styled-components';

export default function EndingPage() {
  return (
    <Container>
      <h1>게임 끝</h1>
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
