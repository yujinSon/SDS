import React from 'react';
import Button from 'components/common/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function DefeatModal({ stageStep }) {
  const navigate = useNavigate();
  return (
    <Container>
      <div>전투에서 패배하였습니다.</div>
      <Button
        value="완료"
        onClick={() => {
          navigate('/ending');
        }}
      />
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  text-align: center;
`;
