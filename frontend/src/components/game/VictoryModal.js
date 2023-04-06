import React, {useContext} from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AuthContext from 'components/main/ShopAuthContext';

export default function VictoryModal({ stageStep }) {
  const navigate = useNavigate();
  const { isAuthorized, setIsAuthorized } = useContext(AuthContext);

  return (
    <Container>
      <TextDiv>전투에서 승리하였습니다.</TextDiv>

      <ButtonContainer onClick={() => {
          if (stageStep[1] === 2) {
            setIsAuthorized(true)
            navigate('/shop');
          } else if (stageStep[1] === 4) {
            console.log(stageStep[0], '현재 스테이지');
            sessionStorage.setItem('stage', stageStep[0]);
            navigate('/data');
          } else {
            navigate('/game/ready');
          }
        }}>
        <SelectedButton>확인</SelectedButton>
      </ButtonContainer>


    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  background-color: rgba(53, 53, 53, 0.9);
  text-align: center;
  border-radius: 20px;
  padding-top: 2rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

`;

const TextDiv = styled.div`
  font-size: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SelectedButton = styled.button`
  background-color: rgba(140, 140, 140, 0.8);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
`;

