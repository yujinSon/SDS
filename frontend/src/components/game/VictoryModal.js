import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function VictoryModal({ stageStep }) {
  const navigate = useNavigate();
  return (
    <Container>
      <div>전투에서 승리하였습니다.</div>
      <Button
        value="완료"
        onClick={() => {
          if (stageStep[1] === 2) {
            navigate('/shop');
          } else if (stageStep[1] === 4) {
            console.log(stageStep[0], '현재 스테이지');
            sessionStorage.setItem('stage', stageStep[0]);
            navigate('/data');
          } else {
            navigate('/game/ready');
          }
        }}
      />
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  text-align: center;
`;
