import React, {useState} from 'react';
import "./StageClearPage.css";
import clear from "../../assets/img/Clear.png";
import Button from "../../components/common/Button";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function StageClearPage() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    HP: 20,
    AD: 20,
    AP: 20,
  SPEED:20,
  CRIT:20,
  AVOID:20
  })
  return (
      <div>
        <div className="header">
          <img src = {clear} className="clear"/>
          <IconContainer>
            <div>{userInfo.HP}<br/>
              {userInfo.AD}<br/>
              {userInfo.AP}<br/>
              {userInfo.SPEED}<br/>
              {userInfo.CRIT}<br/>
              {userInfo.AVOID}<br/>

            </div>
            <div></div>
            <div></div>
          </IconContainer>
        </div>

        <ButtonContainer>
          <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/');
              }}
              value="다음 단계로"
          />
        </ButtonContainer>

      </div>
  );
}
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  
  div {
    width: 300px;
    height: 500px;
    background-color: gray;
    border-radius: 10%;
    
  }
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 350px;
`;