//1.  배열 선언
console.log(`1. 배열 선언`)
const arr1 = new Array();
const arr2 = [1, 2]
// 2. 인덱스 접근
console.log(`2. 인덱스 접근`)
const fruits = ['사과', '바나나'];
console.log(fruits)
console.log(fruits[0]) // 배열의 처음 인덱스 값
console.log(fruits[fruits.length - 1])// 배열의 마지막 인덱스 값

// 3. 배열 for문 사용
console.log(`3. 배열 for문 사용`)
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
for (fruit of fruits) {
    console.log(fruits)
}

// 리턴값을 보내지 못함
fruits.forEach((fruit, index, array) => {
    console.log(fruit)
    console.log(index)
    console.log(array)
})
// 리턴값 보낼수 있음
const fruitsobj = fruits.map((fruit, index, array) => {
    console.log(fruit)
    console.log(index)
    console.log(array)
    return { fruit, index }
})
console.log(fruitsobj)

// 4. add push
// remove pop
// unshift
// shift
// splice
// concat
// add 앞에 
fruits.push('키위')
console.log(fruits)
const removedvalue = fruits.pop()
console.log(removedvalue)
console.log(fruits)
fruits.unshift("딸기", '레몬')
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.push("복숭아", "딸기")
console.log(fruits)
const fruits2 = { ...fruits }
fruits.splice(1, 2) // 인덱스 1부터 2까지 삭제
console.log(fruits)
fruits.splice(1)// 인덱스 1의 요소부터 끝까지 삭제
console.log(fruits)
fruits.splice()// 인덱스 모두 삭제
console.log(fruits)
console.log(fruits2)
fruits.push("복숭아", "딸기")
console.log(fruits)
fruits.splice(0, 2, '사과', '키위')
console.log(fruits)
const fruits3 = ['배', '포도']
const newfruits = fruits.concat(fruits3)
console.log(newfruits)

// 5. find 검색
// 몇번째 인덱스에 있느냐
console.log(fruits);
console.log(fruits.indexOf('사과')) // 해당하는 인덱스 값
console.log(fruits.indexOf('딸기')) // 해당하는 인덱스 값
console.log(fruits.indexOf('배')) // 해당하는 인덱스 값

//includes 
console.log(fruits);
console.log(fruits.includes('수박'))
console.log(fruits.includes('딸기'))
fruits.push('사과')
console.log(fruits);
console.log(fruits.indexOf('사과')) // 해당하는 인덱스 값
console.log(fruits.lastIndexOf('사과')) // 해당하는 인덱스 값

