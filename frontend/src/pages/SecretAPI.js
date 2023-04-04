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

  const kakao = () => {
    window.location.href =
      'https://j8a303.p.ssafy.io/oauth2/authorization/kakao';
    // axios('https://j8a303.p.ssafy.io/oauth2/authorization/kakao')
    //   .then((res) => console.log(res.data))
    //   .catch((err) => {
    //     console.log(err.config.url, '카카오 에러');
    //     window.location.href = err.config.url;

    //   });
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
      .post('https://j8a303.p.ssafy.io/api/users/join', data, {
        headers: { 'Content-Type': 'application/json' },
      })
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
      .post('https://j8a303.p.ssafy.io/api/users/login', data)
      .then((response) => {
        console.log(response.data); // 성공적으로 응답받은 데이터를 출력합니다.
        setToken(response.data.token);
        setIsLogin(true);
        sessionStorage.setItem('token', response.data.token);
        // const tokenHyunJeong = localStorage.getItem('token');
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

  const testHeaders2 = () => {
    axios({
      // url: 'http://70.12.246.58:8080/api/character/save',
      url: 'https://j8a303.p.ssafy.io/api/character/save',
      method: 'post',
      data: {
        className: '안보',
        subClassName: '안보전문가 용찬',
        level: 3,
        skills: [
          {
            coolTime: 0,
            factor: 'ad',
            range: false,
            skillId: 7,
            skillName: '일반 공격',
            skillNum: 0,
            skillTarget: 0,
            skillType: 0,
            stat: 'hp',
            value: 100,
          },
          {
            coolTime: 6,
            factor: 'ad',
            range: false,
            skillId: 8,
            skillName: '안보의식 향상',
            skillNum: 1,
            skillTarget: 1,
            skillType: 2,
            stat: 'ad',
            value: 100,
          },
          {
            coolTime: 3,
            factor: 'ad',
            range: false,
            skillId: 9,
            skillName: '정보 보호 강화',
            skillNum: 2,
            skillTarget: 0,
            skillType: 0,
            stat: 'hp',
            value: 200,
          },
        ],
        hp: 100,
        maxHp: 100,
        ad: 70,
        ap: 5,
        speed: 5,
        critical: 0,
        avoid: 5,
        pos: -1,
      },
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    })
      .then((response) => {
        console.log(response.data, '유진님 post 요청 응답 성공입니다.'); // 성공적으로 응답받은 데이터를 출력합니다.
      })
      .catch((error) => {
        console.error(error, '이건 headers 에러'); // 요청이 실패한 경우 에러 메시지를 출력합니다.
      });
  };

  const testHeaders3 = () => {
    axios({
      url: 'https://j8a303.p.ssafy.io/api/character/selected',
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
      <button onClick={() => kakao()}>용찬아 카카오 로그인이다 눌러라</button>;
      <button onClick={() => yong()}>용찬아 버튼 눌러라</button>;
      <button onClick={() => testHeaders()}>유진님 버튼 누르십쇼</button>;
      <button onClick={() => testHeaders3()}>유진님 3번째 버튼</button>;
      <button onClick={() => testHeaders2()}>
        유진님 새로운 API 요청 버튼입니다악
      </button>
      ;
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
