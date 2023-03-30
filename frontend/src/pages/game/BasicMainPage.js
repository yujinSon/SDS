import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import RandomCharacterList from 'components/game/RandomCharacterList';
import CharacterDetail from 'components/game/CharacterDetail';
import NoneCharacterList from 'components/game/NoneCharacterList';
import GameButtons from 'components/game/GameButtons';
import Modal from 'components/common/Modal';
import Items from 'components/game/ItemModal';
import Stats from 'components/game/Stats';

export default function BasicMainPage() {
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
        // while (res.data.length < 3) {
        //   res.data.push({className: null})
        // }

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
        console.log('랜덤 캐릭터 조회', res.data);
        setRandomChList(res.data);
      })
      .catch((err) => {});
  }, [selectedChList]);

  // 새로고침 막기
  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.returnValue = '';
  //   };

  //   const handleKeydown = (event) => {
  //     if (event.key === 'F5') {
  //       event.preventDefault();
  //     }
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   window.addEventListener('keydown', handleKeydown);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //     window.removeEventListener('keydown', handleKeydown);
  //   };
  // }, []);

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

  // 버튼 눌러서 개별 캐릭터 저장하기 axios 요청
  const addCharacter = () => {
    const data = randomChList[selectedRandomCh];
    const [url, method] = api('saveCh');
    const config = { url, method, data };
    // 아직 영입한 캐릭터가 없으면 새로운 배열을 만들어 추가
    if (selectedChList === null) {
      axios(config)
        .then((res) => {
          const copy = [...selectedChList, randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          getSelectedChList();
        })
        .catch((err) => {});
      // 영입한 캐릭터가 2명 이하일 때
    } else if (selectedChList.length <= 2) {
      axios(config)
        .then((res) => {
          const copy = [...selectedChList, randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          getSelectedChList();

          return;
        })
        .catch((err) => {});
    } else {
      alert('캐릭터는 3명까지만 선택 가능합니다아아아악');
      return;
    }
  };

  return (
    <>
      <h1>GameMainPage</h1>
      <MainContainer>
        <SubContainerLeft>
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
        </SubContainerLeft>
        <SubContainerRight>
          <RandomCharacterList
            data={randomChList}
            selectedRandomCh={selectedRandomCh}
            setSelectedRandomCh={setSelectedRandomCh}
            addCharacter={addCharacter}
          />
          <GameButtons
            itemModal={itemModal}
            setItemModal={setItemModal}
            statModal={statModal}
            setStatModal={setStatModal}
          />
        </SubContainerRight>
      </MainContainer>
      {itemModal ? (
        <Modal close={() => setItemModal(false)} content={<Items />} />
      ) : null}
      {statModal ? (
        <Modal close={() => setStatModal(false)} content={<Stats />} />
      ) : null}
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
`;
