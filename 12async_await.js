// 1. async
async function fetchUser() {
    return 'jarry'
}

const user = fetchUser()
user.then(console.log)
console.log(user)

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(3000)
    return '사과'
}

async function getBanana() {
    await delay(3000)
    return '바나나'
}

// function pickFruits() {
//     return getApple()
//         .then(apple => {
//             console.log(apple)
//             return getBanana()
//                 .then(banana => {
//                     console.log(banana)
//                     return `${apple} + ${banana}`
//                 })
//         })
// }
async function pickFruits() {
    try {
        const applePromise = getApple()
        const bananaPromise = getBanana()
        const apple = await applePromise
        const banana = await bananaPromise
        // const apple = await getApple()
        // const banana = await getBanana()
        return `${apple} + ${banana}`
    } catch (error) {
        throw new Error('pick Fruits 에러')
    }
}
pickFruits().then(console.log)

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'))
}
pickAllFruits().then(console.log)
const exec = async () => {
    const value = await pickAllFruits()
    console.log(value)
}
exec()