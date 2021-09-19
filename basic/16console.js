console.log('logging ...')
console.clear()

// log level
// 로그를 사용할 때 로그의 심각성 별로 나눠야 배포시에 에러찾기가 쉬움
console.log('log') // 개발
console.info('info') // 정말 중요한 정보
console.warn('warn') // 발생하면 안되긴 하지만 치명적인건 아닌
console.error('error') // 에러, 사용자 에러, 시스템 에러

//assert
console.assert(2 === 3, 'not same!')
console.assert(2 === 2, 'same!')

// print object
const student = {
    name: 'jarry', age: '28',
    company: {
        name: 'AC'
    }
}
console.log(student)
console.table(student)
console.dir(student, { showHidden: true, colors: false, depth: 2 })

// time measuring time
console.time('for loop')
for (let index = 0; index < 10; index++) {
    console.log(index)
}
console.timeEnd('for loop')

function a() {
    console.count('a function')
}
a();
a();
console.countReset('a function');
a();

// trace
function f1() {
    f2()
}

function f2() {
    f3()
}

function f3() {
    console.log('f3')
    console.trace()
}
f1()