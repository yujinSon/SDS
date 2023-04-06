import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import IMG from 'assets/img/item1.png';

import relic from 'constants/relicPK';
import relicPK from 'constants/relicPK';

export default function Relic({ relicIds }) {
  // 초기 유물 리스트 (값이 0이면 획득하지 못한 유물로, 자물쇠 이미지를 띄울 것임)
  const [relicInfo, setRelicInfo] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  // 실제 화면에 띄울 유물 리스트
  const [relicList, setrelicList] = useState([]);
  // 현재 선택된 유물 이미지 인덱스
  const [nowIdx, setNowIdx] = useState(0);

  useEffect(() => {
    if (!relicIds) return;
    let copy = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    // 획득한 유물 id들을 담은 relicIds를 순회해서 id에 해당하는 유물에 대한 정보(객체)를 copyIdx에 담아줌
    // 유물 id는 1부터 시작하므로 copy[idx - 1]에 값을 저장해줌
    for (let idx = 0; idx < relicIds.length; idx++) {
      copy[relicIds[idx] - 1] = relic[relicIds[idx]];
    }
    setRelicInfo(copy);
  }, [relicIds]);

  useEffect(() => {
    if (!relicIds) return;

    // 3*8 배치를 위해 for문 돌려서 새로운 배열에 넣어줌 [[], [], [], ...] 형태
    let copy = [];
    for (let i = 0; i < relicInfo.length; i += 3) {
      copy.push(relicInfo.slice(i, i + 3));
    }
    setrelicList(copy);
  }, [relicInfo]);

  // 유물 클릭 시 idx를 변경해줌으로써 유물 상세정보를 알 수 있게 해줌
  const changeIdx = (idx) => {
    setNowIdx(idx);
    console.log(nowIdx);
  };

  return (
    <OutFrame>
      <Container>
        {relicList.map((relics, idx) => (
          <Row key={idx}>
            {relics.map((relic, idx2) => {
              return (
                <div key={idx2} onClick={() => changeIdx(3 * idx + idx2)}>
                  {relic === 0 ? (
                    <ImageWrapper>
                      <Image
                        src={relicPK[0].relicImg}
                        selected={nowIdx === 3 * idx + idx2}
                      />
                      {/* <ImageDiv url={IMG} /> */}
                    </ImageWrapper>
                  ) : (
                    <ImageWrapper>
                      <Image
                        src={relic.relicImg}
                        selected={nowIdx === 3 * idx + idx2}
                      />
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
          {relicInfo && relicInfo[nowIdx] !== 0 ? (
            <>
              <DetailImg src={relicPK[nowIdx + 1].relicImg} />
              <RelicName>{relicPK[nowIdx + 1].relicName}</RelicName>
              <DetailText>{relicPK[nowIdx + 1].relicDetail}</DetailText>
              <DetailText>효과: {relicPK[nowIdx + 1].relicEffect}</DetailText>
            </>
          ) : (
            <>
              <DetailImg src={relicPK[0].relicImg} />
              <RelicName>{relicPK[0].relicName}</RelicName>
              <DetailText>{relicPK[0].relicDetail}</DetailText>
              <DetailText>{relicPK[0].relicEffect}</DetailText>
            </>
          )}
        </DetailImgContainer>
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
  margin: 0.2rem;
`;

const Image = styled.img`
  width: 5.5vw;
  height: 9vh;

  ${(props) =>
    props.selected &&
    `
    border: 3px solid;
    width: 5.19vw;
    height: 8.4vh;
  `}
`;

const ImageDiv = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  background-size: contain;
`;

const DetailImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
  margin-bottom: 1.5rem;
`;

const RelicName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  width: 80%;
  height: 50%;
  margin-bottom: 2rem;
`;

const DetailText = styled.div`
  font-size: 1.4rem;
  width: 80%;
  height: 50%;
  margin-bottom: 2rem;
`;
