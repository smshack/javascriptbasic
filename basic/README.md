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
- 콜백 함수란
    - 나중에 호출되는 함수
    - 코드를 통해 명시적으로 호출하는 함수가 아니라, 개발자는 단지 함수를 등록하기만 하고, 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수를 말한다
    - 콜백함수를 사용하는 이유는 자바스크립트에서 비동기적인 프로그래밍을 할 수 있기 때문
    - 비동기적으로 콜백할수를 호출하는 함수에게 비동기적으로 호출되기를 원하는 코드를 콜백함수에 담아서 전달해야 한다
---
## 11. 프로미스 개념부터 활용까지 Promise
- Promise
    - 비동기를 간편하게 처리할 수 있게 하는 객체
    - 정해진 기능을 수행후 정상처리 후 리턴값 전달
    - 정상 처리 안될 경우 에러
 1. Producer(생산자)
-  새로운 프로미스가 만들어질 때는 
-  우리가 만든 excutor가 바로 실행 된다
-  선언하면 바로 시작 되기 때문에 원하는 시점에 시작되야 한다면
-  위 사항을 고려해서 해야함
- resolve 성공적일 때 리턴 값
- reject 에러시 리턴
2. Consumer(소비자)
- then
- catch
- finally

3. Promise chaining
then에서 받고 받고 받는 식으로 이어서 then으로 체이닝 할 수 있음

4. 에러 핸들링
reject => catch
---
## 12. 비동기의 꽃 javascript async와 await 그리고 유용한 Promise APIs
- async 함수 앞에 선언하면 Promise 객체로 만들어줌
- await promise 객체 동기적으로 처리 가능하도록 함
- 동기적 비동기적으로 순차적으로 실행될 필요가 없을 경우에는 Promise 객체를 좀더 효과적으로 가져올수 있는 방법을 생각
- Promiseall
---
## 13. 함수 기본 보충
- 함수를 선언
- 함수를 호출
- 함수 자체를 전달하는 부분 확인
---
## 14. 클래스 기본 보충
- 재사용성을 높이는 방법
- callback 함수를 지정해서 공통적으로 사용하는 함수를 지정해서 사용
- 에러 처리 함수값이 없다면 있다면 && 

## 15. 유용한 최신 javascript  문법
- ES6
    01:53 Destructuring assignment
    -  Spread syntax
    -  Default parameters
    -  Ternary Operator
    -  Template Literals
    -  Optional chaining (ES11)
    - Nullish Coalescing Operator (ES11)