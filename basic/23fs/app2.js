const fs = require('fs').promises

//read a file
fs.readFile('./text.txt', 'utf-8')
    .then((data) => console.log(data))
    .catch(console.error)
// 초기화 하고 덮어 쓰기
// fs.writeFile('./file1.txt', 'hello, dream coding')
//     .catch(console.error)

// 이어서 쓰기
fs.appendFile('./file1.txt', 'hello, dream coding')
    .catch(console.error)

// 파일 복사
fs.copyFile('./file1.txt', './copyfile.txt')

// folder
fs.mkdir('sub-folder')
    .catch(console.log)

fs.readdir('./')
    .then(console.log)