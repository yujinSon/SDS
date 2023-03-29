import React from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/item1.png';

export default function Relic() {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const imagesList = [];
  for (let i = 0; i < images.length; i += 6) {
    const row = images.slice(i, i + 6).map((url) => {
      return (
        <ImageWrapper key={url}>
          <Image src={IMG} alt="image" />
        </ImageWrapper>
      );
    });
    imagesList.push(<Row key={i}>{row}</Row>);
  }

  return (
    <Container>
      <ImageContainer>{imagesList}</ImageContainer>
      <TextContainer>
        <h1>KF94 마스크</h1>
        <Img src={IMG} />
        <div>마스크를 착용하면 hp가 50만큼 증가한다.</div>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TextContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1rem;
`;
const Row = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  margin: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
