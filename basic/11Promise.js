// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer(생산자)
// 새로운 프로미스가 만들어질 때는 
// 우리가 만든 excutor가 바로 실행 된다
// 선언하면 바로 시작 되기 때문에 원하는 시점에 시작되야 한다면
// 위 사항을 고려해서 해야함
const promise = new Promise((resolve, reject) => {
    //doing some heavy work()
    console.log('doingsomthing...')
    setTimeout(() => {
        resolve('jarry')
        // reject(new Error('no network'))
    }, 2000);
})
// 2. Consumer(소비자)
promise.then(value => {
    console.log(value)
}).catch(error => {
    console.log(error)
})
    .finally(() => { console.log('finally') })

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        console.log(num)
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 2000)
        })
    })
    .then(num => console.log(num))

// 4. Error Handing
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("닭"), 1000)
    })
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 달걀`), 1000)
        setTimeout(() => reject(new Error(`${hen} => 달걀`)), 1000)
    })
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg}=> 요리`), 1000)
    })

getHen()
    .then(hen => getEgg(hen))
    .catch(error => {
        return "빵"
    })
    .then(egg => cook(egg))
    .then(cook => console.log(cook))
    .catch(console.log)

getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log)
    .catch(console.log)