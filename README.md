# Figma 구현
## MAP 구현

[![MAP 페이지](/uploads/87233d456c7f2b8b64e1432503a8c856/image.png)](https://www.figma.com/file/kp8UHDRA1XhZtkWRWxN7XW/Figma---Korea?node-id=85%3A75&t=h5g5sU9CA8HmXnzB-0)

[![상점 페이지](/uploads/4bb1311c36f9f849759ee07f775e821f/image.png)](https://www.figma.com/file/kp8UHDRA1XhZtkWRWxN7XW/Figma---Korea?node-id=108%3A903&t=SvbXj44d8F6irhtz-0)

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

# 참고자료
* [JPA의 findTop()과 findFirst()의 차이는?](https://www.baeldung.com/spring-data-jpa-findfirst-vs-findtop) <br>
* [GIT 사용법 기초](https://backlog.com/git-tutorial/kr/intro/intro1_1.html)
