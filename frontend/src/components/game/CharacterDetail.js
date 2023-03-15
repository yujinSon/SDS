import React from 'react';
import styled from 'styled-components';

export default function CharacterDetail({ data }) {
  return (
    <Container>
      <div>name: {data.name}</div>
      <div>level: {data.level}</div>
      <div>maxHP: {data.maxHP}</div>
      <div>hp: {data.hp}</div>
      <div>ad: {data.ad}</div>
      <div>ap: {data.ap}</div>
      <div>speed: {data.speed}</div>
      <div>critical: {data.critical}</div>
      <div>avoid: {data.avoid}</div>
      <div>pos: {data.pos}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
`;
