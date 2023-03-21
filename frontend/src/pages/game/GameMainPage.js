import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import RandomCharacterList from 'components/game/RandomCharacterList';
import CharacterDetail from 'components/game/CharacterDetail';
import GameButtons from 'components/game/GameButtons';

export default function GameMainPage() {
  const navigate = useNavigate();

  const [randomChList, setRandomChList] = useState(null);
  const [selectedRandomCh, setSelectedRandomCh] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedChList, setSelectedChList] = useState(null);

  // 선택된 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getSelectedCh');
    const config = { url, method };
    axios(config)
      .then((res) => {
        setSelectedChList(res.data);
      })
      .catch((err) => {});
  }, []);

  // 랜덤 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getRandomCh');
    const config = { url, method };
    axios(config)
      .then((res) => {
        setRandomChList(res.data);
      })
      .catch((err) => {});
  }, [selectedChList]);

  const addCharacter = () => {
    // 아직 영입한 캐릭터가 없으면 새로운 배열을 만들어 추가
    if (selectedChList === null) {
      setSelectedChList([randomChList[selectedRandomCh]]);
      return;
      // 이미 영입한 캐릭터가 있으면 배열 복사해서 state 업데이트
    } else if (selectedChList.length <= 2) {
      const copy = [...selectedChList, randomChList[selectedRandomCh]];
      setSelectedChList(copy);
      return;
    }
    alert('캐릭터는 3명까지만 선택 가능합니다.');
    return;
  };

  // 버튼 눌러서 캐릭터 저장하기 axios 요청
  const saveCh = () => {
    const data = randomChList[selectedRandomCh];
    const [url, method] = api('saveCh');
    const config = { url, method, data };
    // 아직 영입한 캐릭터가 없으면 새로운 배열을 만들어 추가
    if (selectedChList === null) {
      axios(config)
        .then((res) => {
          const copy = [...selectedChList, randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          return;
        })
        .catch((err) => {});
      // 영입한 캐릭터가 2명 이하일 때
    } else if (selectedChList.length <= 2) {
      axios(config)
        .then((res) => {
          const copy = [...selectedChList, randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          return;
        })
        .catch((err) => {});
    }
    alert('캐릭터는 3명까지만 선택 가능합니다.');
    return;
  };
  return (
    <>
      <h1>GameMainPage</h1>
      <MainContainer>
        <SubContainer>
          <SelectedCharacterList
            data={selectedChList}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          {selectedChList ? (
            <CharacterDetail
              data={selectedChList}
              selectedCharacter={selectedCharacter}
            />
          ) : null}
        </SubContainer>
        <SubContainer>
          <RandomCharacterList
            data={randomChList}
            selectedRandomCh={selectedRandomCh}
            setSelectedRandomCh={setSelectedRandomCh}
            addCharacter={addCharacter}
            saveCh={saveCh}
          />
          <GameButtons saveCh={saveCh} />
        </SubContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 80%;
  height: 100%;

  padding: 0 2rem;
`;
