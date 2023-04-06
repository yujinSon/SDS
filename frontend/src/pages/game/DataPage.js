import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';

// import words from 'constants/bigdata';

export default function DataPage() {
  const navigate = useNavigate();
  const [words, setWords] = useState(null);
  const [didWin, setDidWin] = useState(true);

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
    fontWeight: 'normal',
    padding: 3,
    rotations: 3,
    rotationAngles: [0, 80],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 2000,
  };

  return (
    <Div>
      {didWin ? (
        <button
          onClick={() => {
            navigate('/game/ready');
          }}
        >
          다음 스테이지로
        </button>
      ) : (
        <button
          onClick={() => {
            navigate('/game');
          }}
        >
          다시하기
        </button>
      )}
      {words ? <ReactWordcloud words={words.환경} options={options} /> : null}
      {/* {words ? <ReactWordcloud words={words.안보} options={options} /> : null}
      {words ? <ReactWordcloud words={words.질병} options={options} /> : null}
      {words ? <ReactWordcloud words={words.사회} options={options} /> : null}
      {words ? <ReactWordcloud words={words.범죄} options={options} /> : null}
      {words ? <ReactWordcloud words={words.인구} options={options} /> : null}
      {words ? <ReactWordcloud words={words.경제} options={options} /> : null} */}
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin: 1rem;
    border-radius: 5px;
    background-color: #1f77b4;
    color: white;
    border: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    font-family: sans-serif;
    font-weight: bold;

    &:hover {
      background-color: #0e63a8;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }
`;
