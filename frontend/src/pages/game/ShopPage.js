import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import Modal from 'components/common/Modal';
import ItemModal from 'components/game/ItemModal';
import RecoveryModal from 'components/game/RecoveryModal';

import 영입 from 'assets/img/영입.png';
import 휴식 from 'assets/img/휴식.png';
import 유물 from 'assets/img/유물.png';
import 상점 from 'assets/img/상 점.png';
import 영입버튼 from 'assets/img/영입버튼.png';
import 휴식버튼 from 'assets/img/휴식버튼.png';
import 유물버튼 from 'assets/img/유물버튼.png';

export default function ShopPage() {
  const navigate = useNavigate();

  const [recoveryModal, setRecoveryModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <Container>
      <img src={상점} alt="상점" />
      <Card>
        <CardItem onClick={() => navigate('/main')}>
          <img src={영입} alt="영입" />
          <button>
            <img src={영입버튼} alt="영입버튼" />
          </button>
        </CardItem>
        <CardItem
          onClick={() => {
            setRecoveryModal(!recoveryModal);
            const [url, method] = api('rest');
            const config = { url, method };
            axios(config)
              .then((res) => {
                console.log('상점에서 캐릭터 체력 회복 성공', res.data);
              })
              .catch((err) => {
                console.log('상점에서 캐릭터 체력 회복 에러', err);
              });
          }}
        >
          <img src={휴식} alt="휴식" />
          <button>
            <img src={휴식버튼} alt="휴식버튼" />
          </button>
        </CardItem>
        <CardItem
          onClick={() => {
            setItemModal(!itemModal);
            const [url, method] = api('addItem');
            const config = { url, method };
            axios(config)
              .then((res) => {
                console.log('상점에서 유물 획득 성공', res.data);
              })
              .catch((err) => {
                console.log('상점에서 유물 획득 에러', err);
              });
          }}
        >
          <img src={유물} alt="유물" />
          <button>
            <img src={유물버튼} alt="유물버튼" />
          </button>
        </CardItem>
      </Card>
      {recoveryModal ? (
        <Modal close={() => navigate('/main')} content={<RecoveryModal />} />
      ) : null}
      {itemModal ? (
        <Modal close={() => navigate('/main')} content={<ItemModal />} />
      ) : null}
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
