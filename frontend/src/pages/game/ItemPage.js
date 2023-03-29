import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import CharacterDetail from 'components/game/CharacterDetail';

import Relic from 'components/game/Relic';
import Button from 'components/common/Button';

export default function ItemPage() {
  const navigate = useNavigate();

  const [randomChList, setRandomChList] = useState(null);
  const [selectedRandomCh, setSelectedRandomCh] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedChList, setSelectedChList] = useState(null);

  const [itemModal, setItemModal] = useState(false);
  const [statModal, setStatModal] = useState(false);

  // 선택된 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getSelectedCh');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('선택된 캐릭터 조회', res.data);
        setSelectedChList(res.data);
      })
      .catch((err) => {});
  }, []);

  const getSelectedChList = () => {
    const [url, method] = api('getSelectedCh');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('선택된 캐릭터 조회(이건 함수임)', res.data);
        setSelectedChList(res.data);
      })
      .catch((err) => {});
  };

  return (
    <>
      <h1>유물 프레임 만드려고 대충 만든 페이지</h1>
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
          <Relic />
          <MyButton value="전투하기" />
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
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  padding: 0 2rem;
`;

const MyButton = styled(Button)``;
