// 함수 선언
function doSomething(add) {
    console.log(add(1, 2))
    return add(1, 2)
}
function add(a, b) {
    const sum = a + b;
    return sum
}

// 함수 호출
const addresult = doSomething(add);
console.log(addresult)

const addFun = add;
console.log(addFun)
console.log(addFun(5, 4))