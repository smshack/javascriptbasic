class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }
    increase() {
        this.counter++
        console.log(this.counter)
        if (this.counter % 5 === 0) {
            this.callback && this.callback(this.counter)
        }
    }
    decrease() {
        this.counter--
        console.log(this.counter)
    }
}
function printSomething(num) {
    console.log(`yoyo ${num}`)
}
function alertSomething(num) {
    console.log(`aleart ${num}`)
}
// 클래스에 우리가 원하는 함수를 전달할수 있음
const coolCounter = new Counter(printSomething);
const coolCounter2 = new Counter(alertSomething);
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()
coolCounter.increase()

coolCounter2.increase()
coolCounter2.increase()
coolCounter2.increase()
coolCounter2.increase()
coolCounter2.increase()