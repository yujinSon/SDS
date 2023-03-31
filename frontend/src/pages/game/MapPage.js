import React, { useState, useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import Button from 'components/common/Button';

export default function MapPage() {
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const [url, method] = api('loadMap');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('맵 페이지', res.data);
      })
      .catch((err) => {});
  }, []);

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
