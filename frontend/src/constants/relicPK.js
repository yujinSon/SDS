import 미획득유물 from 'assets/img/relics/미획득유물.PNG';

import A303팀의가호 from 'assets/img/relics/3팀의가호.PNG';
import SSAFY7전8기 from 'assets/img/relics/7전8기.PNG';
import SSAFY명찰 from 'assets/img/relics/SSAFY명찰.PNG';
import 공공예절 from 'assets/img/relics/공공예절.PNG';
import 군사훈련 from 'assets/img/relics/군사훈련.PNG';

import 네티켓 from 'assets/img/relics/네티켓.PNG';
import 다회용품 from 'assets/img/relics/다회용품.PNG';
import 마스크 from 'assets/img/relics/마스크.PNG';
import 백신 from 'assets/img/relics/백신.PNG';
import 법전 from 'assets/img/relics/법전.PNG';

import 분리수거 from 'assets/img/relics/분리수거.PNG';
import 소년원 from 'assets/img/relics/소년원.PNG';
import 시간 from 'assets/img/relics/시간.PNG';
import 안전모 from 'assets/img/relics/안전모.PNG';
import 어린이집 from 'assets/img/relics/어린이집.PNG';

import 역사의식 from 'assets/img/relics/역사의식.PNG';
import 육아휴직 from 'assets/img/relics/육아휴직.PNG';
import 전기차 from 'assets/img/relics/전기차.PNG';
import 전쟁의아픔 from 'assets/img/relics/전쟁의아픔.PNG';
import 정규직채용 from 'assets/img/relics/정규직채용.PNG';

import 중소기업 from 'assets/img/relics/중소기업.PNG';
import 질병관리본부 from 'assets/img/relics/질병관리본부.PNG';
import 차별금지 from 'assets/img/relics/차별금지.PNG';
import 청년 from 'assets/img/relics/청년.PNG';

const relicPK = {
  0: {
    id: 0,
    relicName: '미획득 유물',
    relicImg: 미획득유물,
    relicDetail: '아직 유물을 획득하지 못했습니다.',
    relicEffect: '아직 유물을 획득하지 못했습니다.',
  },
  1: {
    id: 1,
    relicName: '분리수거',
    relicImg: 분리수거,
    relicDetail: '환경보호에 도움되는 분리수거',
    relicEffect: '환경 클래스의 HP를 600 올려준다.',
  },
  2: {
    id: 2,
    relicName: '전기차',
    relicImg: 전기차,
    relicDetail: '대기오염물질 및 온실가스 배출 감소 효과가 있다.',
    relicEffect: '환경클래스의  HP를 600 올려준다.',
  },
  3: {
    id: 3,
    relicName: '다회용품',
    relicImg: 다회용품,
    relicDetail: '일회용품 사용을 줄여보자.',
    relicEffect: 'HP 를 300 올려준다.',
  },
  4: {
    id: 4,
    relicName: '전쟁의 아픔',
    relicImg: 전쟁의아픔,
    relicDetail: '가슴아픈 역사를 잊지말자',
    relicEffect: '안보 클래스의 AD 를 100 올려준다.',
  },
  5: {
    id: 5,
    relicName: '군사훈련',
    relicImg: 군사훈련,
    relicDetail: '군인 여러분 감사합니다',
    relicEffect: '안보 클래스의 AD 를 100 올려준다.',
  },
  6: {
    id: 6,
    relicName: '역사의식',
    relicImg: 역사의식,
    relicDetail: '역사를 잊은 민족에게 미래는 없다.',
    relicEffect: 'AD 를 50 올려준다.',
  },
  7: {
    id: 7,
    relicName: '마스크',
    relicImg: 마스크,
    relicDetail: '비말을 통한 감염 방지한다.',
    relicEffect: '질병 클래스의 HP 를 600 올려준다.',
  },
  8: {
    id: 8,
    relicName: '질병관리본부',
    relicImg: 질병관리본부,
    relicDetail: '공중보건의료의 선진화를 목표로 한다.',
    relicEffect: '질병 클래스의 AP 를 80 올려준다.',
  },
  9: {
    id: 8,
    relicName: '백신',
    relicImg: 백신,
    relicDetail: '면역을 획득할 수 있는 안전한 방법이다.',
    relicEffect: 'HP 를 300 올려준다.',
  },
  10: {
    id: 10,
    relicName: '안전모',
    relicImg: 안전모,
    relicDetail: '안전의 기본, 안전장비 착용',
    relicEffect: '사회 클래스의 AP를 150 올려준다.',
  },
  11: {
    id: 11,
    relicName: '차별금지',
    relicImg: 차별금지,
    relicDetail: '틀린게 아닌 다름',
    relicEffect: '사회 클래스의 AP를 150 올려준다.',
  },
  12: {
    id: 12,
    relicName: '공공예절',
    relicImg: 공공예절,
    relicDetail: '조화로운 사회를 만들 수 있다.',
    relicEffect: 'AP를 80 올려준다.',
  },
  13: {
    id: 13,
    relicName: '소년원',
    relicImg: 소년원,
    relicDetail: '비행청소년 전문 교육기관이다.',
    relicEffect: '범죄 클래스의 AD를 100 올려준다.',
  },
  14: {
    id: 14,
    relicName: '네티켓',
    relicImg: 네티켓,
    relicDetail: '건전한 온라인 커뮤니케이션을 만들자',
    relicEffect: '사회 클래스의 Speed를 80 올려준다.',
  },
  15: {
    id: 15,
    relicName: '법전',
    relicImg: 법전,
    relicDetail: '사회질서를 유지하기 위한 구성원 간의 약속이다.',
    relicEffect: '전체 캐릭터의 Speed를 40 올려준다.',
  },
  16: {
    id: 16,
    relicName: '어린이집',
    relicImg: 어린이집,
    relicDetail: '맞벌이 부부들에게 큰 힘이 된다.',
    relicEffect: '인구 클래스의 HP를 300 올려준다.',
  },
  17: {
    id: 17,
    relicName: '육아휴직',
    relicImg: 육아휴직,
    relicDetail: '신생아 부모들을 위한 회사의 지원이다.',
    relicEffect: '인구 클래스의 Critical를 20% 올려준다.',
  },
  18: {
    id: 18,
    relicName: '정규직채용',
    relicImg: 정규직채용,
    relicDetail: '경제의 불안정은 출산율을 감소시킨다.',
    relicEffect: 'Critical 을 10% 올려준다.',
  },
  19: {
    id: 19,
    relicName: '청년',
    relicImg: 청년,
    relicDetail: '경제성장을 위해 가장 중요한 자원이다.',
    relicEffect: '경제 클래스의 AD를 150 올려준다.',
  },
  20: {
    id: 20,
    relicName: '시간',
    relicImg: 시간,
    relicDetail: '사회의 인재로 성장하기 위해 시간관리가 중요하다.',
    relicEffect: '경제 클래스의 AP를 230 올려준다.',
  },
  21: {
    id: 21,
    relicName: '중소기업',
    relicImg: 중소기업,
    relicDetail: '경제성장의 뿌리가 된다.',
    relicEffect: '회피율(Avoid)을 5% 올려준다.',
  },
  22: {
    id: 22,
    relicName: '3팀의 가호',
    relicImg: A303팀의가호,
    relicDetail: '3팀의 가호이다.',
    relicEffect: '회피율(Avoid)을 10% 상승',
  },
  23: {
    id: 23,
    relicName: 'SSAFY 명찰',
    relicImg: SSAFY명찰,
    relicDetail: '밥먹을 때 필요하다.',
    relicEffect: 'Critical 10% 상승',
  },
  24: {
    id: 24,
    relicName: '7전 8기',
    relicImg: SSAFY7전8기,
    relicDetail: '포기하지 않는 SSAFY 8기생',
    relicEffect: 'HP 1000 상승',
  },
};

export default relicPK;
