const path = require('path')

console.log(__dirname)
console.log(__filename)

console.log(path.sep)//경로 구분
console.log(path.delimiter)// 환경 변수 구분

//bashname
console.log(path.basename(__filename))
console.log(path.basename(__filename, '.js')) // 확장자 제거

// dirname
console.log(path.dirname(__filename));

//extension
console.log(path.extname(__filename))

// parse
const parsed = path.parse(__filename)
console.table(parsed)

const str = path.format(parsed)
console.log(str)

//isAbsolute
console.log('isAbsolute?', path.isAbsolute(__dirname))
console.log('isAbsolute?', path.isAbsolute('../'))

// normalize
console.log(path.normalize('./folder//////sub'))

//join
console.log(`${__dirname}${path.sep}image`)
console.log(path.join(__dirname, 'image'))

