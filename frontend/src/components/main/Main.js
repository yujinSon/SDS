import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import api from 'constants/api';

import Ranking from 'components/main/Ranking';
import Tutorial from 'components/main/Tutorial';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import kakao from 'assets/img/kakao.png';

export default function Main() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(true);

  // Modal state
  const [rankingModal, setRankingModal] = useState(false);
  const [tutorialModal, setTutorialModal] = useState(false);

  // Modal 보여주기 함수
  const onClickRankingModal = () => {
    setRankingModal(!rankingModal);
  };
  const onClickTutorialModal = () => {
    setTutorialModal(!tutorialModal);
  };

  // 카카오 로그인
  const kakaoLogin = () => {
    axios('https://j8a303.p.ssafy.io/oauth2/authorization/kakao')
      .then((res) => {
        console.log('카카오 로그인 성공', res.data);
      })
      .catch((err) => {});
  };

  return (
    <div>
      {userInfo ? (
        <div>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/main');
              }}
              value="Start"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/main');
              }}
              value="Load"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={onClickRankingModal}
              value="Ranking"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={onClickTutorialModal}
              value="Tutorial"
            />
          </ButtonContainer>

          {rankingModal ? (
            <Modal
              close={() => setRankingModal(false)}
              content={<Ranking />}
            ></Modal>
          ) : null}

          {tutorialModal ? (
            <Modal
              close={() => setTutorialModal(false)}
              content={<Tutorial />}
            ></Modal>
          ) : null}
        </div>
      ) : (
        <>
          <ButtonContainer>
            <img src={kakao} alt="카카오 로그인" onClick={kakaoLogin} />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={onClickRankingModal}
              value="Ranking"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={onClickTutorialModal}
              value="Tutorial"
            />
          </ButtonContainer>

          {rankingModal ? (
            <Modal
              close={() => setRankingModal(false)}
              content={<Ranking />}
            ></Modal>
          ) : null}

          {tutorialModal ? (
            <Modal
              close={() => setTutorialModal(false)}
              content={<Tutorial />}
            ></Modal>
          ) : null}
        </>
      )}
    </div>
  );
}

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;
