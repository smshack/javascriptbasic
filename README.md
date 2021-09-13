# 자바스크립트 기초 강의
## 1. 콘솔에 출력,script asnync 와 defer의 차이점 및 앞으로 자바스크립트 공부 방향
* 자바스크립트 공식 사이트
[mdb 사이트](https://developer.mozilla.org/ko/docs/Web/JavaScript)
```
<header>
<script defer src="test.js">
</header>
헤더 안에 defer로 javascript 파일을 불러오는게 가장 효율적

'use strict'
hosting 등을 막을 수 있는 정의
```
1helloworld.js

---
## 2. 데이터 타입, data type, let vs var,hoistting
* 변수란(Variable)
```
let

```
* Block Spoce
```
{

}
```
 var 쓰지마....
```
hosting 변수의 선언을 맨 위로 올림
선언 되지 않은 위에서 사용해도 undefiend로 나옴
block scope 안지켜짐
```
* 템플릿 리터럴
    * 백틱`` 기호 안에 ${}으로 넣으면 문자열로 출력 가능



---
* const (상수)
Number,String,Boolean,Symbol, 다이나믹 타입핑,object

2datatype.js

---

## 3. 코딩의 기본 operator if, for loop 코드 리뷰 팁
1. String concatenation
2. 기본연산자
3. 전위, 후위 연산자
4. 할당 연산자
5. 비교 연산자
6. 논리 연산자
7. 등호 연산자
8. if, else if, else
9. 삼항 연산자
10. switch
11. while
12. do while
13. for
14. for 중첩 continue, break

3if_for_loop.js

---
## 4. Arrow function 은 무엇인가? 함수의 선언과 표현

1. 함수의 선언
```
 function name(param1,param2){
     수행되야 할 작업 
     return '작업 결과물';
 }
```
2. 파라미터
3. 디폴트 파리미터
4. Rest parameters(...args)
파라미터가 여러개 들어갈 경우 배열 형태로 받을수 있음
5. 지역변수, 전역 변수
6. 함수란 값을 리턴해 준다
7. 조건이 맞지 않을 경우 빨리 리턴해줘야 함!!
8. 함수의 선언과 할당
9. 콜백을 여러번 하지 말고 분리하자
10. Arrow function 짧게 간단하게 줄여서 쓸수 있음
```
const simplePrint = function() {
    console.log('simplePrint!')
}

const simplePrint = () => console.log('simplePrint!')

```
---
## 5. 클래스와 오브젝트의 차이점(class vs object), 객체 지향 언어 클래스 정리


---
## 6. 오브젝트란 뭘까??

---
## 7. 배열 제대로 알고 쓰자


---
## 8. 유용한 10가지 배열 함수들 Array APIs 총 정리


---
## 9. JSON 개념 정리와 활용 방법 및 유용한 사이트 공유


---
## 10. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험

---
## 11. 프로미스 개념부터 활용까지 Promise

---
## 12. 비동기의 꽃 javascript async와 await 그리고 유용한 Promise APIs