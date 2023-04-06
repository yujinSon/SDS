import React from 'react';
import styled from 'styled-components';

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

  background-image: url(${({ theme }) => theme.mainBgImg});
  background-size: cover;
`;

const UpperPane = styled.div`
  width: 100%;
  height: 30%;
  margin-bottom: 2rem;
`;

const LowerPane = styled.div`
  width: 100%;
  height: 100%;
`;
