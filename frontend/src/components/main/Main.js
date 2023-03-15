import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Kakao from 'components/auth/Kakao';
import Ranking from 'components/main/Ranking';
import Tutorial from 'components/main/Tutorial';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

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

  // OAuth 관련 함수
  const handleSuccess = (response) => {
    setUserInfo(response.profile);
  };

  const handleFailure = (error) => {
    console.error(error);
  };
  return (
    <div>
      {userInfo ? (
        <div>
          {/* <img src={userInfo.profile_image_url} alt="profile" />
          <p>{userInfo.nickname}</p> */}
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/game/start');
              }}
              value="Start"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/game/start');
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
          <Kakao onSuccess={handleSuccess} onFailure={handleFailure} />
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
`;
