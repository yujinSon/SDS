import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import ReactWordcloud from 'react-wordcloud';

// import words from 'constants/bigdata';

export default function DataPage() {
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
      <button>다음 스테이지로</button>
      {words ? <ReactWordcloud words={words.환경} options={options} /> : null}
      {words ? <ReactWordcloud words={words.안보} options={options} /> : null}
      {words ? <ReactWordcloud words={words.질병} options={options} /> : null}
      {words ? <ReactWordcloud words={words.사회} options={options} /> : null}
      {words ? <ReactWordcloud words={words.범죄} options={options} /> : null}
      {words ? <ReactWordcloud words={words.인구} options={options} /> : null}
      {words ? <ReactWordcloud words={words.경제} options={options} /> : null}
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;
