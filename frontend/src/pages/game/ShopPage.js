import React, { useState } from 'react';
import styled from 'styled-components';

import 영입 from 'assets/img/영입.png';
import 휴식 from 'assets/img/휴식.png';
import 유물 from 'assets/img/유물.png';
import 상점 from 'assets/img/상 점.png';
import 영입버튼 from 'assets/img/영입버튼.png';
import 휴식버튼 from 'assets/img/휴식버튼.png';
import 유물버튼 from 'assets/img/유물버튼.png';

export default function ShopPage() {
  return (
    <Container>
      <img src={상점} alt="" />
      <Card>
        <CardItem>
          <img src={영입} alt="" />
          <button>
            <img src={영입버튼} alt="" />
          </button>
        </CardItem>
        <CardItem>
          <img src={휴식} alt="" />
          <button>
            <img src={휴식버튼} alt="" />
          </button>
        </CardItem>
        <CardItem>
          <img src={유물} alt="" />
          <button>
            <img src={유물버튼} alt="" />
          </button>
        </CardItem>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${({ theme }) => `${theme.mapBgImg}`});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardItem = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    position: absolute;
    border: none;
    background-color: transparent;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
