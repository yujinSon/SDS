import React, { useState, useEffect } from 'react';

import api from 'constants/api';
import axios from 'axios';

export default function SecretAPI() {
  // 회원가입, 로그인 시 input 아이디, 비밀번호
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 로그인 시 받은 token 값 저장
  const [token, setToken] = useState(null);
  // 로그인 여부 / 테스트용 API 용 state
  const [isLogin, setIsLogin] = useState(false);

  const yong = () => {
    axios('https://j8a303.p.ssafy.io/youtube/crawling')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
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

  const testHeaders = () => {
    axios({
      url: 'https://j8a303.p.ssafy.io/api/character/random',
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
  };
  return (
    <div>
      <button onClick={() => yong()}>용찬아 버튼 눌러라</button>;
      <button onClick={() => testHeaders()}>유진님 버튼 누르십쇼</button>;
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
  );
}
