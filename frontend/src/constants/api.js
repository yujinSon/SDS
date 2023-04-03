const api = function (type, options = {}) {
  const apiObject = {
    // 회원가입
    signup: ['users/join', 'post'],
    login: ['uesrs/login', 'post'],

    // 새로운 게임 시작
    newGame: ['users/newgame', 'post'],

    // 게임 메인 페이지
    getRandomCh: ['/character/random', 'get'],
    getSelectedCh: ['/character/selected', 'get'], // 전투 승리했을 때 한 번 더 불러와야함 (스텟 찍기 전에)
    saveCh: ['/character/save', 'post'],
    getRelic: ['/users/relic', 'get'],

    // 전투 페이지
    loadStage: ['/stage/load', 'get'],
    enemysTurn: ['/battle/enemy', 'put'],
    playersTurn: ['/battle/player', 'post'],
    finishTurn: ['/battle/finished', 'put'],

    // 캐릭터 or 빌런 전멸로 전투 종료
    endBattle: ['/battle/end', 'delete'],

    // 전투 승리 후 스텟 창
    changeStat: ['character/addstat', 'put'],

    // 상점
    changeCh: ['/shop/change', 'put'],
    addCh: ['/shop/add', 'post'],
    rest: ['/shop/rest', 'put'],
    addItem: ['/shop/relic', 'post'],

    // 전투 승리 or 패배
    stepClear: ['/result/win', 'put'],
    gameOver: ['/result/gameover', 'put'],
    clearPut: ['/result/clear', 'put'],
    clearDelete: ['/result/clear', 'delete'],
  };

  return apiObject[type];
};

export default api;
