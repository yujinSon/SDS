const api = function (type, options = {}) {
  const apiObject = {
    // 사용자 인증 (카카오)
    login: ['/api/users', 'get'],

    // 게임 메인 페이지
    getRandomCh: ['/character/random/1', 'get'],
    getSelectedCh: ['/api/character/selected', 'get'], // 전투 승리했을 때 한 번 더 불러와야함 (스텟 찍기 전에)
    saveCh: ['/api/character/save', 'post'],

    // 맵 페이지
    loadMap: ['/api/map/load', 'get'],
    selectMap: ['/api/map/save', 'put'],
    saveStage: ['/api/stage/save', 'put'],

    // 전투 페이지
    loadStage: ['/api/stage/load', 'get'],
    enemysTurn: ['/api/battle/enemy', 'put'],
    playersTurn: ['/api/battle/player', 'post'],
    finishTurn: ['/api/battle/finished', 'put'],

    // 전투 끝난 거 알려주는 api 하나 더 필요함

    // 전투 승리 후 스텟 창
    changeStat: ['/api/battle/victory', 'put'],

    // 상점
    changeCh: ['/api/shop/change', 'put'],
    addCh: ['/api/shop/add', 'post'],
    rest: ['/api/shop/rest', 'put'],
    addItem: ['/api/shop/relic', 'post'],

    // 랭킹
    ranking: ['/api/result/ranking', 'get'],

    // 전투 승리 or 패배
    gameOver: ['/api/result/gameOver', 'get'],
    clearPut: ['/api/result/clear', 'put'],
    clearDelete: ['/api/result/clear', 'delete'],
  };

  return apiObject[type];
};

export default api;
