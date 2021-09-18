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
4function.js

---
## 5. 클래스와 오브젝트의 차이점(class vs object), 객체 지향 언어 클래스 정리
* 클래스란 
    - 템플릿
    - 선언만 해놓음
    - 클래스 자체는 데이터가 아니고 틀만 정의 해 놓음

* 오브젝트
    - 클래스를 이용해서 데이터가 넣어지면 오브젝트가 됨
    - instance of a class

* 클래스 개념
    - 클래스(자판기)
    - 동전을 넣다(동작)
    - 사용자가 동전이 -1 금액 란 개념이 맞지 않음

* public private
* static
* 상속과 다형성

[자료형 정리 url](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

---
## 6. 오브젝트란 뭘까??
* 오브젝트는 키와 값으로 구성
    - object = {key:value}
    - obj.key =>value
    - obj[`${key}`] => value 
    - in 해당 키 값이 있는지 확인 ('name' in person1)
    - for ... in | for ... of
---
## 7. 배열 제대로 알고 쓰자
* 자료구조
    - 동일한 구조의 타입의 데이터를 묶는 경우
    - 검색, 삽입, 정렬, 삭제
- 배열
    - 인덱스로 같은 타입의 데이터를 묶어서 사용
    - 0부터 시작
    - 인덱스로 접근
- for
- forEach
- map
- push
- pop
- shift
- unshift
- splice
- concat
- indexOf
- include
- lastindexOf
---
## 8. 유용한 10가지 배열 함수들 Array APIs 총 정리
 1. 배열을 문자열로 이어 붙여라 join
2. 문자열을 특정 문자를 기준으로 배열로 만들기 split
3. 배열을 반대로 돌리기 reverse
4. 주어진 배열에서 첫번째 두번째를 제외한 배열을 만들어라slice,splice
5. 배열에서 원하는 조건에 맞는 값 찾기 find
6. 원하는 조건에 맞는 값들만 다시 배열로 만들기 filter
7. 배열안에 있는 값들을 원하는 필드 값만 빼서 만들거나 원하는 계산등을 포함해서 리턴 배열 만들기 map
8. 배열에서 하나라도 원하는 조건에 부합하는 값이 있는가 some
9. 해당 배열에서 원하는 값을 누적하여 계산할경우 사용 reduce
10. 정렬 sort
---
## 9. JSON 개념 정리와 활용 방법 및 유용한 사이트 공유
* JSON(javascript Object Notation)
    - 클라이언트 <->서버(JSON 형태로 통신)
1. obj => json  stringify
2. json => obj parse
3. JSON 유용한 사이트
- [JSON Diff checker](http://www.jsondiff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/j...)
---
## 10. 비동기 처리의 시작 콜백 이해하기, 콜백 지옥 체험
- 자바 스킄립트는 기본적으로 동기적으로 실행됨
-  동기적 (순차적)
- 비동기적(비순차적)
---
## 11. 프로미스 개념부터 활용까지 Promise

---
## 12. 비동기의 꽃 javascript async와 await 그리고 유용한 Promise APIs