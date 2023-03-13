import React from 'react';
import { Outlet } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export default function GameMainPageLayout({}) {
  return (
    <>
      <GlobalStyle />
      <Container>
        <UpperPane>
          <Outlet />
        </UpperPane>
      </Container>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    height: 100%;
  }
`;

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  background-image: url(${({ theme }) => theme.mainPageBgImg});
  background-size: cover;
`;

const UpperPane = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
