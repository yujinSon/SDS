import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/item1.png';

import relic from 'constants/relic';
import RelicImg from 'assets/img/손민혁.png';

export default function Relic({ relicIds }) {
  const [isTheLast, setIsTheLast] = useState(false);
  const [chunks, setChunks] = useState([]);
  const [images, setImages] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  // 현재 선택된 유물 이미지 인덱스
  const [nowIdx, setNowIdx] = useState(0);

  useEffect(() => {
    if (!relicIds) return;

    let copy = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    for (let idx = 0; idx < relicIds.length; idx++) {
      // console.log(relicIds[idx]);
      copy[relicIds[idx] - 1] = relic[relicIds[idx]];
    }

    setImages(copy);
  }, [relicIds]);

  useEffect(() => {
    if (!relicIds) return;

    let copy = [];

    for (let i = 0; i < images.length; i += 3) {
      copy.push(images.slice(i, i + 3));
    }

    console.log(copy);
    setChunks(copy);
  }, [images, isTheLast]);

  const changeIdx = (idx) => {
    setNowIdx(idx);
    console.log(nowIdx);
  };

  return (
    <OutFrame>
      <Container>
        {chunks.map((chunk, idx) => (
          <Row key={idx}>
            {chunk.map((number, idx2) => {
              // console.log(number);
              const imageUrl = `https://example.com/images/${number}.jpg`;
              return (
                <div key={idx2} onClick={() => changeIdx(3 * idx + idx2)}>
                  {number === 0 ? (
                    <ImageWrapper>
                      <Image src={IMG} />
                    </ImageWrapper>
                  ) : (
                    <ImageWrapper>
                      <Image src={number.relicImg} />
                    </ImageWrapper>
                  )}
                </div>
              );
            })}
          </Row>
        ))}
      </Container>
      <ArtifactDetail>
        <DetailImgContainer>
          {images && images[nowIdx] !== 0 ? (
            <DetailImg src={images[nowIdx].relicImg} />
          ) : (
            <DetailImg src={IMG} />
          )}
        </DetailImgContainer>
        <DetailText>{images[nowIdx].relicDetail}</DetailText>
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
  margin-top: 2rem;
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
