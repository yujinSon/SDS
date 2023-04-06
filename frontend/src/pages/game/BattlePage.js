import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import axios from 'libs/axios';
import api from 'constants/api';

// 버프 스킬 시전 시 msg에 띄울 변수가 영어여서 한글로 바꾸기 위한 js 파일
import statPK from 'constants/stat';

import Battle from 'components/game/Battle';
import Information from 'components/game/Information';

export default function BattlePage() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('token');

  // 게임이 지속적인가?? = 게임을 계속 진행해도 되는지
  let isGameing = true;

  // 흔들림 효과적용할 배열 True 면 흔들림 효과
  const [characterShaking, setCharacterShaking] = useState(
    Array(7).fill(false),
  );

  // 흔들림 효과 특정 단일 캐릭터 공격, 단일 빌런 공격
  const setSpecificCharacterShakingTrue = (indices) => {
    setCharacterShaking((prevCharacterShaking) => {
      const updatedCharacterShaking = [...prevCharacterShaking];
      indices.forEach((index) => {
        updatedCharacterShaking[index] = true;
      });
      return updatedCharacterShaking;
    });
  };

  const resetCharacterShaking = () => {
    setCharacterShaking(Array(7).fill(false));
  }


  // 스텟 변동 깜박임 효과
  const [dynamicStat, setdynamicStat] = useState(Array(7).fill(""));

  const setSpecificDynamicStat = (indices, stat, plusOrminus) => {
    setdynamicStat((prevDynamicStat) => {
      const updatedDynamicStat = [...prevDynamicStat];
      indices.forEach((index) => {
        updatedDynamicStat[index] = plusOrminus + " " + stat;
      });
      return updatedDynamicStat;
    });
  };

  // 커스텀 빌런의 전체 공격시
  const setCoustomDynamicStat = (indices, valueRes) => {
    setdynamicStat((prevDynamicStat) => {
      const updatedDynamicStat = [...prevDynamicStat];
      indices.forEach((index) => {
        if (valueRes[index] != -1) {
          if (valueRes[index] > 0) {
            updatedDynamicStat[index] = "- HP";
          } else {
            updatedDynamicStat[index] = "MISS";
          }
        } 
      });
      return updatedDynamicStat;
    });
  };


  const resetDynamicStat = () => {
    setdynamicStat(Array(7).fill(""));
  }



  // 스테이지, 캐릭터, 빌런 정보 state
  const [stageStep, setStageStep] = useState(null);
  const [characters, setCharacters] = useState(null);
  const [monsters, setMonsters] = useState(null);

  const [bgImg, setBgImg] = useState(null);

  // playerTurn이 2가 된 상태에서 몬스터를 클릭하면 공격하는 것으로 간주 (0, 1, 2)
  const [playerTurn, setPlayerTurn] = useState(0);
  // 클릭된 캐릭터의 인덱스
  const [selectedCh, setSelectedCh] = useState(null);
  // 클릭된 스킬의 인덱스
  const [selectedSkill, setSelectedSkill] = useState(null);

  // 캐릭터, 빌런의 speed 값을 계산하여 공격 턴을 정렬해둔 배열 state
  const [turnOrder, setTurnOrder] = useState(null);
  // 현재 턴인 pos
  const [nowTurn, setNowTurn] = useState(null);
  // turnOrder 배열의 인덱스  ex) **turnOrder[nowIdx]의 값은 nowTurn임**
  const [nowIdx, setNowIdx] = useState(0);

  // 전투 승리, 패배 시 띄울 Modal
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [showDefeatModal, setShowDefeactModal] = useState(false);

  const showVictoryModalRef = useRef(showVictoryModal);
  const showDefeatModalRef = useRef(showDefeatModal);


  // 공격 시마다 띄울 메시지
  const [msg, setMsg] = useState(['']);
  // 우측 하단 텍스트 부분에 최대로 띄울 메시지 갯수 (7이면 6개까지 띄울 수 있음)
  const textCnt = 8;
  const textLine = '---------------------------------------------------------';

  // 캐릭터 공격 시 '누가' 공격했고, '어떤 스킬'을 사용했는지 저장할 state
  const [who, setWho] = useState('');
  const [whichSkill, setWhichSkill] = useState('');
  // 캐릭터 공격 시 '어떤 빌런'에게 '어느 정도'의 데미지를 입혔는지를 저장할 state towhom과 amount는 캐릭터 -> 빌런 공격 시에 사용함
  const [toWhom, setToWhom] = useState('');
  const [amount, setAmount] = useState('');

  // 캐릭터 회복량 msg 관련 state
  const [chHeal, setChHeal] = useState('');
  const [chHealTowhom, setChHealTowhom] = useState('');

  // 캐릭터 버프 msg 관련 state
  const [chBuff, setChBuff] = useState('');
  const [chBuffTowhom, setChBuffTowhom] = useState('');
  const [chBuffStat, setChBuffStat] = useState('');

  // 몬스터가 skill 시전 시
  const [monsterWho, setMonsterWho] = useState('');
  const [monsterWhichSkill, setMonsterWhichSkill] = useState('');

  // 몬스터가 공격한 대상과 데미지
  const [monsterTowhom, setMonsterTowhom] = useState('');
  const [monsterAmount, setMonsterAmount] = useState('');
  // 몬스터가 사용한 디버프 스킬 종류와 데미지
  const [monsterDebuffAmount, setMonsterDebuffAmount] = useState('');
  const [monsterDebuffStat, setMonsterDebuffStat] = useState('');

  // 둘중 최솟값 구하는 함수
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  useEffect(() => {
    showVictoryModalRef.current = showVictoryModal;
  }, [showVictoryModal]);

  useEffect(() => {
    if (!stageStep) return;
    const bgImgPath = `battleBgImg${stageStep[0]}`;
    console.log(bgImgPath);
    setBgImg(bgImgPath);
  }, [stageStep]);

  // 전투페이지 입장 시 캐릭터, 빌런, 스테이지 불러와서 정보 저장
  useEffect(() => {
    const [url, method] = api('loadStage');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log('전투페이지 불러오기', res.data);
        setStageStep(res.data.nowStage);
        setCharacters(res.data.character);
        setMonsters(res.data.villain);
      })
      .catch((err) => {
        console.log(err, '전투페이지 불러오기 실패');
      });
  }, []);

  // 빌런이 공격시 띄울 msg useEffect들
  // '어떤 몬스터'가 '어떤 스킬'을 사용했는지에 관한 useEffect
  useEffect(() => {
    if ((monsterWho === '') | (monsterWhichSkill === '')) return;
    // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
    console.log(monsterWho, '몬스터 누가 공격했는지');
    let madeMsg = `${monsterWho}(이)가 ${monsterWhichSkill}을(를)  사용했다!`;

    // 만든 메시지를 기존 배열에 넣고 기준 길이보다 크면 뒤에서 pop하는 로직
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    setMonsterWho('');
    setMonsterWhichSkill('');
  }, [monsterWho, monsterWhichSkill]);

  // 몬스터가 '어떤 캐릭터'에게 '얼만큼의 데미지'를 입혔는지에 관한 useEffect
  useEffect(() => {
    if ((monsterTowhom === '') | (monsterAmount === '')) return;
    let madeMsg = '';
    if (monsterAmount !== 0) {
      madeMsg = `${monsterTowhom}(이)가 ${monsterAmount}의 데미지를 입었다!`;
    } else {
      madeMsg = `${monsterTowhom}(이)가 빌런의 공격을 회피했다.`;
    }

    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    // 초기화 (다음 로직 위해)
    setMonsterAmount('');
    setMonsterTowhom('');
  }, [monsterTowhom, monsterAmount]);

  // 몬스터가 '어떤 캐릭터'에게 '어떤 종류 디버프'를 '얼마만큼' 입혔는지에 관한 useEffect
  useEffect(() => {
    if (
      (monsterTowhom === '') |
      ((monsterDebuffAmount === '') | (monsterDebuffStat === ''))
    )
      return;
    let madeMsg = `${monsterTowhom}의 ${monsterDebuffStat}(이)가 ${monsterDebuffAmount}만큼 감소했다.`;

    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    // 초기화 (다음 로직 위해)
    setMonsterAmount('');
    setMonsterTowhom('');
    setMonsterDebuffStat('');
  }, [monsterTowhom, monsterDebuffAmount, monsterDebuffStat]);

  // 캐릭터가 공격할 때 띄우는 msg에 관한 useEffect ('어떤'캐릭터가 '어떤 스킬'을 사용했는지는 clickCh 함수에 구현되어있음 - 동기적 로직이므로)
  // 데미지와 데미지 받는 대상이 변경될 때 메시지 수정하는 useEffect
  useEffect(() => {
    if ((toWhom === '') | (amount === '')) return;
    let madeMsg = '';
    // 데미지가 0이면 회피했다는 의미 (다른 코드에서 이미 로직 처리 해서 0이면 회피)
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
    setToWhom('');
    setAmount('');
    console.log(madeMsg);
  }, [amount, toWhom]);

  // 캐릭터 힐 스킬 적용 메시지 useEffect
  useEffect(() => {
    if ((chHeal === '') | (chHealTowhom === '')) return;
    let madeMsg = `${chHealTowhom}(은)는 ${chHeal}만큼 hp가 회복되었다.`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    setChHeal('');
    setChHealTowhom('');
  }, [chHeal, chHealTowhom]);

  // 캐릭터 버프 스킬 적용 메시지 useEffect
  useEffect(() => {
    if ((chBuff === '') | (chBuffTowhom === '')) return;
    let madeMsg = `${chBuffTowhom}(은)는 ${chBuff}만큼 ${chBuffStat}(이)가 증가했다.`;
    let copy = [...msg];
    copy = [madeMsg, ...msg];
    if (copy.length >= textCnt) {
      copy.pop();
    }
    setMsg(copy);
    setChBuff('');
    setChBuffTowhom('');
  }, [chBuff, chBuffTowhom]);

  // speed에 따라 공격 turn 계산하기
  useEffect(() => {
    if (!characters | !monsters) return;
    // 턴 한 번만 처음 계산해줌 (nowIdx가 0인 경우에)
    if (nowIdx !== 0) return;

    // 턴 종료 (=새로운 턴 시작) 될 때 백에 알려줌
    const [url, method] = api('finishTurn');
    const config = {
      url,
      method,
      headers: {
        Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
      },
    };
    axios(config)
      .then((res) => {
        console.log('전체 한 턴 끝났다고 백에 알려줬음', res.data);
      })
      .catch((err) => {
        console.log('전체 한 턴 종료 에러', err);
      });

    // speed로 턴 계산 후 정렬
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
    console.log('12133131241242125235346');
    setNowTurn(turnOrder[0].pos);
  }, [turnOrder]);

  // 턴 순서에 따라서 공격 logic 실행
  useEffect(() => {
    if (!turnOrder) return;
    console.log(nowIdx, '현재 턴');
    console.log('turnOrder : ', turnOrder);
    setNowTurn(turnOrder[nowIdx].pos);
    setSelectedCh(-1);
    // console.log('현재 공격 pos', turnOrder[nowIdx]);
  }, [nowIdx]);

  // 캐릭터, 빌런 전멸 여부 체크
  useEffect(() => {
    if (!characters && !monsters) return;
    isGameing = false;

    if (characters.length === 0) {
      console.log('캐릭터 모두 사망함');

      // 캐릭터가 다 사망해서 api 보냄 (let으로 설정해서 나중에 오류 뜨면 수정해야함)
      let [url, method] = api('gameOver');
      let config = {
        url,
        method,
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
        },
      };
      axios(config)
        .then((res) => {
          console.log('캐릭터 사망 response:', res.data);
        })
        .catch((err) => {
          console.log('캐릭터 사망 err', err);
        });

      // 캐릭터 or 빌런이 다 죽어서 게임 끝
      [url, method] = api('endBattle');
      config = {
        url,
        method,
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
        },
      };
      axios(config)
        .then((res) => {
          console.log('캐릭터 전멸해서 게임 끝', res.data);
          setShowDefeactModal(!showDefeatModal);
        })
        .catch((err) => {
          console.log('endBattle 에러', err);
        });
    }

    if (monsters.length === 0) {
      console.log('몬스터 전멸함123');
      let [url, method] = api('endBattle');
      let config = {
        url,
        method,
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
        },
      };
      axios(config)
        .then((res) => {
          console.log('몬스터 전멸', res.data);
        })
        .catch((err) => {
          console.log('endBattle 에러', err);
        });

      [url, method] = api('stepClear');
      config = {
        url,
        method,
        headers: {
          Authorization: `Bearer ${token}`, // Authorization 헤더에 토큰을 넣어줍니다.
        },
      };
      axios(config)
        .then((res) => {
          console.log('몬스터 전멸', res.data);
          // 스테이지 클리어 시 살아있는 캐릭터의 수를 세션 스토리지에 저장
          sessionStorage.setItem('chCnt', characters.length);
          setShowVictoryModal(!showVictoryModal);
        })
        .catch((err) => {
          console.log('endBattle 에러', err);
        });
    }
  }, [characters, monsters]);

  // *** ``````````````````````````````빌런`````````````````````````````` 
  // 공격 로직 및 캐릭터 사망 시 턴 넘김 logic ***
  useEffect(() => {
    if (isGameing === false) {
      return
    }
    console.log(turnOrder, '빌런 공격 시의 turnOrder');
    // 캐릭터 공격 차례면 죽었는지 확인하고 Turn 넘기는 Logic 처리
    if (nowTurn < 3) {
      let myCharacter = 0;
      let found = false;
      if (characters) {
        for (let idx = 0; idx < characters.length; idx++) {
          if (characters[idx].pos === nowTurn) {
            console.log('체크요 : ', characters);
            myCharacter = characters[idx];
            console.log('현재 공격 턴인 캐릭터', myCharacter);
            found = true;
          }
        }
        // 캐릭터가 이미 죽어서 해당 nowTurn의 pos를 찾을 수 없으면 다음 턴으로 넘김
        if (found === false) {
          console.log('으아아아아아아아ㅏ아아아아아아');
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

      // 현재 빌런이 죽었으면 0, 죽지 않았으면 1 (found)
      let found = 0;
      // 현재 턴인 빌런의 idx
      let myMonster = 0;
      for (let idx = 0; idx < monsters.length; idx++) {
        if (monsters[idx].pos === nowTurn) {
          myMonster = monsters[idx];
          console.log('현재 공격 턴인 빌런', myMonster);
          found = 1;
        }
      }
      // 빌런 공격 시에 차례대로 보여주기 위해 setTimeout 함수 실행 (2초 간격)
      setTimeout(function () {
        if (showVictoryModalRef.current) return;
        if (showDefeatModalRef.current) return;

        // 몬스터가 이미 죽어서 해당 nowTurn의 pos를 찾을 수 없으면 다음 턴으로 넘김
        if (found === 0) {
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

        console.log('빌런 스킬 사용 직전 state 바로 앞');

        let monsterName = myMonster.subName; // 텍스트 출력용
        let monsterUsedSKill = mySkill.skillName; // 텍스트 출력용

        // 몬스터가 공격할 대상이 캐릭터인 경우 (1이면 캐릭터 if 문 실행, 0이면 몬스터이므로 pass)
        if (mySkill.skillTarget === 1) {
          let damage = mySkill.value;

          // 치명타 관련 로직
          const randomPercent = Math.floor(Math.random() * 100);
          if (randomPercent <= myMonster.critical) {
            const criticalPercent = Math.random() + 1;
            damage = Math.floor(criticalPercent * damage);
            // console.log('빌런의 크리티컬 데미지', damage);
          }

          let data = {};
          // 몬스터의 스킬이 전체 공격일 경우
          if (mySkill.range === true) {
            data = {
              target: 3, // 전체공격
              damage: damage,
              skillName: mySkill.skillName,
            };
            // 몬스터의 스킬이 단일 공격일 경우
          } else {
            // 몬스터가 공격할 캐릭터의 pos를 랜덤으로 가져옴
            const chIdx = Math.floor(Math.random() * characters.length);
            data = {
              target: characters[chIdx].pos,
              damage: damage,
              skillName: mySkill.skillName,
            };
          }

          const [url, method] = api('enemysTurn');
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
              console.log('빌런 공격 결과', res.data);
              //
              const valueRes = res.data.valueRes;
              let copy = [];
              for (let ch of res.data.myCharacter) {
                if (ch.hp > 0) {
                  copy.push(ch);
                }
              }
              setCharacters(copy);

              // 빌런의 스킬이 공격 스킬일 때 (데미지)
              if (mySkill.stat === 'hp') {
                if (mySkill.range === true) {
                  // 전체 스킬인경우

                  setCoustomDynamicStat([0,1,2], valueRes)

                  setTimeout(() => {
                    resetDynamicStat();
                  }, 1500);

                  const makeMsg = function (
                    monsterName,
                    monsterUsedSKill,
                    characters,
                    valueRes,
                  ) {
                    let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
                    let copy = [firstMsg, textLine, ...msg];

                    for (let i = 0; i < 3; i++) {
                      if (valueRes[i] !== -1) {
                        for (let ch of characters) {
                          if (ch.pos === i) {
                            if (valueRes[i] > 0) {
                              let secMsg = `${ch.subName}(이)가 ${valueRes[i]}만큼의 데미지를 받았다.`;
                              copy = [secMsg, ...copy];
                            } else {
                              let secMsg = `${ch.subName}(이)가 공격을 회피했다.`;
                              copy = [secMsg, ...copy];
                            }
                          }
                        }
                      }
                    }

                    if (copy.length >= textCnt) {
                      copy.pop();
                    }
                    setMsg(copy);
                  };
                  makeMsg(monsterName, monsterUsedSKill, characters, valueRes);

                  setSpecificCharacterShakingTrue([0, 1, 2]);
                  setTimeout(() => {
                    resetCharacterShaking();
                  }, 500);
                } else {
                  // 단일 스킬

                  setSpecificDynamicStat([data.target], "HP", "-")

                  setTimeout(() => {
                    resetDynamicStat();
                  }, 1500);


                  let targetCharacter = '';
                  for (let ch of characters) {
                    if (data.target == ch.pos) {
                      targetCharacter = ch.subName;
                    }
                  }

                  setSpecificCharacterShakingTrue([data.target]);
                  setTimeout(() => {
                    resetCharacterShaking();
                  }, 500);

                  const makeMsg = function (
                    monsterName,
                    monsterUsedSKill,
                    characters,
                    valueRes,
                  ) {
                    let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
                    let copy = [firstMsg, textLine, ...msg];

                    for (let ch of characters) {
                      if (valueRes[ch.pos] > 0) {
                        let secMsg = `${ch.subName}(이)가 ${
                          valueRes[ch.pos]
                        }만큼의 데미지를 받았다`;
                        copy = [secMsg, ...copy];
                      } else if (valueRes[ch.pos] === 0) {
                        let secMsg = `${ch.subName}(이)가 공격을 회피했다.`;
                        copy = [secMsg, ...copy];
                      }
                    }

                    if (copy.length >= textCnt) {
                      copy.pop();
                    }

                    setMsg(copy);
                  };
                  makeMsg(monsterName, monsterUsedSKill, characters, valueRes);
                }
              } // 빌런의 스킬이 디버프 스킬일 때
              else {
                let reciveValue = mySkill.value;
                let effectStat = statPK[mySkill.stat];

                if (mySkill.range === true) {
                  // 전체 스킬인경우


                  setSpecificDynamicStat([0,1,2], mySkill.stat.toUpperCase(), "-")

                  setTimeout(() => {
                    resetDynamicStat();
                  }, 1500);

                  const makeMsg = function (
                    monsterName,
                    monsterUsedSKill,
                    reciveValue,
                    effectStat,
                    characters,
                  ) {
                    let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
                    let copy = [firstMsg, textLine, ...msg];

                    for (let ch of characters) {
                      let secMsg = `${ch.subName}의 ${effectStat}(이)가 ${reciveValue}만큼 감소했다.`;
                      copy = [secMsg, ...copy];
                    }

                    if (copy.length >= textCnt) {
                      copy.pop();
                    }
                    setMsg(copy);
                  };
                  makeMsg(
                    monsterName,
                    monsterUsedSKill,
                    reciveValue,
                    effectStat,
                    characters,
                  );
                } else {
                  // 단일 스킬인 경우
                  let targetCharacter = '';
                  for (let ch of characters) {
                    if (data.target == ch.pos) {
                      targetCharacter = ch.subName;
                    }
                  }

                  setSpecificDynamicStat([data.target], mySkill.stat.toUpperCase(), "-")

                  setTimeout(() => {
                    resetDynamicStat();
                  }, 1500);

                  const makeMsg = function (
                    monsterName,
                    monsterUsedSKill,
                    targetCharacter,
                    reciveValue,
                    effectStat,
                  ) {
                    let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
                    let copy = [firstMsg, textLine, ...msg];

                    let secMsg = `${targetCharacter}의 ${effectStat}(이)가 ${reciveValue}만큼 감소했다.`;

                    copy = [secMsg, firstMsg, ...msg];
                    if (copy.length >= textCnt) {
                      copy.pop();
                    }
                    setMsg(copy);
                  };
                  makeMsg(
                    monsterName,
                    monsterUsedSKill,
                    targetCharacter,
                    reciveValue,
                    effectStat,
                  );
                }
              }

              if (isGameing === false) {
                return
              }

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

            setSpecificDynamicStat([3,4,5,6], "HP", "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);

            const makeMsg = function (
              monsterName,
              monsterUsedSKill,
              reciveValue,
              monsters,
            ) {
              let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
              let copy = [' ', ...msg];
              copy = [firstMsg, textLine, ...msg];

              for (let ms of monsters) {
                let secMsg = `${ms.subName}의 체력이 ${reciveValue}만큼 회복됐다.`;
                copy = [secMsg, ...copy];
              }

              if (copy.length >= textCnt) {
                copy.pop();
              }
              setMsg(copy);
            };
            makeMsg(monsterName, monsterUsedSKill, healAmount, monsters);

            // 빌런 한 마리에게 힐 스킬 적용
          } else {
            // 몬스터에서 피 가장 적은 애한테 힐 스킬 적용
            console.log('빌런의 단일 회복 스킬!!!');

            let minHpMonsterPos = -1;
            let minValue = 999999999;
            let targetMonsterName = '';
            for (let monster of monsters) {
              if (minValue > monster.hp) {
                minValue = monster.hp;
                minHpMonsterPos = monster.pos;
                targetMonsterName = monster.subName;
              }
            }

            setSpecificDynamicStat([minHpMonsterPos], "HP", "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);


            for (let monster of monsters) {
              if (minHpMonsterPos === monster.pos) {
                monster.hp = min(monster.hp + healAmount, monster.maxHp);
              }
            }

            const makeMsg = function (
              monsterName,
              monsterUsedSKill,
              healAmount,
              targetMonsterName,
            ) {
              let firstMsg = `${monsterName}(이)가 ${monsterUsedSKill}을(를)  사용했다!`;
              let copy = [firstMsg, textLine, ...msg];

              let secMsg = `${targetMonsterName}의 체력이 ${healAmount}만큼 회복됐다.`;
              copy = [secMsg, ...copy];

              if (copy.length >= textCnt) {
                copy.pop();
              }
              setMsg(copy);
            };
            makeMsg(
              monsterName,
              monsterUsedSKill,
              healAmount,
              targetMonsterName,
            );
          }
          if (nowIdx < turnOrder.length - 1) {
            setNowIdx(nowIdx + 1);
          } else {
            setNowIdx(0);
          }
        }
      }, 2000 * found);
    }
  }, [nowTurn]);

  const clickCh = async (ch) => {
    // 버프 주는 거임
    console.log("버 프 나 힐 주는 것")
    if (playerTurn === 2) {
      console.log('옛다 버프다~');

      let madeMsg = `${who}(이)가 ${whichSkill}을(를)  사용했다!`;
      let copy = [madeMsg, textLine, ...msg];
      if (copy.length >= textCnt) {
        copy.pop();
      }
      setMsg(copy);

      // chIdx는 턴을 진행중인 캐릭터의 인덱스
      let chIdx = 0;
      for (let idx = 0; idx < characters.length; idx++) {
        if (characters[idx].pos === nowTurn) {
          chIdx = idx;
          break;
        }
      }

      // 턴을 진행중인 캐릭터가 사용할 스킬
      let usedSkill = characters[chIdx].skills[selectedSkill];
      // 스킬의 대상이 캐릭터일 때 (회복, 버프)
      if (usedSkill.skillTarget === 1) {
        // 회복 스킬일 경우
        if (usedSkill.stat === 'hp') {
          const chHealFactor =
            characters[chIdx][characters[chIdx].skills[selectedSkill].factor];
          const healValue = characters[chIdx].skills[selectedSkill].value;
          let healAmount = parseInt((chHealFactor * healValue) / 100);
          console.log(healAmount, '스킬 회복량');

          const healRange = characters[chIdx].skills[selectedSkill].range;
          // 전체회복
          if (healRange === true) {
            setSpecificDynamicStat([0,1,2], "HP", "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);

            for (let idx = 0; idx < characters.length; idx++) {
              setChHeal(healAmount);
              setChHealTowhom(characters[idx].subName);
              await new Promise((resolve) => setTimeout(resolve, 0));
            }
          } // 단일 회복
          else {
            setSpecificDynamicStat([ch.pos], "HP", "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);

            setChHeal(healAmount);
            setChHealTowhom(ch.subName);
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        } else {
          // 버프 스킬일 경우
          const chBuffFactor =
            characters[chIdx][characters[chIdx].skills[selectedSkill].factor];
          const buffValue = characters[chIdx].skills[selectedSkill].value;
          let buffAmount = parseInt((chBuffFactor * buffValue) / 100);
          console.log(buffAmount, '버프 증가량');

          const buffRange = characters[chIdx].skills[selectedSkill].range;
          // 전체
          if (buffRange === true) {

            setSpecificDynamicStat([0,1,2], characters[chIdx].skills[selectedSkill].stat.toUpperCase(), "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);

            for (let idx = 0; idx < characters.length; idx++) {
              setChBuffStat(statPK[usedSkill.stat]);
              setChBuff(buffAmount);
              setChBuffTowhom(characters[idx].subName);
              await new Promise((resolve) => setTimeout(resolve, 0));
            }
          } // 단일 회복
          else {
            setSpecificDynamicStat([ch.pos], characters[chIdx].skills[selectedSkill].stat.toUpperCase(), "+")

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);

            setChBuffStat(statPK[usedSkill.stat]);
            setChBuff(buffAmount);
            setChBuffTowhom(ch.subName);
            await new Promise((resolve) => setTimeout(resolve, 0));
          }
        }
        const data = {
          // 스킬 사용 시전자의 pos
          pos: nowTurn,
          skillName: characters[chIdx].skills[selectedSkill].skillName,
          // 스킬을 적용시킬 대상의 pos - 전체면 3 (ch.pos)
          target: characters[selectedCh].skills[selectedSkill].range
            ? 3
            : ch.pos,
        };
        console.log(data, '회복스킬 시전 시 보낼 data');
        const [url, method] = api('playersTurn');
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
            console.log('버프 요청 axios', res.data);
            // 새롭게 업데이트 된 캐릭터 정보 저장
            setCharacters(res.data);
          })
          .catch((err) => {});

        setPlayerTurn(0);
        if (nowIdx < turnOrder.length - 1) {
          setNowIdx(nowIdx + 1);
        } else {
          setNowIdx(0);
        }
      } else {
        alert('스킬 타겟을 잘못 설정하였습니다.');
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
    // 몬스터를 세 번째로 클릭하지 않으면 함수 종료 (1번째는 반드시 캐릭터, 2번째는 반드시 스킬이어야 함)
    if (playerTurn == 2) {

      // 사용자가 사용할 스킬
      const mySkill = characters[selectedCh].skills[selectedSkill];
      // 현재 턴인 캐릭터의 객체 정보
      const myCharacter = characters[selectedCh];

      if (mySkill.skillTarget === 1) {
        alert('스킬 타겟을 잘못 설정하였습니다.');
        return
      }

      let chIdx = 0;
      for (let idx = 0; idx < characters.length; idx++) {
        if (characters[idx].pos === nowTurn) {
          chIdx = idx;
          break;
        }
      }

      // 오른쪽 아래 출력 메시지 생성 (사용 캐릭터, 사용 스킬)
      let madeMsg = `${who}(이)가 ${whichSkill}을(를)  사용했다!`;
      let copy = [madeMsg, textLine, ...msg];
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

      // 선택된 스킬의 기본 쿨타임이 0이 아니어서 백쪽에서 쿨타임을 관리해야할 경우 (쿨타임이 0이면 스킬 쿨타임이 없다는 의미)
      if (characters[chIdx].skills[selectedSkill].coolTime !== 0) {
        const [url, method] = api('playersTurn');
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
            console.log('스킬 쿨타임 용 API 요청 성공', res.data);
            // 쿨타임 새롭게 업데이트 된 캐릭터 정보 저장
            setCharacters(res.data);
          })
          .catch((err) => {
            console.log(err, '캐릭터 쿨타임 API 요청 실패');
          });
      }

      // 스킬의 적용 대상이 빌런일 경우
      if (mySkill.skillTarget === 0) {
        let factorStat = myCharacter[mySkill.factor];
        let damage = parseInt((factorStat * mySkill.value) / 100);

        const randomPercent = Math.floor(Math.random() * 100);
        // console.log('랜덤', randomNum);
        if (randomPercent <= myCharacter.critical) {
          console.log('크리티컬 데미지가 적용되었습니다.');
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
            console.log(afterHp, '남은 체력')

            setAmount(eachDamage);
            setToWhom(monsters[idx].subName);
            setSpecificCharacterShakingTrue([3, 4, 5, 6]);

            if (eachDamage > 0) {
              setSpecificDynamicStat([monsters[idx].pos], "HP", "-")
            } else {
              setSpecificDynamicStat([monsters[idx].pos], "MISS!", "")
            }


            // 섹시해 chatGPT ㅎㅅㅎ

            await new Promise((resolve) => setTimeout(resolve, 0));
          }

            setTimeout(() => {
              resetDynamicStat();
            }, 1500);


          // hp가 0이하로 떨어져서 사망한 경우
          for (let i = 0; i < copy.length; i++) {
            if (copy[i].hp > 0) {
              tmp.push(copy[i]);
            }
          }
          setTimeout(() => {
            setMonsters(tmp);
          }, 500);
        }
        // 단일 스킬인 경우
        else {

          for (let idx = 0; idx < monsters.length; idx++) {
            if (monsters[idx].pos === pos) {
              console.log(monsters[idx].hp, '이전 체력');
              // 회피했는지 아닌지 계산
              damage *= calculateDodge(monsters[idx].avoid);
              const afterHp = monsters[idx].hp - damage;

              if (damage > 0) {
                setSpecificDynamicStat([pos], "HP", "-")
              } else {
                setSpecificDynamicStat([pos], "MISS!", "")
              }

              setTimeout(() => {
                resetDynamicStat();
              }, 1500);

              // 메시지 띄울 데미지랑 대상 업데이트
              setAmount(damage);
              setToWhom(monsters[idx].subName);
              setSpecificCharacterShakingTrue([pos]);

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

                setTimeout(() => {
                  setMonsters(tmp);
                }, 500);
                // setMonsters(tmp);
                // hp가 달았지만 그래도 0이상인 경우
              } else {
                copy[idx].hp = afterHp;
                setMonsters(copy);
              }
              break;
            }
          }
        }

        setTimeout(() => {
          resetCharacterShaking();
        }, 300);
        
        console.log("버그 확인 : ", monsters)
        if (showVictoryModalRef.current) return;
 

        console.log("showVictoryModal : ", showVictoryModal)
        if (showVictoryModal == true) {
          return;
        }

        // 플레이어 턴 초기화
        setPlayerTurn(0);
        setTimeout(() => {
          // 플레이어가 공격했으면 다음 턴으로 넘어감
        if (nowIdx < turnOrder.length - 1) {
          setNowIdx(nowIdx + 1);
        } else {
          setNowIdx(0);
        }
        // 현재 몇 번재 턴인지 출력
        console.log('내가 방금 공격한 턴', nowIdx);
        }, 1000)

      } else {
        alert('스킬 타겟을 잘못 설정하였습니다.');
      }      

    }
  };

  // 회피여부 판단하는 함수
  const calculateDodge = (avoid) => {
    const randomPercent = Math.floor(Math.random() * 100);
    if (randomPercent <= avoid) {
      console.log('몬스터가 캐릭터의 공격을 회피했습니다.');
      return 0;
    }
    console.log('몬스터가 캐릭터의 공격을 회피하지 못했습니다.');
    return 1;
  };

  return (
    <MainContainer>
      <BattleContainer bgImg={bgImg}>
        <Battle
          characters={characters}
          monsters={monsters}
          selectedCh={selectedCh}
          clickCh={clickCh}
          clickMonster={clickMonster}
          nowTurn={nowTurn}
          stageStep={stageStep}
          showVictoryModal={showVictoryModal}
          showDefeatModal={showDefeatModal}
          characterShaking = {characterShaking}
          dynamicStat = {dynamicStat}
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
            <NoneSelectBox>
              캐릭터를 클릭하여 능력치와 스킬을 확인하세요.
            </NoneSelectBox>
          )}
        </LeftContainer>

        <RightContainer>
          <TextBox>
            <AttackResult>
              {msg.map((message, idx) => (
                <div key={idx}>{message}</div>
              ))}
            </AttackResult>
          </TextBox>
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

  background-image: url(${({ theme, bgImg }) => `${theme[`${bgImg}`]}`});

  background-position: center bottom;
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
  height: 100%;
`;

const RightContainer = styled.div`
  background-color: brown;
  background-color: rgba(189, 189, 189, 0.7);
  display: flex;
  flex-direction: column;

  color: #333;
  width: 50%;
  height: 100%;
`;

const AttackResult = styled.div`
  background-color: red;
  background-color: rgba(93, 93, 93, 0.5);
  border-radius: 10px;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.7rem;
`;

const TextBox = styled.div`
  padding: 1rem;
  height: 100%;
  overflow-y: auto;
`;

const NoneSelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(189, 189, 189, 0.7);
  height: 100%;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
`;
