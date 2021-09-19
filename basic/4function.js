// 1. 함수의 선언
// function name(param1,param2){
//     내용 return 'value';
// }
// 하나의 함수에서는 하나의 일만 처리
// 함수는 object로 취급
function hello(name) {
    console.log(`hello ${name}`)
    return name;
}

const helloreturnvalue = hello('jarry')
console.log(`1. helloreturnvalue: ${helloreturnvalue}`)

// 2. 파라미터
// 함수에 전달 
// 오브젝트
function changeName(obj) {
    obj.name = 'coder';
}

const jarry = { name: "jarry" };
changeName(jarry);
console.log(`2.changeName ${changeName}`)
console.log(jarry)

// 3. 디폴트 파라미터
// 사용자가 파라미터를 전달하지 않을 경우 정의해 놓은 값으로 대체
function showMessage(message, from = "unkown") {
    console.log(`${message} by ${from}`)
}
console.log(`3. default paramter`)
showMessage('hi')

// 4. Rest paramters 
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i])
    }
    console.log('-----------------')
    for (const arg of args) {
        console.log(arg)
    }
    console.log('-----------------')
    args.forEach((arg) => console.log(arg))
}
console.log(`4. Rest paramters ...`)
printAll('dream', 'coding', 'jarry')

// 5. Local scope
// 밖에서는 안이 보이지 않고 
// 안에서만 밖을 볼수 있다
// 지역변수, 전역변수
console.log(`5. 지역변수, 전역변수`)
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message)
        let childMessage = 'hello'
    }
    // console.log(childMessage)
}
printMessage()

// 6. 함수란 값을 리턴해 준다
function sum(a, b) {
    return a + b
}
console.log(`6. 값을 리턴`)
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`)

// 7. 빠른 리턴, 빠른 출구
// bad
// 조건이 맞지 않는 경우는 빨리 리턴을 해주는 것이 좋음
console.log(`7 조건이 맞지 않는 경우는 빨리 리턴을 해주는 것이 좋음`)
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic ...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic
}

// 함수는 변수로 사용 가능

console.log(`8. 함수의 선언과 할당`)
// 이름없는 함수 선언
// 선언과 동시에 변수에 할당
const print = function () {
    console.log('print')
}

print()
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 9. 콜백 지옥
console.log(`9. 콜백 지옥`)
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes');
}
const printNo = function () {
    console.log('no')
}
randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// 10. Arrow function
console.log(`10. arrow function 함수를 줄여쓰자`)
const simplePrint = () => console.log('simplePrint!')
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    return a * b;
}

// 함수를 정의하고 바로 실행하고 싶을 경우 사용 잘은 안씀
(function hello() {
    console.log('IIFE')
})();