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
    <OutFrame>
      <Container>
      {chunks.map((chunk, index) => (
        <Row key={index}>
          {chunk.map((number) => {
            const imageUrl = `https://example.com/images/${number}.jpg`;
            return (
              <ImageWrapper key={number}>
                <Image src={IMG} alt={`Image ${number}`} />
              </ImageWrapper>
            );
          })}
        </Row>
      ))}
      </Container>
      <ArtifactDetail>
        <DetailImgContainer>
          <DetailImg src={IMG} />
        </DetailImgContainer>
        <DetailText>1</DetailText>
      </ArtifactDetail>
    </OutFrame>
  );

}
const OutFrame = styled.div`
background-color: orange;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;

`;

const Container = styled.div`
background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  
`;

const ImageWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: red;
margin: 0.1rem;
`;

const Image = styled.img`
  width: 50px;
  height: 50px
`;

const DetailImgContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top : 1rem;
margin-bottom: 1rem;
`;

const ArtifactDetail = styled.div`
display: flex;
flex-direction: column;
background-color: yellow;
width: 100%;
margin-left: 0.5rem;
`;

const DetailImg = styled.img`
  width: 50%;
  height: 100%;
`;

const DetailText = styled.div`
background-color: green;
  width: 80%;
  height: 50%;
`;
