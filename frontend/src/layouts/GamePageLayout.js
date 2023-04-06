import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

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
    bgImgUrl || theme.mainBgImg});
  background-size: cover;
`;

const Pane = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
`;
