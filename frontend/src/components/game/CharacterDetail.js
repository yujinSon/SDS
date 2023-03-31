import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function CharacterDetail({ data }) {
  // 여기서 데이터는 캐릭터 하나의 객체를 의미함

  const [firstStatPoint, setFirstStatPoint] = useState(null);
  const [ch, setCh] = useState(null);
  const [stat, setStat] = useState(null);

  // input data에 넣을 스텟 값들
  const [cntHp, setCntHp] = useState(0);
  const [cntAd, setCntAd] = useState(0);
  const [cntAp, setCntAp] = useState(0);
  const [cntSpeed, setCntSpeed] = useState(0);
  const [cntCritical, setCntCritical] = useState(0);
  const [cntAvoid, setCntAvoid] = useState(0);

  useEffect(() => {
    if (!data) return;
    setFirstStatPoint(data.statPoint);
    let copy = { ...data };
    setCh(copy);
    setStat(data.statPoint);
  }, [data]);

  useEffect(() => {
    if (!data | !ch) return;
    let copy = { ...ch };
    console.log(data, '원래 데이터');
    copy = {
      hp: data.hp + 100 * cntHp,
      maxHp: data.maxHp + 100 * cntHp,
      ad: data.ad + 5 * cntAd,
      ap: data.ap + 6 * cntAp,
      speed: data.speed + 7 * cntSpeed,
      critical: data.critical + 8 * cntCritical,
      avoid: data.avoid + 9 * cntAvoid,

      pos: data.pos,
      level: data.level,
      className: data.className,
      subClassName: data.subClassName,
      statPoint: data.statPoint,
      skills: data.skills,
      user: data.user,
    };

    // copy.hp = data.hp + 100 * cntHp;
    // copy.maxHp = data.maxHp + 100 * cntHp;
    console.log(copy, 'copy');
    setCh(copy);
  }, [cntHp, cntAd, cntAp, cntSpeed, cntCritical, cntAvoid]);

  const addHp = () => {
    if (stat === 0) return;
    setStat(stat - 1);
    setCntHp(cntHp + 1);
  };
  const minusHp = () => {
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
    setCntCritical(cntSpeed - 1);
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

  return (
    <Container>
      {ch ? (
        <TopDiv>
          <div>
            <StatDiv>{ch.className}</StatDiv>
            <StatDiv>{ch.subClassName} </StatDiv>
            <StatDiv>level: {ch.level} </StatDiv>
            <StatDiv>
              skills:
              {ch.skills.map((skill, idx) => (
                <div key={idx}>{skill.skillName} </div>
              ))}
            </StatDiv>
          </div>
          <div>
            <AddStatDiv>
              <span>
                hp: {ch.hp} / {ch.maxHp}
              </span>{' '}
              <span>
                <AddStatButton onClick={() => addHp()} />
                <MinusStatButton onClick={() => minusHp()} />
              </span>
            </AddStatDiv>
            <AddStatDiv>
              <span>ad: {ch.ad}</span>{' '}
              <span>
                <AddStatButton onClick={() => addAd()} />
                <MinusStatButton onClick={() => minusAd()} />
              </span>
            </AddStatDiv>
            <AddStatDiv>
              <span>ap: {ch.ap}</span>{' '}
              <span>
                <AddStatButton onClick={() => addAp()} />
                <MinusStatButton onClick={() => minusAp()} />
              </span>
            </AddStatDiv>
            <AddStatDiv>
              <span>speed: {ch.speed}</span>{' '}
              <span>
                <AddStatButton onClick={() => addSpeed()} />
                <MinusStatButton onClick={() => minusSpeed()} />
              </span>
            </AddStatDiv>
            <AddStatDiv>
              <span>critical: {ch.critical}</span>{' '}
              <span>
                <AddStatButton onClick={() => addCritical()} />
                <MinusStatButton onClick={() => minusCritical()} />
              </span>
            </AddStatDiv>
            <AddStatDiv>
              <span>avoid: {ch.avoid}</span>{' '}
              <span>
                <AddStatButton onClick={() => addAvoid()} />
                <MinusStatButton onClick={() => minusAvoid()} />
              </span>
            </AddStatDiv>
          </div>
        </TopDiv>
      ) : (
        <div>능력치 보고 싶은 캐릭터 선택하셈</div>
      )}
      {ch ? <div>남은 Stat Point: {stat}</div> : null}
      <StatSaveButton>저장</StatSaveButton>
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
  padding-right: 2rem;
`;

const StatDiv = styled.div`
  margin: 0.5rem;
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
  width: 20vw;
`;
