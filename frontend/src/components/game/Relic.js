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
        <DetailText>여기에 설명 들어감</DetailText>
      </ArtifactDetail>
    </OutFrame>
  );

}
const OutFrame = styled.div`
background-color: rgba(189, 189, 189, 0.7);
  display: flex;
  border-radius: 8px;
  padding: 1rem;

`;

const Container = styled.div`
background-color: rgba(116, 116, 116, 0.8);
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
margin: 0.1rem;
`;

const Image = styled.img`
  width: 6vw;
  height: 7vh;
`;

const DetailImgContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin-top : 2rem;
margin-bottom: 1rem;
`;

const ArtifactDetail = styled.div`
background-color: rgba(116, 116, 116, 0.8);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border-radius: 10px;
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
  margin-bottom: 3rem;
`;

