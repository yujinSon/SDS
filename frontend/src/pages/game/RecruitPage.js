import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import RandomCharacterList from 'components/game/RandomCharacterList';
import CharacterDetail from 'components/game/CharacterDetail';
import GameButtons from 'components/game/GameButtons';
import Modal from 'components/common/Modal';
import Items from 'components/game/ItemModal';
import Stats from 'components/game/Stats';

export default function RecruitPage() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  // 랜덤 캐릭터 리스트, 선택된 랜덤 캐릭터의 idx state
  const [randomChList, setRandomChList] = useState(null);
  const [selectedRandomCh, setSelectedRandomCh] = useState(null);
  // 영입한 캐릭터 리스트, 선택된 캐릭터의 idx state
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedChList, setSelectedChList] = useState(null);

  // 랜덤 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getRandomCh');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log('랜덤 캐릭터 조회', res.data);
        setRandomChList(res.data);
      })
      .catch((err) => {});
  }, [selectedChList]);

  // 선택된 캐릭터 리스트 조회
  useEffect(() => {
    const [url, method] = api('getSelectedCh');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log('선택된 캐릭터 조회', res.data);
        setSelectedChList(res.data);
      })
      .catch((err) => {});
  }, []);

  const getSelectedChList = () => {
    const [url, method] = api('getSelectedCh');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log('선택된 캐릭터 조회(함수-Axios 요청)', res.data);
        setSelectedChList(res.data);
      })
      .catch((err) => {});
  };

  // 버튼 눌러서 개별 캐릭터 영입 - 저장하기 axios 요청
  const addCharacter = () => {
    const data = randomChList[selectedRandomCh];
    const [url, method] = api('saveCh');
    const config = {
      url,
      method,
      data,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    // 아직 영입한 캐릭터가 없으면 새로운 배열을 만들어 추가
    if (selectedChList === null) {
      axios(config)
        .then((res) => {
          const copy = [randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          getSelectedChList();
        })
        .catch((err) => {
          console.log(err, '캐릭터 영입 실패');
        });
      // 영입한 캐릭터가 2명 이하일 때
    } else if (selectedChList.length <= 2) {
      axios(config)
        .then((res) => {
          const copy = [...selectedChList, randomChList[selectedRandomCh]];
          setSelectedChList(copy);
          getSelectedChList();
          return;
        })
        .catch((err) => {
          console.log(err, '캐릭터 영입 실패');
        });
    } else {
      alert('캐릭터는 3명까지만 영입 가능합니다.');
      return;
    }
  };

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

  return (
    <TopDiv>
      <MainContainer>
        <SubContainerLeft>
          <SelectedCharacterList
            data={selectedChList}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
          {selectedChList ? (
            <CharacterDetail data={selectedChList[selectedCharacter]} />
          ) : null}
        </SubContainerLeft>
        <SubContainerRight>
          <RandomCharacterList
            data={randomChList}
            selectedRandomCh={selectedRandomCh}
            setSelectedRandomCh={setSelectedRandomCh}
            addCharacter={addCharacter}
          />
          <GameButtons selectedChList={selectedChList} />
        </SubContainerRight>
      </MainContainer>
    </TopDiv>
  );
}

const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

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
  width: 40%;
`;

const SubContainerRight = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 40%;

`;
