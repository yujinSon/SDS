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
  '환경운동가 유진': {
    subClassName: '환경운동가 유진',
    skillNames: ['일반 공격', '양치컵 사용', '세탁망 사용'],
    skillImgs: [Skill0, 양치컵사용, 세탁망사용],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '상당한 양의 물을 절약할 수 있다.',
      '미세섬유를 걸러내 수질오염을 방지한다.',
    ],
  },
  '환경지킴이 유진': {
    subClassName: '환경지킴이 유진',
    skillNames: ['일반 공격', '지하철 이용', '버스 이용'],
    skillImgs: [Skill0, 지하철이용, 버스이용],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '대중교통을 이용하여 탄소배출을 줄여보자',
      '대중교통을 이용하여 탄소배출을 줄여보자',
    ],
  },

  '안보전문가 용찬': {
    subClassName: '안보안보전문가 용찬',
    skillNames: ['일반 공격', '안보의식 향상', '정보 보호 강화'],
    skillImgs: [Skill0, 안보의식향상, 정보보호강화],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '안보에 가장 중요한것은 국민의 의식이다.',
      '보안이 필요한 자료들을 잘 보호하자.',
    ],
  },
  '군인 용찬': {
    subClassName: '군인 용찬',
    skillNames: ['일반 공격', '간첩 신고', '관련 기술 협력'],
    skillImgs: [Skill0, 간첩신고, 관련기술협력],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '간첩신고는 112 혹은 113',
      '기술의 혁신도 안보를 지키는데 이어질 수 있다.',
    ],
  },
  '질병관리자 민수': {
    subClassName: '질병관리자 민수',
    skillNames: ['일반 공격', '손 씻기', '마스크 착용'],
    skillImgs: [Skill0, 손씻기, 마스크착용],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '감염병 예방의 기초',
      '비말을 통한 감염전파를 막아준다.',
    ],
  },
  '질병전문가 민수': {
    subClassName: '질병전문가 민수',
    skillNames: ['일반 공격', '익힌 음식 먹기', '예방 접종'],
    skillImgs: [Skill0, 익힌음식먹기, 예방접종],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '식중독 예방에 탁월하다.',
      '예방 뿐만아니라 감염후에도 도움이 된다.',
    ],
  },
  '사회전문가 정빈': {
    subClassName: '사회전문가 정빈',
    skillNames: ['일반 공격', '가벼운 운동', '소화기 사용법 숙지'],
    skillImgs: [Skill0, 가벼운운동, 소화기사용법숙지],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '맑은 정신은 건강한 몸에서 나온다.',
      '화재 발생시 큰 도움이 된다.',
    ],
  },
  '사회학 교수 정빈': {
    subClassName: '사회학 교수 정빈',
    skillNames: ['일반 공격', '안전벨트 착용', '정속 주행'],
    skillImgs: [Skill0, 안전벨트착용, 정속주행],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '권고가 아닌 필수',
      '과속의 인한 교통사고 발생률은 14배',
    ],
  },
  '경찰관 병진': {
    subClassName: '경찰관 병진',
    skillNames: ['일반 공격', '개인 보안 강화', '올바른 신고정신 강화'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '개인 보안 강화',
      '올바른 신고정신 강화',
    ],
  },
  '프로파일러 병진': {
    subClassName: '프로파일러 병진',
    skillNames: ['일반 공격', '범죄 예방교육', '올바른 시민 의식 강화'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  '인구문제에 심각한 민혁': {
    subClassName: '인구문제에 심각한 민혁',
    skillNames: ['일반 공격', '경각심 가지기', '관련 제도 확인'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  '생명지킴이 민혁': {
    subClassName: '생명지킴이 민혁',
    skillNames: ['일반 공격', '결혼 문화의 변화 인식', '어린이집 지원'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  '경제전문가 기성': {
    subClassName: '경제전문가 기성',
    skillNames: ['일반 공격', '지역상점 이용', '자기계발'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
  '경제학 교수 기성': {
    subClassName: '경제학 교수 기성',
    skillNames: ['일반 공격', '선거 참여', '직원 복지 개선'],
    skillImgs: [Skill0, Skill1, Skill2],
    skillDetails: [
      '평범한 공격이다. AD에 비례한 데미지를 입힌다.',
      '산좋고 물좋은 스킬~',
      'AP 계수로 짱 센 스킬',
    ],
  },
};

export default skillsPK;
