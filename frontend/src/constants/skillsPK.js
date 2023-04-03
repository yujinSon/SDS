import Skill0 from 'assets/img/basicskill.png';
import Skill1 from 'assets/img/skill1.png';
import Skill2 from 'assets/img/skill2.png';

import 양치컵사용 from 'assets/img/skills/양치컵 사용.png';
import 세탁망사용 from 'assets/img/skills/세탁망 사용.png';
import 지하철이용 from 'assets/img/skills/지하철 이용.png';
import 버스이용 from 'assets/img/skills/버스 이용.png';

import 안보의식향상 from 'assets/img/skills/안보의식 향상.png';
import 정보보호강화 from 'assets/img/skills/정보 보호 강화.png';
import 간첩신고 from 'assets/img/skills/간첩 신고.png';
import 관련기술협력 from 'assets/img/skills/관련 기술 협력.png';

import 손씻기 from 'assets/img/skills/손 씻기.png';
import 마스크착용 from 'assets/img/skills/마스크 착용.png';
import 익힌음식먹기 from 'assets/img/skills/익힌 음식 먹기.png';
import 예방접종 from 'assets/img/skills/예방 접종.png';

import 가벼운운동 from 'assets/img/skills/가벼운 운동.png';
import 소화기사용법숙지 from 'assets/img/skills/소화기 사용법 숙지.png';
import 안전벨트착용 from 'assets/img/skills/안전벨트 착용.png';
import 정속주행 from 'assets/img/skills/정속 주행.png';

const skillsPK = {
  환경병진: {
    subClassName: '환경병진',
    skillNames: ['병진스킬1', '양치컵 사용', '세탁망 사용'],
    skillImgs: [Skill0, 양치컵사용, 세탁망사용],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  환경병진2: {
    subClassName: '안보병진',
    skillNames: ['병진스킬1', '지하철 이용', '버스 이용'],
    skillImgs: [Skill0, 지하철이용, 버스이용],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },

  안보병진: {
    subClassName: '안보병진',
    skillNames: ['병진스킬1', '안보의식 향상', '정보 보호 강화'],
    skillImgs: [Skill0, 안보의식향상, 정보보호강화],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  안보병진2: {
    subClassName: '안보병진',
    skillNames: ['병진스킬1', '간첩 신고', '관련 기술 협력'],
    skillImgs: [Skill0, 간첩신고, 관련기술협력],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  질병병진: {
    subClassName: '질병병진',
    skillNames: ['병진스킬1', '손 씻기', '마스크 착용'],
    skillImgs: [Skill0, 손씻기, 마스크착용],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  질병병진2: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '익힌 음식 먹기', '예방 접종'],
    skillImgs: [Skill0, 익힌음식먹기, 예방접종],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  사회병진: {
    subClassName: '사회병진',
    skillNames: ['병진스킬1', '가벼운 운동', '소화기 사용법 숙지'],
    skillImgs: [Skill0, 가벼운운동, 소화기사용법숙지],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  사회병진2: {
    subClassName: '사회병진2',
    skillNames: ['병진스킬1', '안전벨트 착용', '정속 주행'],
    skillImgs: [Skill0, 안전벨트착용, 정속주행],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  범죄병진: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  범죄병진2: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  인구병진: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  인구병진2: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  경제병진: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  경제병진2: {
    subClassName: '질병병진2',
    skillNames: ['병진스킬1', '병진스킬2', '병진스킬3'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '이 스킬은 병진햄의 원기로 모아진~',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
};

export default skillsPK;
