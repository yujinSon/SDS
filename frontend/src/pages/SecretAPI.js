import React from 'react';
import axios from 'axios';

export default function SecretAPI() {
  const yong = () => {
    axios('https://j8a303.p.ssafy.io/youtube/crawling')
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return <button onClick={() => yong()}>용찬아 버튼 눌러라</button>;
}
