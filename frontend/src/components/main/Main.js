import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import api from 'constants/api';
import axios from 'axios';
import myAxios from 'libs/axios';

import Button from 'components/common/Button';

export default function Main() {
  const navigate = useNavigate();

  // 회원가입, 로그인 시 input 아이디, 비밀번호
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 로그인 시 받은 token 값 저장
  const [token, setToken] = useState(null);
  // 로그인 여부 / 테스트용 API 용 state
  const [isLogin, setIsLogin] = useState(false);

  // 테스트용 API
  useEffect(() => {
    if (!isLogin) return;
    console.log(token);
    axios({
      url: 'http://70.12.246.58:8080/api/character/random',
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    })
      .then((response) => {
        console.log(response.data); // 성공적으로 응답받은 데이터를 출력합니다.
      })
      .catch((error) => {
        console.error(error, '이건 headers 에러'); // 요청이 실패한 경우 에러 메시지를 출력합니다.
      });
  }, [isLogin]);

  // 버튼 클릭 시 새로운 게임 시작 API 요청 로직
  const startNewGame = () => {
    const [url, method] = api('newGame');
    const config = { url, method };
    myAxios(config)
      .then((res) => {
        console.log(res, 'newGame API 요청 성공');
        navigate('/game');
      })
      .catch((err) => {});
  };

  // input에 이메일, 비밀번호 입력 시 state 변경 함수
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 회원가입 버튼 클릭 시 API 요청 로직
  const handleSubmit = (event) => {
    event.preventDefault();
    const [url, method] = api('signup');
    const data = {
      email: email,
      password: password,
    };
    const config = { url, method, data };

    axios
      .post('http://70.12.246.58:8080/api/users/join', data)
      .then((response) => {
        console.log(response.data); // 성공적으로 응답받은 데이터를 출력합니다.
      })
      .catch((error) => {
        console.error(error); // 요청이 실패한 경우 에러 메시지를 출력합니다.
      });
  };

  // 로그인 버튼 클릭 시 API 요청 로직
  const handleLogin = (event) => {
    event.preventDefault();
    const [url, method] = api('login');
    const data = {
      email: email,
      password: password,
    };
    const config = { url, method, data };

    axios
      .post('http://70.12.246.58:8080/api/users/login', data)
      .then((response) => {
        console.log(response.data); // 성공적으로 응답받은 데이터를 출력합니다.
        setToken(response.data.token);
        setIsLogin(true);
      })
      .catch((error) => {
        console.error(error); // 요청이 실패한 경우 에러 메시지를 출력합니다.
      });
  };

  //   myAxios(config)
  //     .then((res) => {
  //       console.log(res.data);
  //       // 회원가입이 성공했을 경우 처리할 코드를 작성합니다.
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       // 회원가입이 실패했을 경우 처리할 코드를 작성합니다.
  //     });
  // };

  return (
    <div>
      <div>
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            회원가입
          </button>
        </form>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" onClick={handleLogin}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

const ButtonContainer = styled.div`
  margin-bottom: 10px;
  text-align: center;
`;
