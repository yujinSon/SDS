import React, { useState } from 'react';
import styled from 'styled-components';

import Kakao from 'components/auth/Kakao';
import Ranking from 'components/main/Ranking';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

export default function Main() {
  const [userInfo, setUserInfo] = useState(true);

  const [rankingModal, setRankingModal] = useState(false);

  const onClickModal = () => {
    setRankingModal(!rankingModal);
  };

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
            <Button size="large" type="gray" value="Start" />
          </ButtonContainer>
          <ButtonContainer>
            <Button size="large" type="gray" value="Load" />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={onClickModal}
              value="Ranking"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button size="large" type="gray" value="Tutorial" />
          </ButtonContainer>
          {rankingModal ? (
            <Modal
              close={() => setRankingModal(false)}
              content={<Ranking />}
            ></Modal>
          ) : null}
        </div>
      ) : (
        <Kakao onSuccess={handleSuccess} onFailure={handleFailure} />
      )}
    </div>
  );
}

const ButtonContainer = styled.div`
  margin-bottom: 10px;
`;
