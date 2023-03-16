import React from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from 'components/common/Button';

export default function MapPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container bgImgUrl={theme.mapBgImg}>
      <Button
        size="large"
        value="Enter"
        onClick={() => {
          navigate('/battle');
        }}
      ></Button>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;

  width: 100%;
  height: 100%;

  background-image: url(${({ theme }) => `${theme.mapBgImg}`});
  background-size: cover;
`;
