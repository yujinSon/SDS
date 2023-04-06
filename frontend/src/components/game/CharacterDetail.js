import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Modal from 'components/common/Modal';
import skillsPK from 'constants/skillsPK';
import SkillModal from './SkillModal';

export default function CharacterDetail({ data }) {
  const [ch, setCh] = useState(null);

  const [selectedSkillIdx, setSelectedSkillIdx] = useState(null);
  const [showSkillModal, setShowSkillModal] = useState(false);

  useEffect(() => {
    if (!data) return;
    let copy = { ...data };
    setCh(copy);
  }, [data]);

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
              <div>
                <AddStatDiv>
                  <span>
                    hp: {ch.hp} / {ch.maxHp}
                  </span>{' '}
                </AddStatDiv>
                <AddStatDiv>
                  <span>ad: {ch.ad}</span>{' '}
                </AddStatDiv>
                <AddStatDiv>
                  <span>ap: {ch.ap}</span>{' '}
                </AddStatDiv>
              </div>
              <div>
                <AddStatDiv>
                  <span>speed: {ch.speed}</span>{' '}
                </AddStatDiv>
                <AddStatDiv>
                  <span>critical: {ch.critical}</span>{' '}
                </AddStatDiv>
                <AddStatDiv>
                  <span>avoid: {ch.avoid}</span>{' '}
                </AddStatDiv>
              </div>
            </BottomContainer>
          </div>
        </TopDiv>
      ) : (
        <div>캐릭터를 클릭하세요.</div>
      )}
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
  margin: 0.5rem;
`;

const AddStatDiv = styled(StatDiv)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-evenly;
`;
