import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import stagePK from 'constants/stagePK';
import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';

// import words from 'constants/bigdata';

export default function DataPage() {
  let stage = sessionStorage.getItem('stage');
  console.log('현재 스테이지', stage);

  const navigate = useNavigate();
  const [words, setWords] = useState(null);

  useEffect(() => {
    axios('https://j8a303.p.ssafy.io/youtube/wordcloud')
      .then((res) => {
        console.log(res.data);
        setWords(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [30, 100],
    fontStyle: 'normal',
    fontWeight: 'bold',
    padding: 3,
    rotations: 3,
    rotationAngles: [0, 80],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 2000,
  };

  return (
    <Div>
      <MyButton
        onClick={() => {
          navigate('/game/ready');
        }}
      >
        다음 스테이지로
      </MyButton>
      <Issue>{stagePK[stage]} 이슈에 대한 사람들의 의견</Issue>
      {words ? <MyWordCloud words={words[stage]} options={options} /> : null}
    </Div>
  );
}

const MyWordCloud = styled(ReactWordcloud)`
  position: relative;
  top: -5rem;
`;

const Issue = styled.span`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
`;

const MyButton = styled.span`
  font-size: 1.3rem;
  padding: 0.6rem 1.5rem;
  margin: 1rem 0rem;
  border-radius: 5px;
  background-color: skyblue;
  color: white;
  border: 2px solid white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  font-family: sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #0e63a8;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }
`;
const Div = styled.div`
  background-color: black;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;
