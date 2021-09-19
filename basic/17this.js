// 함수 안에서 this를 호출하면 global이다
function hello() {
    console.log(this)
    console.log(this === global)
    console.log(this === module.exports)
}
hello()
// 클래스 내부의 this는 클래스 내부의 this
class A {
    constructor(num) {
        this.num = num;
    }
    memberFunction() {
        console.log('---------class---------')
        console.log(this)
        console.log(this === global)
        console.log(this === module.exports)

    }
}
const a = new A(1);
a.memberFunction()
console.log('------global scope---------')
console.log(this)
console.log(this === global)
console.log(this === module.exports)
