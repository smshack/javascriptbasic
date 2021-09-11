'use strict';

//변수 
// let (add ES6)
console.log(0, age, '선언을 왜 위로 올리니 hoisting')
let name = 'jarry'
console.log(1, name)
name = 'hello'
console.log(2, name)

let globalName = "global name";

{
    let name2 = 'jarry'
    console.log(3, name2)
    console.log(4, globalName)
}
// console.log(5, name2)
console.log(6, globalName)

{
    var age = 4
    console.log(7, age)
}
console.log(8, age, 'var는 block spoc 안먹혀')

const daysInWeek = 7;
const maxNumber = 5;
console.log(9, daysInWeek, 'daysInWeek')
console.log(10, maxNumber, 'maxNumber')


const count = 17;
const size = 17.1;
console.log(`11 count value: ${count}, type:${typeof count}`)
console.log(`12 size value: ${size}, type:${typeof size}`)

const infinity = 1 / 0;
const negaiveInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(`13 infinity value: ${infinity}, type:${typeof infinity} 0으로 나누면 안되`)
console.log(`14 negaiveInfinity: ${negaiveInfinity}, type:${typeof negaiveInfinity} 0으로 나누면 안되`)
console.log(`15 nAn value: ${nAn}, type:${typeof nAn}숫자가 아닌걸 나누면 안되`)

// string
const char = 'c'
const brendan = 'brendan'
const greeting = `helle ${brendan}`
const helloBob = `hi ${brendan}!` // template literals(string)
console.log(`16 helloBob value: ${helloBob}, type:${typeof helloBob}`)


//Boolean
const canRead = true;
const test = 3 < 1;
console.log(`17 value :${canRead} , type:${typeof canRead}`)
console.log(`18 value :${test} , type:${typeof test}`)

// null(명확하기 비어있는 값이야)
let nothing = null;
console.log(`19 value :${nothing} , type:${typeof nothing}`)

//undefined(선언은 되었지만 값이 들어가지 않았음)
let x;
console.log(`20 value :${x} , type:${typeof x}`)

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log('21 symbol은 유니크한 값을 만들 때 사용', symbol1 === symbol2)
const gsymbol1 = Symbol.for('id')
const gsymbol2 = Symbol.for('id')
console.log('22 symbol.for은 유니크한 값을 만들 때 사용', symbol1 === symbol2)
console.log(`23 value: ${symbol1.description} type:${typeof symbol1}`)

// 다이나믹 타입
let text = 'hello'
console.log(text.charAt(0))
console.log(`24 value :${text} , type:${typeof text}`)
text = 1
console.log(`25 value :${text} , type:${typeof text}`)
text = '7' + 5
console.log(`26 value :${text} , type:${typeof text}`)
text = '8' + '7'
console.log(`27 value :${text} , type:${typeof text}`)
console.log(text.charAt(0))

const person = { name: 'jarry', age: 28 }
console.log(`28 value :${person.name} , type:${typeof person.name}`, { depth: 3 })
console.log(person)
console.log(typeof person)