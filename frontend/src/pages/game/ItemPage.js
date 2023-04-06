import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import CharacterDetailStat from 'components/game/CharacterDetailStat';

import Relic from 'components/game/Relic';

export default function ItemPage() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  // 영입하 캐릭터 목록, 캐릭터의 idx state
  const [selectedChList, setSelectedChList] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const [isChanged, setIsChanged] = useState(false);

  // 획득한 유물 id 배열 state (id값만 주어짐)
  const [relicIds, setRelicIds] = useState(null);

  // 선택된 캐릭터 리스트 조회 (스텟이 업데이트 되면 다시 화면에 반영해주기 위해 API 요청)
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
        // 화면 상 칸 조정을 위해 길이가 3 미만이면 빈 객체를 하나 추가해줌
        while (res.data.length < 3) {
          res.data.push({ className: null });
        }
        setSelectedChList(res.data);
      })
      .catch((err) => {
        console.log(err, '선택된 캐릭터 조회 실패');
      });
  }, [isChanged]);

  // 현재 보유 유물 리스트 조회
  useEffect(() => {
    const [url, method] = api('getRelic');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data, '현재 보유 유물 리스트 조회');
        setRelicIds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
`;

const SubContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

const StartButton = styled.button`
  background-color: rgba(140, 140, 140, 0.8);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
  width: 10rem;
`;
