import React, { useState } from 'react';
import styled from 'styled-components';

import SelectedCharacterList from 'components/game/SelectedCharacterList';
import RandomCharacterList from 'components/game/RandomCharacterList';
import CharacterDetail from 'components/game/CharacterDetail';
import GameButtons from 'components/game/GameButtons';

export default function GameMainPage() {
  // dummy data
  const SelectedCharacterDataList = [
    {
      name: '턱스크 민수',
      level: 1,
      hp: 100,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
    {
      name: '환경운동가 유진',
      level: 2,
      hp: 70,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
    {
      name: '경찰 병진',
      level: 3,
      hp: 120,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
  ];
  const RandomCharacterDataList = [
    {
      name: '비혼주의자 민혁',
      level: 1,
      hp: 100,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
    {
      name: '예비군 용찬',
      level: 2,
      hp: 70,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
    {
      name: '경찰 병진',
      level: 3,
      hp: 120,
      ad: 10,
      ap: 30,
      speed: 100,
      critical: 20,
      avoid: 25,
      maxHP: 1000,
      pos: 0,
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const selectCharacter = (idx) => {
    setSelectedCharacter(idx);
  };

  return (
    <>
      <h1>GameMainPage</h1>
      <MainContainer>
        <SubContainer>
          <SelectedCharacterList
            data={SelectedCharacterDataList}
            selectCharacter={selectCharacter}
          />
          <CharacterDetail
            data={SelectedCharacterDataList[selectedCharacter]}
          />
        </SubContainer>
        <SubContainer>
          <RandomCharacterList data={RandomCharacterDataList} />
          <GameButtons />
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
