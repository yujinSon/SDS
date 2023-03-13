## React 환경 설정

1. **Prettier**
    
    [27. 리액트 개발 할 때 사용하면 편리한 도구들 - Prettier, ESLint, Snippet · GitBook](https://react.vlpt.us/basic/27-useful-tools.html)
    
    - [Prettier](https://prettier.io/)
     는 자동으로 코드의 스타일을 관리해주는 도구입니다. 가령, 문자열을 사용 할 때 ' 를 쓸지 " 를 쓸지, 또는 세미콜론 (;) 를 코드 뒤에 붙일지 말지, 들여쓰기는 얼마나 할지, 이런 것들을 관리해줄 수 있습니다.
    - 사용법
        - 루트 최상위 디렉터리에 `.prettierrc` 파일을 생성 (src 폴더 안)
        
        ```jsx
        {
            "trailingComma": "all",
            "tabWidth": 2,
            "semi": false,
            "singleQuote": true
          }
        ```
        
        - **trailingComma**
        : `"none"`, `"es5"`, `"all"`
         으로 설정을 할 수 있는데, 객체 또는 배열이 여러줄로 구성되어 있으면 다음과 같이 맨 마지막 줄에 쉼표를 붙여줍니다.
        - **tabWidth**
        : 들여쓰기의 크기를 정합니다. 2칸 추천
        - **semi**
        : 세미콜론 (;) 을 쓸지 말지 정합니다. 사용하고 싶다면 `true`
         로 설정
        - **singleQuote**
            
            : 문자열을 입력 할 때 `"` 를 쓸지 `'` 를 쓸지 정합니다.  만약에 `"`만 쓰고 싶다면 `false`로 설정
            
    1. **절대경로 설정** 
        
        1) src 내부에 `jsconfig.json` 파일을 만든다.
        
        2) 내부에 다음과 같이 작성한다. 
        
        ```jsx
        {
            "compilerOptions": {
              "baseUrl": "src"
            },
            "includes": ["src"]
          }
        
        // 이러면 import 할 때 기본으로 src부터 시작할 수도 있고, 
        // 기존처럼 import 해올 수 도 있음
        ```
        
        - chatGPT 형님피셜
            
            : **`jsconfig.json`** 파일은 JavaScript 프로젝트의 설정 파일입니다. 이 파일은 TypeScript 컴파일러의 설정 파일인 **`tsconfig.json`** 파일과 유사하지만, JavaScript 프로젝트에 특화되어 있습니다.
            
            여기서 **`"compilerOptions"`** 속성은 컴파일러 옵션을 구성합니다. **`"baseUrl"`** 옵션은 상대적인 경로를 기준으로 모듈을 가져오는데 사용되는 기본 URL을 지정합니다. 예를 들어, **`"baseUrl": "src"`**로 설정되어 있으면, **`import`**나 **`require`** 문에서 상대 경로를 사용하지 않고 **`src`** 디렉토리에서 모듈을 가져올 수 있습니다.
            
            **`"includes"`** 속성은 컴파일러가 검색할 파일 패턴을 지정합니다. 이 예제에서는 **`"src"`** 디렉토리 아래의 모든 파일을 포함하도록 지정합니다. 이 옵션을 사용하면 컴파일러가 특정 파일만 컴파일하는 대신, 지정된 패턴에 일치하는 모든 파일을 컴파일하도록 지정할 수 있습니다.

#23.03.13

- Figma 구현

https://www.notion.so/18-2a84aedadf3548b8a9cc316eb741e466?pvs=4#d455f44b85d14264843fa9e4f5481e47

