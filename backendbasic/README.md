
# 백엔드 기초 강의
## 1. 소개
- 강의를 통한 목표 설정
- 강의를 어떻게 들을건지 목표와 계획을 설정
- 강의를 듣고 나중에 더 알아보고 싶은 토픽을 적을 노트 준비
## 2. node.js 란
- node.js란 무엇이며 무엇을 할수 있는가
    - 자바스크립트 런타임 환경
    - 브라우저 밖에서도 자바스크립트로 실행 가능하도록 하는 것
    - 노드가 설치된 어떤 환경에서도 백엔드, 서버, 프론트엔드, 스크립트, 오토메틱도 사용 가능
- node.js 특징과 내부 동작 방식에 대해 큰 그림 이해하기
    1. 자바스크립트로 모든 것을 처리할 수 있음
    2.  노드를 쓰는 개발자들이 많다(커뮤니티 자료를 얻기 쉽다)
    3.  큰 기업들이 node.js 를 사용하고 있다(유용성이 검증되어 있음)
    4.  여러 사용 가능한 모듈이 많다
    5.  다른 백엔드에 비해 쉽게 배울수 있어 높은 생산성을 얻을 수 있음
    6.  강력한 커뮤니티(npm 라이브러리 사용 가능)
- node.js 내부 들여다 보기
    -  노드 js는 싱글 메인 쓰레드가 있음
    -  이벤트가 발생할 때 처리해야하는 콜백형태로 전달해주면 node.js에서 병렬적으로 처리해줌
    - 이벤트 루프에서 너무 무거운 작업을 처리하지 말아라
    - 자바스크립트 런타임 / 싱글 쓰레드/ non -Blocking I/O /Event - Driven
- node.js 서버의 특징과 장점과 단점 알아보기
    - 하나의 메인 싱글 쓰레드가 있고 요청을 받고 해야하는 일을 처리할 수 있는 곳으로 바로 던지고 처리된걸 다시 요청된 곳으로 보내는 형태

## 3. 필요한 툴들
- 기본 툴 설치
    - node.js| vscode | postman | terminal
    - REPL 이란 무엇인지 알아보고 직접 실행히 보기
    - read eval print loop 터미널에서 간편하게 사용 가능
- 파일로 노드 코드를 동작시켜 보기
## 4. node 모듈
- 중요한 사이트 북마크 해놓기
> 노드 입문자를 위한 심플한 사이트: https://nodejs.dev/learn

> 노드 공식 사이트: https://nodejs.org/en/docs/
윈도우나 VSCode 최신 버전에서 Node 타입 정의 파일이 업데이트 되었어요 :)

저와 다르게 아래와 같이 global 정의가 나와도 놀라지 마세요.

> https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9d59b7aadafb5ee2afac9c4440b82e692a7449c1/types/node/globals.global.d.ts


> 타입 정의 확인 https://github.com/DefinitelyTyped/DefinitelyTyped/blob/9d59b7aadafb5ee2afac9c4440b82e692a7449c1/types/node/globals.d.ts#L97

- 어떻게 효율적으로 모듈들을 알아보고 공부해 볼수 있는지 팁 확인
    1. 콘솔 잘 쓰기
        - log level
        - assert(if문 역할)
        - print object(table, dir)
        - 시간 측정 time timeEnd
        - trace (함수가 어디서 호출 됬는지 확인)
- 스스로 모듈들을 살펴보고 필요한 내용들을 습득할 수 있기
    - 연관 있는 모듈은 한 파일로 묶어서 모듈별로 관리
    - import , export, module.exports
- 실습 노트 만들어 두고 계속 사용해보기
## 5. npm 알아보기
- npm 이란 무엇이고 어떻게 활용되는지 확인해보기
    - 라이브러리 관리자
    1. npm init => packge.json 파일 생성
    2. npm install libraryname => node_modules 생성
> npm 공식 사이트 https://www.npmjs.com/

- 프로젝트에 필요한 외부 라이브러리를 다운로드 받고 관리할 수 있기
    - package.json 작성 관리
    - 라이센스 관리
- 프로젝트 버전명 관리하는 방법에 대해 알아보기
    - 라이브러리 버전 정보
    - 1 -0 -0 
    - major(기존에서 대거 수정 및 변경 사항 있을 경우), Mimor(기능 추가), Patch(버그 수정)
    - npm 버전 확인 사이트
        - https://docs.npmjs.com/about-semantic-versioning
        - https://semver.npmjs.com/
    
    - 글로벌로 설치하고 목록 확인
        - npm i -g netlify
        - 리스트 확인 npm ll
        - 글로벌로 설치된 모듈 확인 npm ll -g 
        - 글로벌 중에 의존성 제외 직접 설치한 것만 확인 npm ll -g --depth=0
    - 설치된 모듈 지우기
        - npm uninstall 모듈명
    - 버전 업데이트 필요 목록 확인
        - npm outdated
    - 해당 모듈 정보 확인
        - npm view 모듈명
    - 개발 모드에서 유용한 라이브러리
    - 설치시에 npm i nodemon --save-dev
        - nodemon


## 6. 디버깅 해보기
- 디버깅의 목적이 무엇인지 이해하기
    - 디버깅이란 - 코드가 원하는 대로 동작하지 않을 때(버그)
    - 문제를 정의하는것이 가장 중요함
    - ux/ui | logic/flow | performance | const
- 디버거의 사용법을 익히고 직접 실습해 보기
- 팁!!
- 앞으로 개발할 때 유용하게 어떻게 사용
## 7. 파일 정리 스크립트 만들기
- 요구사항들을 확인하고 직접 정의해 보기
- 요구 사항을 토대로 1시간 time blocking 해두고 구현해 보기
- 콘솔 로그, 디버깅을 적극 활용해서 기능 구현을 해보기
- 다 완성한 프로젝트 깃허브 공유
- 리팩토링
## 8. web 기초 지식
- HTTP의 역사와 HTTPS와의 차이점 이해하기
    - Hypertext(media) Transfer Protocol
    - request(요청|클라이언트) <-> response(응답|서버)
    - Hypertext(media) Transfer Protocol Secure
    - 클라이언트 서버 통신간에 암호화 추가

- HTTP 세가지 다른 버전의 차이점 이해하기
    - v1 => http| https 둘다 사용 가능
        - text를 베이스로 함
        - header 압축등을 진행하지 않아 데이터가 큼
    - v2 => https 만 사용 가능
        - 바이너리 형태 사이즈 작음
        - 압축한 형태로 넘겨서 데이터 사이즈가 상대적으로 작음
    - v3 => v2랑 비슷 아직 지원 안됨
- Request method, response Code, 그리고 Headers는 무엇인지 이해하기
    1. TCP 커넥션 생성
    2. 클라이언트 요청(request) -> header, body, params, query
    3. 서버 응답(response) -> 응답상태코드

- status 코드란(서버에서 처리한 결과에 대한 응답 코드)
    - 1xx(정보)
        - 100 계속 요청해
        - 102 처리 중이야
    - 2xx(성공)
        - 200 성공적이야
        - 201 리소스가 성공적으로 만들어졌어
        - 204 요청은 처리했지만 데이터가 없어

    - 3xx(리다이렉션)
        - 301 그 요청 url은 다른 url로 가야되
        - 302 찾았는데 임시적으로 다른데로 가야되
        - 303 get에 한해서 302랑 같음
        - 307 임시 영구적으로 리다렉트 post 요청에 대해서만
        - 308 임시 영구적으로 리다렉트
    - 4xx(클라이언트 에러-> 잘못된 방식으로 요청이 들어옴)
        - 400 클라이언트가 요청시에 쿼리가 잘못됬거나  api를 잘못된 방식으로 사용
        - 401 로그인 등 특정한 키를 가진 클라이언트가 요청을 해야되는데 권한이 없는 사람이 요청함
        - 403 로그인한 사용자긴 한데 그 행위를 할 수 있는 권한이 없을 때
        - 404 찾을 수 없을 때
        - 405 해당 url에 대해서 쓰거나 삭제하는 기능을 허용하지 않아
        - 409 클라이언트가 만들고자 하는 리소스가 이미 존재하거나 충돌이 날때

    - 5xx(서버 자체에서 예상치 못한 에러가 남)
        - 500 중간 서버가 어떻게 처리가 가야 되는지 찾지 못할 때
        - 502 프로토콜에 문제가 있어 통신이 제대로 되지 않을 때
        - 503 웹 사이트의 서버가 사용할 수 없는 상태임
  > mdn 상태코드:  https://developer.mozilla.org/ko/docs/Web/HTTP/Status
- 서버에 요청할 때 사용 하는 url
- url(uniform resource locator)
- https://servername.com:port/index.html?key=value
- protocol hostname (port) path query
- request Method
    - get
        리소르를 가져올 때
    - post
        - 리소스를 생성할 때(201로 응답)
    - put
        - 리소스를 수정할 때
    - delete
        - 리소스를 삭제할 때
    - patch
        - 리소스를 부분적으로 수정할 때
    - head
        - get 메서드와 돌일하지만 가능한지 아닌지 확인
    - options
        -  목적 리소스의 통신을 설정
    - trace
        - 목적 리소스의 경로를 따라서 메시지 응답상태 확인
> request 메소드 확인: https://developer.mozilla.org/ko/docs/Web/HTTP/Methods

- http header??
    - session(서버쪽 저장 공간) & cookies(브라우저 저장 공간)
        - set-cookie: 해당 토큰 값을 통해서 인증 진행가능
    - headers
        - Authorization(인증 정보는 해당 오브젝트에 담아야 함)
        - content-length bytes
        - content-type text/html | application/json
        - Content-Language en
        - Cache-Control:max-age=< seconds >
        - Cache-control: no-cache
> headers: https://developer.mozilla.org/ko/docs/Web/HTTP/Headers
- 필요할 때 어떻게 더 공부할 수 있는지 팁 북마크
## 9. node 서버 만들기
- HTML 파일 보내보기
- Templating engine, ejs 사용해 보기
- JSON 으로 데이터 보내보기
- Postman 사용해보기
## 10.RESTApi 란
- Restful APIs 윈칙은 무엇인지 이해하기
    - rest API란?
        - restful api => representational state transfer ful api
        - 나타내는, 대표하는 | 상태 | 전송
    - rest api 를 잘 만들려면?
        1. 클라이언트와 서버의 아키텍처 다양한 클라이언트에 리소스 제공 가능해야함
        2. 하나의 요청과 다른 요청이 의존 하지 않는
        3. 캐시가 가능하다면 캐시가 사용 가능한 상태로
        4. 공통된 api 하나로 공유 가능할수 있도록
        5. 클라이언트가 원한다면
        6. ** uniform interface
            - 클라이언트에서 요청을 식별 가능해야 함
            - 클라이언트에서 이해할 수 있는 형태로 리소스를 응답해야 함
            - 서버로 받은 데이터를 통해서 어떤 식으로 요청을 해야하는지 알수 있어야 함
            - 응답 데이터에는 클라이언트에서 어떻게 사용하는지 알려줄수 있어야 함
            - hypermedia를 어플리케이션에서 사용할 수 있는 상태를 보내야함

- APIs 디자인 할 때 피해야 하는 지켜야 하는 규칙 이해하기
    - api 디자인할 때 어떻게 해야 할까?
        - 서버에 있는 데이터를 CRUD 등을 클라이언트에서 조절할 수 있는 기능을 제공
        - C(post)R(get)U(put|fetch)D(delete)
        - what
- 진정한 Restful APIs 예제를 보면서 어떤 부분을 도입할 수 있을지 생각해보기
    - youtube api를 보자
- 기본적인 APIs 예제를 보면서 기본 정의법 이해하기
    - github api 예시를 보자 :https://docs.github.com/en/rest
## 11. express !!
- Express 전반적인 큰 그림 이해하기 
    - express란 많은 사람들이 사용하고 검증된 서버 구성 프레임 워크
```
const express = require('express')
const app = express()

// 읽기
app.get('/posts',function(req,res,next){

})

// 생성
app.post('/posts',function(req,res,next){
    
})

// 수정
app.put('/posts:id',function(req,res,next){
    
})

// 삭제
app.delete('/posts:id',function(req,res,next){
    
})
```   
https://github.com/obenef-com?tab=repositories
```
http://34.84.226.175:8080/sky/jarry?keyword=bts
{
  "path": "/sky/jarry",
  "header": {
    "host": "34.84.226.175:8080",
    "connection": "keep-alive",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-encoding": "gzip, deflate",
    "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7"
  },
  "params": {
    "id": "jarry"
  },
  "query": {
    "keyword": "bts"
  }
}
```
- 미들웨어는 무엇인지 정확하기 이해하기
    - express 란 미들웨어의 체인이라고 할 수 있음
    - app.use, app.all post,get,...
    - next() => 흐름이 이어지게 만들어야 함
    - res.send
- 에러처리 하는 방법
    1. 문제가 생겼을 때 클라이언트한테 메시지를 전달하는 것
    2. 에러가 발생시 서버 동작이 죽지 않도록 예외 처리를 해주는 것

- 기본 사용방법, 에러처리 방법, 라우트에 대해 실습하기
- 유용한 내부 그리고 커뮤니티에서 많이 사용되어지는 미들웨어 사용하기
## 12. Dwitter 프로젝트 시작
- 기능 요구 사항 분석후 알맞는 APIs 설계하기
- 백엔드 개발을 위한 포스트맨 활용법을 이용해서 서버 구현하기
- 자바스크릅트를 활용하여 프론트 엔드 서비스층 구현하기
## 13. 리팩토링 -MVC
- 코드 개선해보기
- 솔루션 영상들을 보면서  어떻게 개선되었는지 확인
- 앞으로 코드를 작성할 때 어떻게 적용할 건지 포인트 잡아놓기
    - MVC
        1. Model    데이터
        2. Controller 로직
        3. View 보여지는 화면
        route => logic => data
## 14. Validation 유효성
- validation, Sanitization 이란 무엇인지 , 중요성 확인하기
https://express-validator.github.io/docs/
    - 유효성(validation) 검사 => 클라이언트가 서버로 요청할 때 보내는 데이터가 유효한지 확인하는 것
    - Sanitization
        - 공백 등 유효성에는 맞지만 유효하지 않은  값들을 깨끗하게 만들어 주는 작업
- Validation 실습을 통해 필요한 내용 정리하기
- Sanitization 실습을 통해 필요한 내용 정리하기
- Dwiiter에 어떻게 적용할 수 있을지 고민하고 적용하기
## 15. Authentication 로그인
- 세션과 쿠키 vs JWT 방식의 차이점을 이해하기
    - Authentication(인증, 로그인)
        - 보통 password나 pin-code로 인증
        - 서버에서는 인증을 어떻게 처리할까??
            1. id/password 서버쪽에 저장
    - 세션(서버의 저장소)
        1. 클라이언트 에서 서버로 로그인 정보 넘겨서 요청
        2. 서버에서 DB에서 정보 확인
        3. 유효한 사용자라면 session을 만듦(유저 정보 및 유효기간 저장)
        4. 클라이언트에게 쿠키로 세션 정보를 넘김
    - 쿠키(클라이언트의 저장소)

    - 단점
        - 하나의 서버에 데이터를 가지고 있으므로 분산형 시스템에서는 필요없는 네트워크 요청이 발생할 수 있음

- Bcrypt와 JWT 실습하면서 사용하는 법 익히기
    - jwt(JSON Web Token)
        - header| payload | signature 으로 구성
            - header => 사용하는 알고리즘, type
            - payload => 인코딩된 사용 데이터
            - signature => 이것을 인코딩하기 위해 사용하는 비밀키(header, payload 데이터가 변경 되었는지 확인)
        1. 사용자가 클라이언트에서 서버로(아이디,패스워드) 등 로그인 정보 전달
        2. 서버에서 DB로 데이터 확인 => DB에서 확인된 데이터 정보 넘겨줌
        3. 서버에서 jwt 토큰 생성
        4. 사용자에게 보냄
        5. 클라이언트는 그 이후 요청에는 request.header에 jwt 토큰을 포함
        6. 서버에서 요청 처리시 headers authorization: Bearer JWT로 데이터를 보내서 유효성 검사를 실행
    - 한번 jwt를 만들어서 넘기면 별도 서버에서 저장된것 없이 검증만 하면 됨
    - jwt 단점은 계속 header에 jwt 토큰을 주고 받는다는 단점
- 자바스크립트를 활용하여 프론트엔드 서비스층 구현하기
    - bcrypt(password-hashing function)
        - 패스워드 해싱 알고리즘 제공 => 단방향 가능 but 알고리즘 지정 가능
        - 어떤 알고리즘사용 | 비용 | 길이(salt) 길수록 경우의 수가 늘어남 | Hash
            -hashed:$2b$15$Aa2LlmcFEdmJEBn4dBMJWOUtjCGwNPZfesdxLeBHJdC45dkcNjrZm
        - salt 가 길면 길수록 보안성이 길지만 처리하는 시간 기하급수적으로 길어짐
        - 보통 8 ~ 12 길이 정도로 사용하면 됨
    - jwt 토큰 해석 사이트
    https://jwt.io/
## 16. Dwitter 로그인 적용
- 로그인 관련 APIs 설계하기
- 사용자 인증 미들웨어 만들어보기
- Postman을 이용해서 간편하게 로그인된 사용자 요청 테스트하기
- User와 Tweet의 모델을 어떻게 설계하면 좋을지 고민
- 직접 스스로 도전하면서 가입, 로그인 서비스 완성하기(백엔드와 프론트 엔드)
## 17. configration
- config의 중요성 확인하기(하지 않았을 때의 두가지 문제점 정리)
    - .evn 파일에 설정
    - yarn add dotenv
    - gitignore 파일에 node_modules/ 와 .env 파일을 추가함
    - 비밀번호나 중요 정보를 git에 제외하여 보안적으로 좋게 사용할 수 있음
- 어떻게 config를 처리할 수 있는지 확인하기
- 더 나아가 어떻게 코드를 개선할 수 있는지 , 활용성을 높일 수 있는지 팁 확인
## 18. socket 실시간 트윗
- HTTP와 Socket의 차이점 이해하기
    - 소켓이란?
        기존에 http는 요청과 응답으로 동작
        클라이언트에서 요청할 필요가 없이 클라이언트와 서버가 연결만 되있다면
        서버가 원할 때 클라이언트에 전송할 수 있는 것
        실시간으로 전송 시 사용
- 소켓으로 백엔드, 프론트엔드 기본 동작 사항 실습하기
    - server  yarn add socket.io
    - client yarn add socket.io-client
- 실습한 내용을 토대로 Dwitter 에 스스로 적용해 보고 솔루션 듣기
## 19. 데이터베이스 정리
- 데이터베이스란 
    -  여러 사람들이 공유하고 사용할 목적으로 통합 관리되는 데이터들의 모임
    - data base managemnet system(DBMS)
        - 데이터베이스 관리 시스템이란 다수의 사용자들이 데이터베이스 내의 데이터를 접근할 수 있도록 해주는 소프트웨어 들을 의미
        - 파일로도 데이터 관리가 가능 하지만 데이터 중복, 데이터 중복 및 불일치 등의 문제가 발생 할 수 있음
        - mysql , oracl, mongo ...

- SQL 데이터베이스 특징
    - SQL :구조적 질의 언어의 줄임말로 관계형 데이터베이스 시스템에서 자료를 관리 및 처리하기 위해 설계된 언어
        - 테이블 행(row)과 열(columns)로 구성
        - 한줄에 들어가 있는 것은 레코드
        - 데이터형 정의 된것을 스키마라고 함
        - 스키마가 정의되어 있다면
        - primary key : 아이디
        - foreign key: 두가지의 다른 테이블의 관계를 정의해줌
    - sql 쿼리
        - select : 어떤 행을 사용할 것인가?
        - from : 어떤 테이블을 사용할 것인가?
        - where : 조건을 정의
        - ex) SELECT * FROM Users WHERE name LIKE '%Bob%';
    
    - 예시
        - oracle, mysql, sqlLite, postgreSQL, SQL server

- NoSQL 데이터베이스 특징
    - NoSql : 관계가 없는 데이터 베이스
        - 스키마가 엄격하지 않음
        - 고립된 형태로 관리 가능
        - 용도에 따라 key-value, document, wide-column, graph
    - 몽고는 document로 관리
        - 하나의 데이터
        - 한 컬렉션(테이블이랑 비슷하게 생각)

- ORM과 ODM은 무엇인지, 장/단점 이해하기
    - ORM(object realation mapping) 이란 객체 관계 매핑
        1. run the code
        2. creates db table
        3. creates the record
        - 비즈니스 로직 처리에 좋음
        - 추상화 하기 좋음
        - 스키마 마이그레이션
        - 상세한 쿼리를 할 수 없음
    - ODM(object document mapping) 

- 프로젝트별로 어떻게 적절한 데이터베이스를 찾으면 좋은지 팁 확인
    - sql과 nosql
    - sql사용시 서버 자체의 스펙을 높이는 방식으로만 확장 가능
    - nosql 서로 관계가 없는 컬렉션을 따로 수평적으로 서버를 나눠서 저장 가능
    - 어떤 데이터 타입을 저장하고 많이 사용하는지
    - 각 사용자가 사용하는 데이터과 그 데이터량
    - 각 데이터 간의 관계
- 하이브리드로 필요에 따라 부분적으로 다른 데이터 베이스를 섞어서 사용
## 20. Mysql
- MySQL 설치 및 테이블(스키마) 정의하기
    - https://www.mysql.com/
    - https://victorydntmd.tistory.com/272
    - 
    - 데이터 베이스 확인
        - show databases;
        - use [데이터베이스명];
        - 테이블 만들기
        ```
        CREATE TABLE `dwitter`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `name` VARCHAR(128) NOT NULL,
  `eamil` VARCHAR(128) NOT NULL,
  `url` TEXT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));

        ```
- Dwitter 적용 - 
- Dwiiter 적용 - 사용자의 트윗의 정보를 함께 join 해서 읽어오는 동작 외 CRUD 구현
## 21. Sequelize
- Sequelize에 대해 알아보기
- 스스로 Dwiiter에 적용해서 Postman으로 기능 테스트 하기
- 솔루션을 확인하면서 내용 점검

## 22. MongoDB
- MongoDB 설치해서 사용해보기
- Dwitter 적용 - 사용자 정보 읽고 추가하기
- Dwwiter 적용 - 사용자의 트윗의 정보 CRUD 구현
- mysql 과 어떤점이 다른지, 어떤 것을 유의 해야 하는지 포인트 정리하기
## 23. Mongoose
- 몽고 DB 알아보기
- Squelize편에서 연습했던 문서를 통해 구현하는 능력 연습하기
- 솔루션을 확인하면서 내용 점검

## 24. Deployment - 배포
- 서버 배포전 꼭 체크해야할 체크리스트 확인
- 다양한 호스팅 선택 방법 확인하기
- 호스팅 전 코드 업데이트 사항 확인
- 백엔드 배포하기
- 프론트엔드 배로하기
