import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export default function GameMainPageLayout({ bgImgUrl }) {
  return (
    <>
      <Container bgImgUrl={bgImgUrl}>
        <Pane>
          <Outlet />
        </Pane>
      </Container>
    </>
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

const Pane = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
