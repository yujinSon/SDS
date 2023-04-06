import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import api from 'constants/api';
import axios from 'libs/axios';
import myAxios from 'axios';

import Modal from 'components/common/Modal';

import SignupModal from './SignupModal';

export default function Main() {
  const navigate = useNavigate();

  // 회원가입, 로그인 시 input 아이디, 비밀번호
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  // 로그인 시 받은 token 값 저장
  const [loginToken, setLoginToken] = useState(null);
  // 로그인 여부 / 테스트용 API 용 state
  const [isLogin, setIsLogin] = useState(false);

  const [showSingupModal, setShowSignupModal] = useState(false);

  // localStorage.setItem('token', token);

  // 세션 스토리지는 브라우저 닫으면 ㅂㅂ / 로컬스토리지는 닫아도 그대로 보존

  const token = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
  });

  // 버튼 클릭 시 새로운 게임 시작 API 요청 로직
  const startNewGame = () => {
    const [url, method] = api('newGame');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log(res, 'newGame API 요청 성공');
        navigate('/game');
      })
      .catch((err) => {});
  };

  // input에 이메일, 비밀번호 입력 시 state 변경 함수
  const handleEmailChange = (event) => {
    setId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 로그인 버튼 클릭 시 API 요청 로직
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      email: id,
      password: password,
    };
    myAxios
      .post('https://j8a303.p.ssafy.io/api/users/login', data)
      .then((response) => {
        // console.log(response.data);
        setLoginToken(response.data.token);
        setIsLogin(true);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        console.error(error); // 요청이 실패한 경우 에러 메시지를 출력합니다.
      });
  };
  return (
    <>
      {isLogin ? (
        <>
          <ButtonContainer>
            <MyButton2
              onClick={() => {
                startNewGame();
              }}
            >
              New Game
            </MyButton2>
          </ButtonContainer>
          <ButtonContainer>
            <MyButton2
              onClick={() => {
                navigate('/game/ready');
              }}
            >
              Load
            </MyButton2>
          </ButtonContainer>
        </>
      ) : (
        <>
          <FormContainer>
            <form onSubmit={handleLogin}>
              <InputContainer>
                <InputLabel>ID </InputLabel>
                <Input
                  type="text"
                  id="id"
                  value={id}
                  onChange={handleEmailChange}
                />
              </InputContainer>
              <InputContainer>
                <InputLabel>PW </InputLabel>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </InputContainer>
              <ButtonContainer>
                <MyButton type="submit" onClick={handleLogin}>
                  로그인
                </MyButton>
              </ButtonContainer>
            </form>
            <ButtonContainer>
              <MyButton onClick={() => setShowSignupModal(true)}>
                회원가입
              </MyButton>
            </ButtonContainer>
          </FormContainer>
          {showSingupModal ? (
            <Modal
              close={() => setShowSignupModal(false)}
              content={<SignupModal setShowSignupModal={setShowSignupModal} />}
            />
          ) : null}
        </>
      )}
    </>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-right: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 7px;
  font-size: 1.5rem;
  width: 100%;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const MyButton = styled.button`
  background: linear-gradient(to right, #ffb347, #ffcc33);
  color: #fff;
  width: 10rem;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #ffcc33, #ffb347);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const MyButton2 = styled.button`
  background: linear-gradient(to right, #ffb347, #ffcc33);
  color: #fff;
  width: 15rem;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #ffcc33, #ffb347);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;
