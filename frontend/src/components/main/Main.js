import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import api from 'constants/api';
import axios from 'axios';
import myAxios from 'libs/axios';

import Ranking from 'components/main/Ranking';
import Tutorial from 'components/main/Tutorial';

import Button from 'components/common/Button';
import Modal from 'components/common/Modal';

import kakao from 'assets/img/kakao.png';

export default function Main() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

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

const Img = styled.img`
  width: 15rem;
  height: 4rem;
`;
