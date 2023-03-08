import React from 'react';
import KakaoLogin from 'react-kakao-login';

const Kakao = ({ onSuccess, onFailure }) => {
  const handleSuccess = (response) => {
    onSuccess(response);
  };

  const handleFailure = (error) => {
    onFailure(error);
  };

  const TOKEN = '935eb856ebe803b3bec993a57651644c';
  return (
    <KakaoLogin
      token={TOKEN}
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      useLoginForm={true}
      render={(props) => (
        <button onClick={props.onClick}>카카오로 로그인</button>
      )}
    />
  );
};

export default Kakao;
