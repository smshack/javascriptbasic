console.log('code1')
console.time('timeout 0')
setTimeout(() => {
    console.log('setTimeout 0 다음')
    console.timeEnd('timeout 0')
}, 0);

console.log('code2')
setImmediate(() => {
    console.log('setImmediate 0 다음 다음')
}, 0);

console.log('code3')
process.nextTick(() => {
    console.log('process.nextTick 0 우선순위 최고')
}, 0);

for (let i = 0; i < 100000000; i++) {

}