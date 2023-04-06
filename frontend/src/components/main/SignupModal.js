import React, { useState } from 'react';
import styled from 'styled-components';

import api from 'constants/api';
import axios from 'axios';

export default function SignupModal({ setShowSignupModal }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  // input에 이메일, 비밀번호 입력 시 state 변경 함수

  const handleEmailChange = (event) => {
    setId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 회원가입 버튼 클릭 시 API 요청 로직
  const handleSubmit = (event) => {
    // event.preventDefault();

    const data = {
      email: id,
      password: password,
    };

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
  return (
    <>
      <FormContainer>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="id">ID : </Label>
            <Input type="id" id="id" value={id} onChange={handleEmailChange} />
          </div>
          <div>
            <Label htmlFor="password">PW : </Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <SubmitButton
            type="submit"
            onClick={() => {
              handleSubmit();
              setShowSignupModal(false);
            }}
          >
            회원가입
          </SubmitButton>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
`;
const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: none;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: auto; // 오른쪽 정렬 추가

  &:hover {
    background-color: #3e8e41;
  }
`;
