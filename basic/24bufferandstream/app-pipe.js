const fs = require('fs')
const zlib = require('zlib')

const writeStream = fs.createWriteStream('./file4.zip')
const zlibStream = zlib.createGzip()
const readStrean = fs.createReadStream('./file.txt')
const piping = readStrean.pipe(zlibStream).pipe(writeStream)

piping.on('finish', () => {
    console.log('done!!!')
})