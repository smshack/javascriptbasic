const process = require("process")

console.log(process.execPath)
console.log(process.version)
console.log(process.pid)
console.log(process.ppid)
console.log(process.platform)
console.log(process.env)
console.log(process.uptime())
console.log(process.cwd())
console.log(process.cpuUsage())

setTimeout(() => {
    console.log('setTimeout')
}, 0)

// 지금은 아니고
// 현재 수행되고 있는 코드가 완료된 후에
// 내가 등록한 함수를 테스크 큐에 넣어줘
process.nextTick(() => {
    console.log('nextTick');
})

for (let i = 0; i < 1000000; i++) {
    console.log('for count')
}