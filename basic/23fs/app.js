const fs = require('fs')

// 3
// rename(..., callback(error,data))
// try{renameSync(....) }catch(e){} => block 끝날때 까지 기다림
// promises.rename().then().catch(0)

try {
    fs.renameSync('./file1.txt', './file-new.txt')

} catch (error) {
    console.error(error)
}
console.log('hello')

fs.rename('./file-new.txt', './file1.txt', (error) => {
    console.log(error)
})

fs.promises.rename('./file2.txt', './file2-new.txt')
    .then(() => console.log('Done!'))
    .catch((error) => console.log)