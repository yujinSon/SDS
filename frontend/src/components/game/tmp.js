import React from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/item1.png';

export default function Relic() {
  const images = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  

  const chunks = [];
  for (let i = 0; i < images.length; i += 3) {
    chunks.push(images.slice(i, i + 3));
  }

  return (
    <Container>
      {chunks.map((chunk, index) => (
        <Row key={index}>
          {chunk.map((number) => {
            const imageUrl = `https://example.com/images/${number}.jpg`;
            return (
              <ImageWrapper key={number}>
                <Image src={imageUrl} alt={`Image ${number}`} />
              </ImageWrapper>
            );
          })}
        </Row>
      ))}
    </Container>
  );

}

const Container = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
`;

const Row = styled.div`
  background-color: blue;
  display: flex;
  flex-direction: row; /* 행 방향으로 정렬 */
  justify-content: center;
`;

const ImageWrapper = styled.div`
  background-color: red;
  margin: 0.5rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;