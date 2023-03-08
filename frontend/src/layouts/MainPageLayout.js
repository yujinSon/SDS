import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import mainPageBgImg from 'assets/img/bg-mainpage.png';

export default function MainPageLayout({ children }) {
  const [Up, Down] = children;

  return (
    <>
      <GlobalStyle />
      <Container>
        <UpperPane>{Up}</UpperPane>
        <LowerPane>{Down}</LowerPane>
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

  background-image: url(${mainPageBgImg});
  background-size: cover;
`;

const UpperPane = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const LowerPane = styled.div`
  padding: 0rem 2rem;
`;
