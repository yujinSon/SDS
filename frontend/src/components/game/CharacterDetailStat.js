import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from 'constants/api';
import axios from 'libs/axios';

import Modal from 'components/common/Modal';
import skillsPK from 'constants/skillsPK';
import SkillModal from './SkillModal';

export default function CharacterDetailStat({
  // 여기서 데이터는 선택된 캐릭터 하나의 객체를 의미함
  data,
  isChanged,
  setIsChanged,
  selectedCharacter,
}) {
  const token = sessionStorage.getItem('token');
  const [selectedSkillIdx, setSelectedSkillIdx] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);

  // 처음 주어진 statPoint
  const [firstStatPoint, setFirstStatPoint] = useState(null);
  // data를 ch state에 저장
  const [ch, setCh] = useState(null);
  // 찍을 수 있는 stat의 갯수 (초기값은 firstStatPoint)
  const [stat, setStat] = useState(null);

  // input data에 넣을 스텟 값들 (얼마나 count되었는지)
  const [cntHp, setCntHp] = useState(0);
  const [cntAd, setCntAd] = useState(0);
  const [cntAp, setCntAp] = useState(0);
  const [cntSpeed, setCntSpeed] = useState(0);
  const [cntCritical, setCntCritical] = useState(0);
  const [cntAvoid, setCntAvoid] = useState(0);

  // 다른 캐릭터가 선택되면 기존에 count된 값들을 0으로 초기화시켜줌 (API 요청 시 오류 방지)
  useEffect(() => {
    setCntHp(0);
    setCntAd(0);
    setCntAp(0);
    setCntSpeed(0);
    setCntCritical(0);
    setCntAvoid(0);
  }, [selectedCharacter]);

  // data를 기반으로 초기값 설정 (처음 statPoint 저장, 선택된 캐릭터 정보 ch 저장)
  useEffect(() => {
    if (!data) return;
    setFirstStatPoint(data.statPoint);
    let copy = { ...data };
    setCh(copy);
    setStat(data.statPoint);
  }, [data]);

  // 찍은 stat cnt가 바뀌면 값을 계산해서 front에 띄워줌
  useEffect(() => {
    if (!data | !ch) return;
    let copy = { ...ch };

    copy = {
      hp: data.hp + data.addHp * cntHp,
      maxHp: data.maxHp + data.addHp * cntHp,
      ad: data.ad + data.addAd * cntAd,
      ap: data.ap + data.addAp * cntAp,
      speed: data.speed + data.addSpeed * cntSpeed,
      critical: data.critical + data.addCritical * cntCritical,
      avoid: data.avoid + data.addAvoid * cntAvoid,

      pos: data.pos,
      level: data.level,
      className: data.className,
      subClassName: data.subClassName,
      statPoint: data.statPoint,
      skills: data.skills,
      user: data.user,
    };

    setCh(copy);
  }, [cntHp, cntAd, cntAp, cntSpeed, cntCritical, cntAvoid]);

  // 각 stat 별 증가, 감소 로직 함수 (남은 stat이 0이면 기능 막음)
  const addHp = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntHp(cntHp + 1);
  };
  const minusHp = () => {
    // firstStatPoint를 조건에 넣어줘서 +를 찍은 만큼만 -할 수 있게 해줌
    if (stat === firstStatPoint) return;
    if (cntHp === 0) return;
    setStat(stat + 1);
    setCntHp(cntHp - 1);
  };
  const addAd = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntAd(cntAd + 1);
  };
  const minusAd = () => {
    if (stat === firstStatPoint) return;
    if (cntAd === 0) return;
    setStat(stat + 1);
    setCntAd(cntAd - 1);
  };
  const addAp = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntAp(cntAp + 1);
  };
  const minusAp = () => {
    if (stat === firstStatPoint) return;
    if (cntAp === 0) return;
    setStat(stat + 1);
    setCntAp(cntAp - 1);
  };
  const addSpeed = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntSpeed(cntSpeed + 1);
  };
  const minusSpeed = () => {
    if (stat === firstStatPoint) return;
    if (cntSpeed === 0) return;
    setStat(stat + 1);
    setCntSpeed(cntSpeed - 1);
  };
  const addCritical = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntCritical(cntCritical + 1);
  };
  const minusCritical = () => {
    if (stat === firstStatPoint) return;
    if (cntCritical === 0) return;
    setStat(stat + 1);
    setCntCritical(cntCritical - 1);
  };
  const addAvoid = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntAvoid(cntAvoid + 1);
  };
  const minusAvoid = () => {
    if (stat === firstStatPoint) return;
    if (cntAvoid === 0) return;
    setStat(stat + 1);
    setCntAvoid(cntAvoid - 1);
  };

  // Backend에 보내줄 stat cnt를 data에 넣어줌 (pos를 기준으로 Backend에서 정보를 업데이트하므로 꼭 넣어줘야 함)
  const saveStat = () => {
    const data = {
      pos: ch.pos,
      addHp: cntHp,
      addAd: cntAd,
      addAp: cntAp,
      addSpeed: cntSpeed,
      addCritical: cntCritical,
      addAvoid: cntAvoid,
    };
    // console.log(data);
    // Stat 변경 API 호출
    const [url, method] = api('changeStat');
    const config = {
      url,
      method,
      data,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log(res.data, 'stat 변경 API 요청 성공');
        // 스텟이 변경되면 상위 컴포넌트에서 반영된 결과를 화면으로 띄워주기 위해 isChanged 변경
        setIsChanged(!isChanged);
        // API 요청 성공 시 다시 stat cnt들을 0으로 초기화해줌
        setCntHp(0);
        setCntAd(0);
        setCntAp(0);
        setCntSpeed(0);
        setCntCritical(0);
        setCntAvoid(0);
      })
      .catch((err) => {
        console.log(err, 'stat 변경 API 요청 실패');
      });
  };

  return (
    <Container>
      {ch ? (
        <TopDiv>
          {showSkillModal ? (
            <ModalContainer>
              <Modal
                close={() => setShowSkillModal(!showSkillModal)}
                content={
                  <SkillModal
                    skillName={
                      skillsPK[ch.subClassName].skillNames[selectedSkillIdx]
                    }
                    detail={
                      skillsPK[ch.subClassName].skillDetails[selectedSkillIdx]
                    }
                    effect={
                      skillsPK[ch.subClassName].skillEffects[selectedSkillIdx]
                    }
                    showSkillModal={showSkillModal}
                    setShowSkillModal={setShowSkillModal}
                  />
                }
              />
            </ModalContainer>
          ) : null}
          <div>
            <UpperContainer>
              <StatDiv>{ch.className}</StatDiv>
              <StatDiv>
                {ch.subClassName} (LV.{ch.level})
              </StatDiv>
              <StatDiv>
                {skillsPK[ch.subClassName].skillImgs.map((skillImg, idx) => (
                  <IMG
                    src={skillImg}
                    alt="스킬 이미지"
                    key={idx}
                    onClick={() => {
                      setShowSkillModal(!showSkillModal);
                      setSelectedSkillIdx(idx);
                    }}
                  />
                ))}
              </StatDiv>
            </UpperContainer>
            <hr />
            <BottomContainer>
              {' '}
              <AddStatDiv>
                {cntHp ? (
                  <ColorSpan>
                    hp: {ch.hp} / {ch.maxHp}
                  </ColorSpan>
                ) : (
                  <span>
                    hp: {ch.hp} / {ch.maxHp}
                  </span>
                )}
                <span>
                  <AddStatButton onClick={() => addHp()} />
                  <MinusStatButton onClick={() => minusHp()} />
                </span>
              </AddStatDiv>
              <AddStatDiv>
                {cntAd ? (
                  <ColorSpan>ad: {ch.ad}</ColorSpan>
                ) : (
                  <span>ad: {ch.ad}</span>
                )}

                <span>
                  <AddStatButton onClick={() => addAd()} />
                  <MinusStatButton onClick={() => minusAd()} />
                </span>
              </AddStatDiv>
              <AddStatDiv>
                {cntAp ? (
                  <ColorSpan>ap: {ch.ap}</ColorSpan>
                ) : (
                  <span>ap: {ch.ap}</span>
                )}

                <span>
                  <AddStatButton onClick={() => addAp()} />
                  <MinusStatButton onClick={() => minusAp()} />
                </span>
              </AddStatDiv>
              <AddStatDiv>
                {cntSpeed ? (
                  <ColorSpan>speed: {ch.speed}</ColorSpan>
                ) : (
                  <span>speed: {ch.speed}</span>
                )}

                <span>
                  <AddStatButton onClick={() => addSpeed()} />
                  <MinusStatButton onClick={() => minusSpeed()} />
                </span>
              </AddStatDiv>
              <AddStatDiv>
                {cntCritical ? (
                  <ColorSpan>critical: {ch.critical}</ColorSpan>
                ) : (
                  <span>critical: {ch.critical}</span>
                )}

                <span>
                  <AddStatButton onClick={() => addCritical()} />
                  <MinusStatButton onClick={() => minusCritical()} />
                </span>
              </AddStatDiv>
              <AddStatDiv>
                {cntAvoid ? (
                  <ColorSpan>avoid: {ch.avoid}</ColorSpan>
                ) : (
                  <span>avoid: {ch.avoid}</span>
                )}

                <span>
                  <AddStatButton onClick={() => addAvoid()} />
                  <MinusStatButton onClick={() => minusAvoid()} />
                </span>
              </AddStatDiv>
            </BottomContainer>
          </div>
          <div></div>
        </TopDiv>
      ) : (
        <div>캐릭터를 클릭하세요.</div>
      )}
      {ch ? <div>남은 Stat Point: {stat}</div> : null}
      <StatSaveButton onClick={() => saveStat()}>저장</StatSaveButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(189, 189, 189, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  border-radius: 20px;
`;

const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StatDiv = styled.div`
  font-size: 1.3rem;
  margin: 0.1rem;
`;

const AddStatDiv = styled(StatDiv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddStatButton = styled.button`
  background-color: red;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 0 0 3rem;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
  }

  &:before {
    width: 60%;
    height: 2px;
    transform: translate(-50%, -50%);
  }

  &:after {
    width: 2px;
    height: 60%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
`;

const MinusStatButton = styled.button`
  background-color: red;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin: 0 0 0 1rem;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #fff;
  }

  &:after {
    width: 2px;
    height: 60%;
    transform: translate(-50%, -50%) rotate(90deg);
  }
`;

const StatSaveButton = styled.button`
  background-color: rgba(116, 116, 116, 0.7);
  font-size: 1.5rem;
  color: white;
  border-radius: 10px;
  padding: 0.2rem 2rem 0.2rem 2rem;
  border: none;
  width: 10rem;
`;

const ColorSpan = styled.span`
  color: yellow;
`;

const IMG = styled.img`
  margin: 0.5rem;
  width: 85px;
  height: 85px;
  border: 3px solid white;
`;

const UpperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; // z-index 값을 높임
`;
