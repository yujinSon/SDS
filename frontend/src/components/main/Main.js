import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import api from 'constants/api';
import axios from 'libs/axios';
import myAxios from 'axios';

import Modal from 'components/common/Modal';
import Button from 'components/common/Button';

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
        console.log(response.data); // 성공적으로 응답받은 데이터를 출력합니다.
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
            <Button
              size="large"
              type="gray"
              onClick={() => {
                startNewGame();
              }}
              value="New Game"
            />
          </ButtonContainer>
          <ButtonContainer>
            <Button
              size="large"
              type="gray"
              onClick={() => {
                navigate('/game/ready');
              }}
              value="Load"
            />
          </ButtonContainer>
        </>
      ) : (
        <>
          {showSingupModal ? (
            <Modal
              close={() => setShowSignupModal(false)}
              content={<SignupModal setShowSignupModal={setShowSignupModal} />}
            />
          ) : null}
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="id">ID :</label>
              <input
                type="id"
                id="id"
                value={id}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password">PW :</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <ButtonContainer>
              <button type="submit" onClick={handleLogin}>
                로그인
              </button>
            </ButtonContainer>
          </form>
          <ButtonContainer>
            <button
              onClick={() => {
                setShowSignupModal(true);
              }}
            >
              회원가입
            </button>
          </ButtonContainer>
        </>
      )}
    </>
  );
}

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  text-align: center;

  button {
    background-color: #e8e8e8;
    color: #333;
    padding: 8px 16px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
`;
