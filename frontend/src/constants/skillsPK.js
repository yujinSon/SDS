import 기본공격 from 'assets/img/skills/기본공격.png';
import 쿨타임 from 'assets/img/skills/쿨타임.PNG';

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

import 개인보안강화 from 'assets/img/skills/개인 보안 강화.jpg';
import 올바른신고정신강화 from 'assets/img/skills/올바른 신고정신 강화.jpg';
import 범죄예방교육 from 'assets/img/skills/범죄 예방교육.jpg';
import 올바른시민의식강화 from 'assets/img/skills/올바른 시민 의식 강화.jpg';

import 경각심가지기 from 'assets/img/skills/경각심 가지기.jpg';
import 관련제도확인 from 'assets/img/skills/관련 제도 확인.jpg';
import 결혼문화의변화인식 from 'assets/img/skills/결혼 문화의 변화 인식.jpg';
import 어린이집지원 from 'assets/img/skills/어린이집 지원.jpg';

import 지역상점이용 from 'assets/img/skills/지역상점 이용.jpg';
import 자기계발 from 'assets/img/skills/자기계발.jpg';
import 선거참여 from 'assets/img/skills/선거 참여.jpg';
import 직원복지개선 from 'assets/img/skills/직원 복지 개선.jpg';

const skillsPK = {
  0: 쿨타임,
  '환경운동가 유진': {
    subClassName: '환경운동가 유진',
    skillNames: ['일반 공격', '양치컵 사용', '세탁망 사용'],
    skillImgs: [기본공격, 양치컵사용, 세탁망사용],
    skillDetails: [
      '평범한 공격이다.',
      '상당한 양의 물을 절약할 수 있다.',
      '미세섬유를 걸러내 수질오염을 방지한다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한 명의 체력을 회복시킨다. hp * 50%',
      '한 명의 회피율을 올려준다. hp * 5% 3턴',
    ],
  },
  '환경지킴이 유진': {
    subClassName: '환경지킴이 유진',
    skillNames: ['일반 공격', '지하철 이용', '버스 이용'],
    skillImgs: [기본공격, 지하철이용, 버스이용],
    skillDetails: [
      '평범한 공격이다.',
      '대중교통을 이용하여 탄소배출을 줄여보자',
      '대중교통을 이용하여 탄소배출을 줄여보자',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 HP를 회복시킨다. hp * 20%',
      '모두의 Speed를 올려준다. Hp * 10% 2턴',
    ],
  },

  '안보전문가 용찬': {
    subClassName: '안보안보전문가 용찬',
    skillNames: ['일반 공격', '안보의식 향상', '정보 보호 강화'],
    skillImgs: [기본공격, 안보의식향상, 정보보호강화],
    skillDetails: [
      '평범한 공격이다.',
      '안보에 가장 중요한것은 국민의 의식이다.',
      '보안이 필요한 자료들을 잘 보호하자.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 AD를 올려준다, AD*100% 2턴',
      '한명을 AD * 200% 로 공격한다.',
    ],
  },
  '군인 용찬': {
    subClassName: '군인 용찬',
    skillNames: ['일반 공격', '간첩 신고', '관련 기술 협력'],
    skillImgs: [기본공격, 간첩신고, 관련기술협력],
    skillDetails: [
      '평범한 공격이다.',
      '간첩신고는 112 혹은 113',
      '기술의 혁신도 안보를 지키는데 이어질 수 있다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명을 AD*400% 로 공격한다.',
      '모두를 AD*70% 로 공격한다.',
    ],
  },
  '질병관리자 민수': {
    subClassName: '질병관리자 민수',
    skillNames: ['일반 공격', '손 씻기', '마스크 착용'],
    skillImgs: [기본공격, 손씻기, 마스크착용],
    skillDetails: [
      '평범한 공격이다.',
      '감염병 예방의 기초',
      '비말을 통한 감염전파를 막아준다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '모두의  HP를 회복시킨다. AP*150%',
      '한명의 HP를 회복시킨다 최대HP * 80%',
    ],
  },
  '질병전문가 민수': {
    subClassName: '질병전문가 민수',
    skillNames: ['일반 공격', '익힌 음식 먹기', '예방 접종'],
    skillImgs: [기본공격, 익힌음식먹기, 예방접종],
    skillDetails: [
      '평범한 공격이다.',
      '식중독 예방에 탁월하다.',
      '예방 뿐만아니라 감염후에도 도움이 된다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 HP를 회복시킨다 최대HP * 80%',
      '한명을 AP*200% 로 공격한다.',
    ],
  },
  '사회전문가 정빈': {
    subClassName: '사회전문가 정빈',
    skillNames: ['일반 공격', '가벼운 운동', '소화기 사용법 숙지'],
    skillImgs: [기본공격, 가벼운운동, 소화기사용법숙지],
    skillDetails: [
      '평범한 공격이다.',
      '맑은 정신은 건강한 몸에서 나온다.',
      '화재 발생시 큰 도움이 된다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명을 AP*300% 로 공격한다.',
      '한명의 AP를 올린다. AP*50% 3턴',
    ],
  },
  '사회학 교수 정빈': {
    subClassName: '사회학 교수 정빈',
    skillNames: ['일반 공격', '안전벨트 착용', '정속 주행'],
    skillImgs: [기본공격, 안전벨트착용, 정속주행],
    skillDetails: [
      '평범한 공격이다.',
      '권고가 아닌 필수',
      '과속의 인한 교통사고 발생률은 14배',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 스피드를 올린다. AP*20% 2턴',
      '모두를 AP*100%로 공격한다.',
    ],
  },
  '경찰관 병진': {
    subClassName: '경찰관 병진',
    skillNames: ['일반 공격', '개인 보안 강화', '올바른 신고정신 강화'],
    skillImgs: [기본공격, 개인보안강화, 올바른신고정신강화],
    skillDetails: [
      '평범한 공격이다.',
      '악용되는걸 방지하자.',
      '범죄를 목격했다면 주저하지 않고..',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명을 AD*180% 로 공격한다.',
      '한명의 AD를 올린다. AD*250% 2턴',
    ],
  },
  '프로파일러 병진': {
    subClassName: '프로파일러 병진',
    skillNames: ['일반 공격', '범죄 예방교육', '올바른 시민 의식 강화'],
    skillImgs: [기본공격, 범죄예방교육, 올바른시민의식강화],
    skillDetails: [
      '평범한 공격이다.',
      '교육이 중요하며 기본이다.',
      '범죄없는 사회 만들기',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명을 AD*300% 로 공격한다.',
      '모두의 AD를 올려준다 AD*60% 2턴',
    ],
  },
  '인류애 민혁': {
    subClassName: '인류애 민혁',
    skillNames: ['일반 공격', '경각심 가지기', '관련 제도 확인'],
    skillImgs: [기본공격, 경각심가지기, 관련제도확인],
    skillDetails: [
      '평범한 공격이다.',
      '문제를 인지하는 것부터 출발이다.',
      '아이 관련 복지를 확인해보자',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '모두의 CRITICAL을 올려준다. HP*2% 1턴',
      '한명의 HP를 회복시킨다. HP*50%',
    ],
  },
  '생명지킴이 민혁': {
    subClassName: '생명지킴이 민혁',
    skillNames: ['일반 공격', '결혼 문화의 변화 인식', '어린이집 지원'],
    skillImgs: [기본공격, 결혼문화의변화인식, 어린이집지원],
    skillDetails: [
      '평범한 공격이다.',
      '다름을 인정하는 문화',
      '아이를 가진 부부에게 큰 힘이 된다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 AVOID 를 올린다. HP*5% 2턴',
      '모두의 HP를 회복시킨다. 최대HP*50%',
    ],
  },
  '경제전문가 기성': {
    subClassName: '경제전문가 기성',
    skillNames: ['일반 공격', '지역상점 이용', '자기계발'],
    skillImgs: [기본공격, 지역상점이용, 자기계발],
    skillDetails: [
      '평범한 공격이다.',
      '지역경제에 도움이 된다.',
      '높은 생산성으로 이어진다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명의 AD를 올린다. AP*100% 2턴',
      '한명을 AP*250%로 공격한다.',
    ],
  },
  '경제학교수 기성': {
    subClassName: '경제학교수 기성',
    skillNames: ['일반 공격', '선거참여', '직원 복지 개선'],
    skillImgs: [기본공격, 선거참여, 직원복지개선],
    skillDetails: [
      '평범한 공격이다.',
      '우리나라 발전을 위한 한 표',
      '직원복지는 곧 생산성으로 이어진다.',
    ],
    skillEffects: [
      '한명을 AD * 100% 로 공격한다.',
      '한명을 AD*250%로 공격한다.',
      '한명의 AP를 올린다. AD*100% 2턴',
    ],
  },
};

export default skillsPK;
