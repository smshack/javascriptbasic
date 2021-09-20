const EventEmitter = require('events')

const emitter = new EventEmitter();

const callback1 = (args) => {
    console.log('first callback - ', args)
}
// 이벤트 이미터
emitter.on('jarry', callback1)

emitter.on('jarry', (args) => {
    console.log('second callback - ', args)
})

emitter.emit('jarry', { message: 1 })
emitter.emit('jarry', { message: 2 })
emitter.removeAllListeners();
emitter.emit('jarry', { message: 3 })