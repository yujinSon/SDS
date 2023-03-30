import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

import Battle from 'components/game/Battle';
import Information from 'components/game/Information';

export default function BattlePage() {
  const navigate = useNavigate();
  // 둘중 최솟값
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  useEffect(() => {
    const [url, method] = api('loadStage');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('전투페이지 불러오기', res.data);
        setStageStep(res.data.nowStage);
        setCharacters(res.data.character);
        setMonsters(res.data.villain);
      })
      .catch((err) => {});
  }, []);

  // playerTurn이 2가 된 상태에서 몬스터를 클릭하면 공격하는 것으로 간주
  const [playerTurn, setPlayerTurn] = useState(0);
  const [selectedCh, setSelectedCh] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    console.log(selectedCh, '@@@@@@@@현재 선택된 캐릭터!!!@@@@@@@@');
  }, [selectedCh]);

  const [stageStep, setStageStep] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [monsters, setMonsters] = useState(null);

  const [turnOrder, setTurnOrder] = useState(null);
  // 현재 턴인 pos
  const [nowTurn, setNowTurn] = useState(null);
  // turnOrder 배열의 인덱스
  const [nowIdx, setNowIdx] = useState(0);

  // 공격 시마다 띄울 메시지
  const [msg, setMsg] = useState([
    '고병진님이 박용찬님에게 꿀밤을 때려 데미지 100을 입혔습니다.',
    '손유진님이 박용찬님에게 하이킥을 날려 데미지 41153을 입혔습니다.',
  ]);
  const textCnt = 7;

  const [who, setWho] = useState('');
  const [whichSkill, setWhichSkill] = useState('');

  // towhom과 amount는 캐릭터 -> 빌런 공격 시에 사용함
  const [toWhom, setToWhom] = useState('');
  const [amount, setAmount] = useState('');

  // 캐릭터 회복량 msg 관련 state
  const [chHeal, setChHeal] = useState('');
  const [chHealTowhom, setChHealTowhom] = useState('');

  // 몬스터가 skill 시전 시
  const [monsterWho, setMonsterWho] = useState('');
  const [monsterWhichSkill, setMonsterWhichSkill] = useState('');

  // 몬스터가 공격한 대상과 데미지
  const [monsterTowhom, setMonsterTowhom] = useState('');
  const [monsterAmount, setMonsterAmount] = useState('');

  // 몬스터가 공격시 띄울 msg
  useEffect(() => {
    if ((monsterTowhom === '') | (monsterAmount === '')) return;
    // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
    let madeMsg = `${monsterTowhom}(이)가 ${monsterAmount}의 데미지를 입었다!`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    // setMonsterAmount('');
  }, [monsterTowhom, monsterAmount]);

  useEffect(() => {
    if ((monsterWho === '') | (monsterWhichSkill === '')) return;
    // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
    console.log(monsterWho, '몬스터 누가 공격했는지');
    let madeMsg = `${monsterWho}(이)가 ${monsterWhichSkill}을(를)  사용했다!`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
  }, [monsterWho, monsterWhichSkill]);

  // 데미지와 데미지 받는 대상이 변경될 때 메시지 수정하는 useEffect
  useEffect(() => {
    if ((toWhom === '') | (amount === '')) return;
    // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
    let madeMsg = '';
    if (amount === 0) {
      madeMsg = `${toWhom}(이)가 공격을 회피했다.`;
    } else {
      madeMsg = `${toWhom}(이)가 ${amount}만큼의  데미지를 입었다!`;
    }
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    console.log(madeMsg);
  }, [amount, toWhom]);

  // 캐릭터 힐 메시지
  useEffect(() => {
    if ((chHeal === '') | (chHealTowhom === '')) return;
    let madeMsg = `${chHealTowhom}(은)는 ${chHeal}만큼 hp가 회복되었다.`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
  }, [chHeal, chHealTowhom]);

  // speed에 따라 공격 turn 계산하기
  useEffect(() => {
    if (!characters | !monsters) return;
    // 턴 한 번만 처음 계산해줌 (nowIdx가 0인 경우에)
    if (nowIdx !== 0) return;

    // 턴 종료 (=새로운 턴 시작) 될 때 백에 알려줌
    const [url, method] = api('finishTurn');
    const config = { url, method };
    axios(config)
      .then((res) => {
        console.log('턴 끝났다고 백에 알려줬음', res.data);
      })
      .catch((err) => {
        console.log('턴종료 에러', err);
      });

    const mergedArr = [
      ...characters.map(({ pos, speed }) => ({ pos, speed })),
      ...monsters.map(({ pos, speed }) => ({ pos, speed })),
    ];
    mergedArr.sort((a, b) => b.speed - a.speed);
    // 현재 턴 박스 표시해주기 (캐릭터 바뀌면 수정할 수 밖에 없음..)

    setTurnOrder(mergedArr);
  }, [characters, monsters, nowIdx]);
  // console.log('턴', turnOrder);

  useEffect(() => {
    if (!turnOrder) return;
    setNowTurn(turnOrder[nowIdx].pos);
  }, [turnOrder]);

  // 턴 순서에 따라서 공격 logic 실행
  useEffect(() => {
    if (!turnOrder) return;
    console.log(nowIdx, '현재 턴');
    setNowTurn(turnOrder[nowIdx].pos);
    // console.log('현재 공격 pos', turnOrder[nowIdx]);
  }, [nowIdx]);

  // 캐릭터, 빌런 전멸 여부 체크
  useEffect(() => {
    if (!characters | !monsters) return;

    if (characters.length === 0) {
      console.log('캐릭터 모두 사망함');

      // 캐릭터가 다 사망해서 api 보냄 (let으로 설정해서 나중에 오류 뜨면 수정해야함)
      let [url, method] = api('gameOver');
      let config = { url, method };
      axios(config)
        .then((res) => {
          console.log('캐릭터 사망 response:', res.data);
        })
        .catch((err) => {
          console.log('캐릭터 사망 err', err);
        });

      // 캐릭터 or 빌런이 다 죽어서 게임 끝
      [url, method] = api('endBattle');
      config = { url, method };
      axios(config)
        .then((res) => {
          console.log('캐릭터 전멸해서 게임 끝', res.data);
          navigate('/ending');
        })
        .catch((err) => {
          console.log('endBattle 에러', err);
        });
    }

    if (monsters.length === 0) {
      console.log('몬스터 전멸함');
      const [url, method] = api('endBattle');
      const config = { url, method };
      axios(config)
        .then((res) => {
          console.log('몬스터 전멸', res.data);
          if (stageStep[1] === 2) {
            navigate('/shop');
          } else {
            navigate('/ending');
          }
        })
        .catch((err) => {
          console.log('endBattle 에러', err);
        });
    }
  }, [characters, monsters]);

  // *** 빌런 공격 로직 및 캐릭터 사망 시 턴 넘김 logic ***
  useEffect(() => {
    console.log(turnOrder, '빌런 공격 시의 turnOrder');
    // 캐릭터 공격 차례면 죽었는지 확인하고 Turn 넘기는 Logic 처리
    if (nowTurn < 3) {
      let myCharacter = 0;
      let found = false;
      if (characters) {
        for (let idx = 0; idx < characters.length; idx++) {
          if (characters[idx].pos === nowTurn) {
            myCharacter = characters[idx];
            console.log('현재 공격 턴인 캐릭터', myCharacter);
            found = true;
          }
        }
        // 캐릭터가 이미 죽어서 해당 nowTurn의 pos를 찾을 수 없으면 다음 턴으로 넘김
        if (found === false) {
          if (nowIdx < turnOrder.length - 1) {
            setNowIdx(nowIdx + 1);
            return;
          } else {
            setNowIdx(0);
            return;
          }
        }
      }
    }
    // 빌런 공격 차례
    else {
      console.log('빌런의 공격 차례가 도래했다!!!');
      // 빌런 공격 시에차례대로 보여주기 위해 setTimeout 함수 실행 (2초 간격)
      setTimeout(function () {
        let myMonster = 0;
        // 현재 nowTurn인 몬스터의 pos를 monster 찾을 수 있는지 변수
        let found = false;
        for (let idx = 0; idx < monsters.length; idx++) {
          if (monsters[idx].pos === nowTurn) {
            myMonster = monsters[idx];
            console.log('현재 공격 턴인 빌런', myMonster);
            found = true;
          }
        }
        // 몬스터가 이미 죽어서 해당 nowTurn의 pos를 찾을 수 없으면 다음 턴으로 넘김
        if (found === false) {
          if (nowIdx < turnOrder.length - 1) {
            setNowIdx(nowIdx + 1);
            return;
          } else {
            setNowIdx(0);
            return;
          }
        }
        // 몬스터가 사용할 스킬
        const mySkill =
          myMonster.skills[Math.floor(Math.random() * myMonster.skills.length)];

        // 몬스터가 공격할 대상이 캐릭터인 경우 (1이면 캐릭터 if 문 실행, 0이면 몬스터이므로 pass)
        if (mySkill.skillTarget === 1) {
          let damage = mySkill.value;
          console.log('빌런의 첫 데미지', damage);

          setMonsterWho(myMonster.subName);
          setMonsterWhichSkill(mySkill.skillName);

          // 치명타 관련 로직
          const randomPercent = Math.floor(Math.random() * 100);
          if (randomPercent <= myMonster.critical) {
            const criticalPercent = Math.random() + 1;
            damage = Math.floor(criticalPercent * damage);
            console.log('빌런의 크리티컬 데미지', damage);
          }

          let data = {};
          if (mySkill.range === true) {
            data = {
              target: 3, // 전체공격
              damage: damage,
            };
          } else {
            // 몬스터가 공격할 캐릭터의 pos를 랜덤으로 가져옴
            const chIdx = Math.floor(Math.random() * characters.length);
            data = { target: characters[chIdx].pos, damage: damage };

            // 몬스터가 공격할 대상과 데미지 (결과는 백측에서 넘어오게 됨 - 병진햄과 저녁에 구현 예정)
            // setMonsterTowhom(characters[chIdx].subName);
            // setMonsterAmount(damage);
          }
          let beforeHp = [0, 0, 0];
          for (let ch of characters) {
            beforeHp[ch.pos] = ch.hp;
            // console.log(beforeHp, '달콤커피');
          }
          let afterHp = [0, 0, 0];
          const [url, method] = api('enemysTurn');
          const config = { url, method, data };
          axios(config)
            .then((res) => {
              console.log('빌런 공격 결과', res.data);
              let copy = [];
              for (let ch of res.data) {
                if (ch.hp > 0) {
                  copy.push(ch);
                }
                afterHp[ch.pos] = ch.hp;
              }

              // 전체공격 일 때 hp 비교
              if (mySkill.range === true) {
                for (let i = 0; i < 3; i++) {
                  // before에 이미 사망한 친구 걸러주는 로직
                  if (beforeHp[i] !== 0) {
                    damage = afterHp[i] === beforeHp[i] ? 0 : damage;
                    for (let ch of copy) {
                      if (ch.pos === i) {
                        // 이거 전체 공격 useEffect 안에서 setState를 동기적으로 실행할 수 있는 방법이 있는지?
                        // 일단 생각가는 건 해당 로직을 함수화 한 다음, async, await를 붙여주는 것!
                        setMonsterTowhom(ch.subName);
                        setMonsterAmount(damage);
                        // await new Promise((resolve) => setTimeout(resolve, 0));
                      }
                    }
                  }
                }
              } // 단일 대상 공격
              else {
              }
              setCharacters(copy);

              if (nowIdx < turnOrder.length - 1) {
                setNowIdx(nowIdx + 1);
              } else {
                setNowIdx(0);
              }
            })
            .catch((err) => {
              console.log('빌런 공격 axios 에러', err);
              if (nowIdx < turnOrder.length - 1) {
                setNowIdx(nowIdx + 1);
              } else {
                setNowIdx(0);
              }
            });
        }
        // skill.target === 0 인경우 (빌런의 회복스킬)
        else {
          let healAmount = mySkill.value;
          // 전체 빌런에게 힐 스킬 적용
          if (mySkill.range === true) {
            console.log('빌런의 전체 회복 스킬!!!');
            for (let monster of monsters) {
              monster.hp = min(monster.hp + healAmount, monster.maxHp);
            }
            // 빌런 한 마리에게 힐 스킬 적용
          } else {
            // 몬스터에서 피 가장 작은 애한테 힐 스킬 적용
            console.log('빌런의 단일 회복 스킬!!!');
            let minHpMonsterPos = -1;
            let minValue = 999999999;
            for (let monster of monsters) {
              if (minValue > monster.hp) {
                minValue = monster.hp;
                minHpMonsterPos = monster.pos;
              }
            }
            for (let monster of monsters) {
              if (minHpMonsterPos === monster.pos) {
                monster.hp = min(monster.hp + healAmount, monster.maxHp);
              }
            }
          }
          if (nowIdx < turnOrder.length - 1) {
            setNowIdx(nowIdx + 1);
          } else {
            setNowIdx(0);
          }
        }
      }, 2000);
    }
  }, [nowTurn]);

  const clickCh = async (ch) => {
    // 버프 주는 거임
    if (playerTurn === 2) {
      console.log('옛다 버프다~');

      let madeMsg = `${who}(이)가 ${whichSkill}을(를)  사용했다!`;
      let copy = [...msg];
      copy = [madeMsg, ...msg];
      if (copy.length >= textCnt) {
        copy.pop();
      }
      setMsg(copy);

      let chIdx = 0;
      for (let idx = 0; idx < characters.length; idx++) {
        if (characters[idx].pos === nowTurn) {
          chIdx = idx;
          break;
        }
      }

      const chHealFactor =
        characters[chIdx][characters[chIdx].skills[selectedSkill].factor];
      const healValue = characters[chIdx].skills[selectedSkill].value;
      let healAmount = (chHealFactor * healValue) / 100;
      console.log(healAmount, '스킬 회복량');

      const healRange = characters[chIdx].skills[selectedSkill].range;
      // 전체회복
      if (healRange === true) {
        for (let idx = 0; idx < characters.length; idx++) {
          setChHeal(healAmount);
          setChHealTowhom(characters[idx].subName);
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
      } // 단일 회복
      else {
        setChHeal(healAmount);
        setChHealTowhom(ch.subName);
        await new Promise((resolve) => setTimeout(resolve, 0));
      }

      const data = {
        // 스킬 사용 시전자의 pos
        pos: nowTurn,
        skillName: characters[chIdx].skills[selectedSkill].skillName,
        // 스킬을 적용시킬 대상의 pos - 전체면 3 (ch.pos)
        target: characters[selectedCh].skills[selectedSkill].range ? 3 : ch.pos,
      };
      console.log(data, '회복스킬 시전 시 보낼 data');
      const [url, method] = api('playersTurn');
      const config = { url, method, data };
      axios(config)
        .then((res) => {
          console.log('버프 요청 axios', res.data);
          // 새롭게 업데이트 된 캐릭터 정보 저장
          setCharacters(res.data);
        })
        .catch((err) => {});

      setPlayerTurn(0);
      if (nowIdx < 6) {
        setNowIdx(nowIdx + 1);
      } else {
        setNowIdx(0);
      }
    } else {
      if (ch.pos === nowTurn) {
        let selectedIdx;
        for (let idx = 0; idx < characters.length; idx++) {
          if (characters[idx].pos === nowTurn) {
            selectedIdx = idx;
          }
        }
        // 메시지에 띄울 공격 주체 캐릭터명
        setWho(characters[selectedIdx].subName);
        console.log(who);

        setSelectedCh(selectedIdx);
        setSelectedSkill(null);
        setPlayerTurn(1);
      } else {
        console.log('응 니턴 아니야~');
      }
    }
  };

  const clickSkill = (idx) => {
    // 메시지에 띄울 스킬 이름
    setWhichSkill(characters[selectedCh].skills[idx].skillName);
    //
    setSelectedSkill(idx);
    if (playerTurn === 1) {
      setPlayerTurn(2);
    }
  };

  const clickMonster = async (pos) => {
    if (playerTurn !== 2) return;

    const mySkill = characters[selectedCh].skills[selectedSkill];
    const myCharacter = characters[selectedCh];

    let chIdx = 0;
    for (let idx = 0; idx < characters.length; idx++) {
      if (characters[idx].pos === nowTurn) {
        chIdx = idx;
        break;
      }
    }

    // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
    let madeMsg = `${who}(이)가 ${whichSkill}을(를)  사용했다!`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);

    let skillName = '';
    const data = {
      // 스킬 사용 시전자의 pos
      pos: nowTurn,
      skillName: characters[chIdx].skills[selectedSkill].skillName,
      // 스킬을 적용시킬 대상의 pos - 전체면 3 (ch.pos)
      target: 0,
    };
    console.log(data, '몬스터에게 스킬 시전 시 보낼 data');

    //
    if (characters[chIdx].skills[selectedSkill].coolTime !== 0) {
      const [url, method] = api('playersTurn');
      const config = { url, method, data };
      axios(config)
        .then((res) => {
          console.log('스킬 쿨타임 용', res.data);
          // 새롭게 업데이트 된 캐릭터 정보 저장
          setCharacters(res.data);
        })
        .catch((err) => {});
    }

    if (mySkill.skillTarget === 0) {
      // 몬스터가 맞을 데미지 (뒤에는 계수임)
      // const damage = mySkill.value * myCharacter[mySkill.factor];
      let damage = mySkill.value; // 추후 수정해야함
      // console.log('데미지', damage);

      const randomPercent = Math.floor(Math.random() * 100);
      // console.log('랜덤', randomNum);
      if (randomPercent <= myCharacter.critical) {
        console.log(
          '크리 떴다 수고해라!!!',
          `내 크리 :${myCharacter.critical}`,
          `랜덤 숫자 :${randomPercent}`,
        );
        const criticalPercent = Math.random() + 1;
        damage = Math.floor(criticalPercent * damage);
      }

      // 스킬이 1인 범위일 경우, 전체 스킬 일 경우 분기 설정
      // 전체 스킬인 경우
      if (mySkill.range === true) {
        let copy = [...monsters];
        let tmp = [];

        for (let idx = 0; idx < monsters.length; idx++) {
          // 개별 데미지 적용
          let eachDamage = damage;
          console.log(monsters[idx].hp, '이전 체력');
          // 회피했는지 아닌지 계산
          eachDamage *= calculateDodge(monsters[idx].avoid);
          const afterHp = monsters[idx].hp - eachDamage;
          copy[idx].hp = afterHp;
          console.log(afterHp, '남은 체력');

          setAmount(eachDamage);
          setToWhom(monsters[idx].subName);

          // 섹시해 chatGPT ㅎㅅㅎ
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
        // hp가 0이하로 떨어져서 사망한 경우
        for (let i = 0; i < copy.length; i++) {
          if (copy[i].hp > 0) {
            tmp.push(copy[i]);
          }
        }
        setMonsters(tmp);
      }
      // 단일 스킬인 경우
      else {
        for (let idx = 0; idx < monsters.length; idx++) {
          if (monsters[idx].pos === pos) {
            console.log(monsters[idx].hp, '이전 체력');
            // 회피했는지 아닌지 계산
            damage *= calculateDodge(monsters[idx].avoid);
            const afterHp = monsters[idx].hp - damage;

            // 메시지 띄울 데미지랑 대상 업데이트
            setAmount(damage);
            setToWhom(monsters[idx].subName);

            console.log(afterHp, '남은 체력');
            let copy = [...monsters];
            let tmp = [];

            // hp가 0이하로 떨어져서 사망한 경우
            if (afterHp <= 0) {
              for (let i = 0; i < copy.length; i++) {
                if (i !== idx) {
                  tmp.push(copy[i]);
                }
              }
              setMonsters(tmp);
              // hp가 달았지만 그래도 0이상인 경우
            } else {
              copy[idx].hp = afterHp;
              setMonsters(copy);
            }
            break;
          }
        }
      }
    }

    // 플레이어 턴 초기화
    setPlayerTurn(0);

    // 플레이어가 공격했으면 다음 턴으로 넘어감
    if (nowIdx < 6) {
      setNowIdx(nowIdx + 1);
    } else {
      setNowIdx(0);
    }
    // 현재 몇 번재 턴인지 출력
    console.log('내가 방금 공격한 턴', nowIdx);
  };

  // 회피여부 판단하는 함수
  const calculateDodge = (avoid) => {
    const randomPercent = Math.floor(Math.random() * 100);
    if (randomPercent <= avoid) {
      console.log('운 좋게 피함 ㅅㄱㅇ');
      return 0;
    }
    console.log('넌 그냥 맞아라 회피 못했다.');
    return 1;
  };

  return (
    <MainContainer>
      <BattleContainer>
        <Battle
          characters={characters}
          monsters={monsters}
          selectedCh={selectedCh}
          clickCh={clickCh}
          clickMonster={clickMonster}
          nowTurn={nowTurn}
          stageStep={stageStep}
        />
      </BattleContainer>
      <BottomContainer>
        <LeftContainer>
          {(selectedCh === 0) | selectedCh ? (
            <Information
              character={characters[selectedCh]}
              selectedSkill={selectedSkill}
              setSelectedSkill={setSelectedSkill}
              clickSkill={clickSkill}
            ></Information>
          ) : (
            <div>캐릭터를 클릭하여 능력치와 스킬을 확인하세요</div>
          )}
        </LeftContainer>

        <RightContainer>
          {msg.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </RightContainer>
      </BottomContainer>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const BattleContainer = styled.div`
  width: 100%;
  height: 70%;

  background-image: url(${({ theme }) => `${theme.battleBgImg}`});
  background-size: cover;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: 30%;

  color: black;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  width: 50%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: black;
  width: 50%;
`;
