import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import CharacterDetailStat from 'components/game/CharacterDetailStat';

import Relic from 'components/game/Relic';
import Button from 'components/common/Button';

export default function ItemPage() {
  const navigate = useNavigate();

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedChList, setSelectedChList] = useState(null);

  const [isChanged, setIsChanged] = useState(false);

  // 획득한 유물 id 배열
  const [relicIds, setRelicIds] = useState(null);

  // 선택된 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getSelectedCh');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('선택된 캐릭터 조회', res.data);
        while (res.data.length < 3) {
          res.data.push({ className: null });
        }

        setSelectedChList(res.data);
      })
      .catch((err) => {});
  }, [isChanged]);

  // 현재 보유 유물 리스트 조회
  useEffect(() => {
    const [url, method] = api('getRelic');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log(res.data, '현재 보유 유물 리스트 조회');
        setRelicIds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {}, [selectedChList]);

  // const getSelectedChList = () => {
  //   const [url, method] = api('getSelectedCh');
  //   const config = { url, method };
  //   axios(config)
  //     .then((res) => {
  //       console.log('선택된 캐릭터 조회(이건 함수임)', res.data);
  //       setSelectedChList(res.data);
  //     })
  //     .catch((err) => {});
  // };

  return (
    <>
      <h1>유물 프레임 만드려고 대충 만든 페이지</h1>
      <MainContainer>
        <SubContainerLeft>
          <SelectedCharacterList
            data={selectedChList}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          {selectedChList ? (
            <CharacterDetailStat
              data={selectedChList[selectedCharacter]}
              isChanged={isChanged}
              setIsChanged={setIsChanged}
              selectedCharacter={selectedCharacter}
            />
          ) : null}
        </SubContainerLeft>
        <SubContainerRight>
          <Relic relicIds={relicIds} />
          <StartButton
            onClick={() => {
              navigate('/battle');
            }}
          >
            전투하기
          </StartButton>
        </SubContainerRight>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;

  width: 90%;
  height: 90%;
  flex-direction: row;
  justify-content: space-around;
`;

const SubContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
`;

const SubContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const StartButton = styled.button`
  background-color: rgba(140, 140, 140, 0.8);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
  width: 20vw;
`;
