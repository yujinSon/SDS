import React, { useState } from 'react';
import Kakao from 'components/auth/Kakao';

export default function Main() {
  const [userInfo, setUserInfo] = useState(null);

  const handleSuccess = (response) => {
    setUserInfo(response.profile);
  };

  const handleFailure = (error) => {
    console.error(error);
  };
  return (
    <div>
      {userInfo ? (
        <div>
          <img src={userInfo.profile_image_url} alt="profile" />
          <p>{userInfo.nickname}</p>
        </div>
      ) : (
        <Kakao onSuccess={handleSuccess} onFailure={handleFailure} />
      )}
    </div>
  );
}
