import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';

export default function DataDefeatPage() {
  let stageDefeat = sessionStorage.getItem('stage2');
  console.log('현재 스테이지', stageDefeat);

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
      <button
        onClick={() => {
          navigate('/game');
        }}
      >
        다시하기
      </button>
      {words ? (
        <ReactWordcloud words={words[stageDefeat]} options={options} />
      ) : null}
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
