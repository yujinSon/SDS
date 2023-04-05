import React from 'react';
import styled from 'styled-components';
import { loginBgImg } from 'assets/img/bgs/login.jpg';

export default function MainPageLayout({ children }) {
  const [Up, Down] = children;

  return (
    <>
      <Container>
        <UpperPane>{Up}</UpperPane>
        <LowerPane>{Down}</LowerPane>
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

  background-image: url(${({ theme }) => theme.loginBgImg});
  background-size: cover;
`;

const UpperPane = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

const LowerPane = styled.div`
  padding: 0rem 2rem;
`;
