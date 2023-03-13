# Figma 구현
## MAP 구현

![MAP 페이지](/uploads/87233d456c7f2b8b64e1432503a8c856/image.png)

# API URL 작성
[![API_명세서_URL](/uploads/beeb04380e42119b0fa4cdab20c87450/API_명세서_URL.png)](https://www.notion.so/API-cf52aa1867a24314bffa4d182e644e20)

## API URL 구조

```
서버주소/api/
├── user
├── result/
│   ├── ranking
│   ├── gameOver/{userId}
│   └── clear/{userId}
├── character/
│   ├── random
│   ├── selected
│   └── save
├── map/
│   ├── load
│   └── save
├── stage/
│   ├── load/{stage}/{step}
│   └── save
├── battle/
│   ├── enemy
│   ├── player
│   ├── finished
│   └── victory
└── shop/
    ├── change
    ├── add
    ├── rest
    └── relic

```
