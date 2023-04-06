import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AuthContext from 'components/main/ShopAuthContext';

import axios from 'libs/axios';
import api from 'constants/api';

import Modal from 'components/common/Modal';
import ItemModal from 'components/game/ItemModal';
import RecoveryModal from 'components/game/RecoveryModal';

// 상점 페이지에 쓰일 이미지 import
import 영입 from 'assets/img/영입.png';
import 휴식 from 'assets/img/휴식.png';
import 유물 from 'assets/img/유물.png';
import 상점 from 'assets/img/상 점.png';
import 영입버튼 from 'assets/img/영입버튼.png';
import 휴식버튼 from 'assets/img/휴식버튼.png';
import 유물버튼 from 'assets/img/유물버튼.png';

export default function ShopPage() {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);
  useEffect(() => {
    if (!isAuthorized) {
      alert("어허!")
      navigate("/game/ready");
    }
  }, [navigate]);

  // 회복, 유물 Modal 관련 state
  const [recoveryModal, setRecoveryModal] = useState(false);
  const [itemModal, setItemModal] = useState(false);

  // 획득한 유물 id
  const [relicId, setRelicId] = useState(null);

  // 세션 스토리지 로직
  const token = sessionStorage.getItem('token');
  const chCnt = parseInt(sessionStorage.getItem('chCnt'));
  console.log(chCnt, '살아있는 캐릭터 수');
  // console.log(token, '토큰');
  return (
    <Container>
      <img src={상점} alt="상점" />

      <Card>
        <CardItem
          onClick={() => {
            console.log(chCnt);
            if (chCnt === 3) {
              alert('캐릭터가 3명인 경우에는 더 이상 영입할 수 없습니다.');
            } else {
              setIsAuthorized(false)              
              navigate('/game');
            }
          }}
        >
          <img src={영입} alt="영입" />
          <button>
            <img src={영입버튼} alt="영입버튼" />
          </button>
        </CardItem>
        <CardItem
          onClick={() => {
            setIsAuthorized(false)            
            setRecoveryModal(!recoveryModal);

            const [url, method] = api('rest');
            const config = {
              url,
              method,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            };
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
            setIsAuthorized(false)            
            setItemModal(!itemModal);
            // 유물 획득 API 요청
            const [url, method] = api('addItem');
            const config = {
              url,
              method,
              headers: {
                Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
              },
            };
            axios(config)
              .then((res) => {
                setRelicId(res.data.id);
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
      <ModalContainer>
        {recoveryModal ? (
          <Modal
            close={() => navigate('/game/ready')}
            content={<RecoveryModal />}
          />
        ) : null}
        {itemModal ? (
          <Modal
            close={() => navigate('/game/ready')}
            content={<ItemModal relicId={relicId} />}
          />
        ) : null}
      </ModalContainer>
    </Container>
  );
}
const ModalContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${({ theme }) => `${theme.mainBgImg}`});
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
