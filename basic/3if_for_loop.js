// 1. String concatenation
console.log('1' + 'my' + 'cat')
console.log('2' + '1' + 2)
console.log(`3. string literals: 1+2 =${1 + 2}`)

// 2. 기본연산자
console.log(`4 add. 1+1=${1 + 1}`)
console.log(`5 substract. 1-1=${1 - 1}`)
console.log(`6 divide. 1/1=${1 / 1}`)
console.log(`7 multiply. 1*1=${1 * 1}`)
console.log(`8 remainder. 5%2=${5 % 2}`)
console.log(`9 exponentiation. 2**3=${2 ** 3}`)

// 3. 전위, 후위 연산자
let counter = 2
const preIncrement = ++counter
console.log(`10 preIncrement: ${preIncrement} counter:${counter}`)
console.log('연산 후에 할당')
console.log(`counter = counter+1`)
console.log(`preIncrement = counter`)
const postIncrement = counter--;
console.log(`11 preIncrement: ${postIncrement} counter:${counter}`)
console.log('할당 후에 연산')
console.log(`preIncrement = counter`)
console.log(`counter = counter+1`)

// 4. 할당 연산자
let x = 3;
let y = 6;
console.log(`12. x+=y;${x += y} ==> x=x+y`)
console.log(`13. x-=y;${x -= y} ==> x=x-y`)
console.log(`14. x*=y;${x *= y} ==> x=x*y`)
console.log(`15. x/=y;${x /= y} ==> x=x/y`)

// 5. 비교 연산자
console.log(`16. x<y;${x < y}`)
console.log(`17. x<=y;${x <= y}`)
console.log(`18. x>y;${x > y}`)
console.log(`19. x>=y;${x >= y}`)

// 6. 논리 연산자
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`20 or :${value1 || value2 || check()}, 무거운 연산 처리를 제일 뒤에`)
console.log(`|| (or) 하나라도 참이면 true`)
// && (and)
console.log(`21 && and :${value1 && value2 && check()}, 무거운 연산 처리를 제일 뒤에`)
console.log(`&& (and) 전체가 참이여야 true`)

// 널체크 시 사용
let nullableObject;
if (nullableObject != null) {
    nullableObject.sommething;
    console.log(nullableObject.sommething)
}
function check() {
    for (let i = 0; i < 2; i++) {
        console.log('------')
    }
    return true;
}
// not !
console.log(`22 ! not :${!true}, 불리언 반대로`)

// 7.등호 연산
const numberFive = 5;
const stringFive = '5';
console.log(`23 numberFive==stringFive: ${stringFive == numberFive}`)
console.log(`24 numberFive!=stringFive: ${stringFive != numberFive}`)
console.log(`25 numberFive===stringFive: ${stringFive === numberFive}`)
console.log(`26 numberFive!==stringFive: ${stringFive !== numberFive}`)

const jarry1 = { name: 'jarry' }
const jarry2 = { name: 'jarry' }
const jarry3 = jarry1
console.log(`27 jarry1==jarry2: ${jarry1 == jarry2}`)
console.log(`28 jarry1===jarry2: ${jarry1 === jarry2}`)
console.log(`29 jarry1===jarry3: ${jarry1 === jarry3}`)

// 8.if, else if, else
console.log('30 if, else if ,else')
const name = 'jarry';
if (name === 'jarry') {
    console.log(`welcome ${name}`)
} else if (name === 'coder') {
    console.log('넌 멋진 코더야')
} else {
    console.log('unknow')
}
//9. 삼항 연산자
console.log(`31 삼항 연산자`)
console.log(name === 'jarry' ? 'yes' : 'no')
//10. switch
const browser = 'IE'
console.log(`32 switch`)
switch (browser) {
    case "IE":
        console.log(`go away ${browser}`)
        break;
    case "Chorm":
        console.log(`welco ${browser}`)
        break;
    default:
        console.log('other')
        break;
}

//11. while
let i = 3
console.log(`33 while`)
while (i > 0) {
    console.log(`do while ${i}`)
    --i;
}
console.log('---------------')

i = 3
//12. do while
console.log('34 한번 시작하고 do while ')
do {
    console.log(`do while ${i}`)
    i--
} while (i > 0)

//13. for
console.log(`35 for`)
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`)
}
console.log(`36 for 홀수만`)
for (i = 3; i > 0; i = i - 2) {
    console.log(`for : ${i}`)
}

// 14. 중첩 루프 continue, break
for (i = 0; i < 4; i++) {
    if (i === 1) {
        continue
    }
    if (i === 3) {
        break;
    }
    for (let j = 0; j < 4; j++) {
        console.log(`i :${i} j:${j}`)

    }

}
