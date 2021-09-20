const fs = require('fs')

const readStrean = fs.createReadStream('./file.txt', {
    highWaterMark: 1024, //8bit
    encoding: 'utf-8',
})

const data = []
readStrean.on('data', chunk => {
    data.push(chunk)
    console.count('data')
})

readStrean.on('error', error => console.log)

readStrean.on('end', () => {
    console.log(data.join(''))
})