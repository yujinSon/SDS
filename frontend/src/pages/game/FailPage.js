import React, {useState} from 'react';
import clear from "../../assets/img/Clear.png";
import Modal from 'components/common/Modal';
import Ranking from 'components/main/Ranking';
import Button from "../../components/common/Button";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import "./FailPage.css";

export default function FailPage() {
  const navigate = useNavigate();
  const [rankingModal, setRankingModal] = useState(false);

  const onClickRankingModal = () => {
    setRankingModal(!rankingModal);
  };

  return (
      <div className="container">
        <h3 > FAIL</h3>
        <h2>Score : 5000점</h2>
        <ButtonContainer>
          <Button
              size="large"
              type="gray"
              onClick={onClickRankingModal}
              value="랭킹 보기"
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/');
              }}
              value="새 게임"
          />
        </ButtonContainer>
        {rankingModal ? (
            <Modal
                close={() => setRankingModal(false)}
                content={<Ranking />}
            ></Modal>
        ) : null}

      </div>
  );
}
const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;