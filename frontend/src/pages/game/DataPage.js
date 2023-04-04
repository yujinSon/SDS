import React from 'react';
import styled from 'styled-components';

import ReactWordcloud from 'react-wordcloud';

import words from 'constants/bigdata';

export default function DataPage() {
  const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [5, 60],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 80],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 2000,
  };

  return (
    <Div>
      <ReactWordcloud words={words} options={options} />
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;
