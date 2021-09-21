// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다

const  fs  = require('fs')
const os = require('os')
const path = require('path')

console.log(__dirname)
const workingDir = __dirname

const videoDir =path.join(workingDir,'video')
const capturedDir =path.join(workingDir,'captured')
const duplicatedDir =path.join(workingDir,'duplicated')
console.log(videoDir)
console.log(capturedDir)
console.log(duplicatedDir)

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다
fs.mkdirSync(videoDir,{recursive:true})
fs.mkdirSync(capturedDir,{recursive:true})
fs.mkdirSync(duplicatedDir,{recursive:true})
// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png,|aee, IMG_E12134
fs.promises.readdir(workingDir)
    .then(processFiles)
    .catch(console.log)

function processFiles(files){
    files.forEach((file)=>{
        if(isVideoFile(file)){
            move(file,videoDir)
        }else if(isCapturedFile(file)){
            move(file,capturedDir)
        }else if(isDuplicatedFile(files,file)){
            move(file,duplicatedDir)
        }
    })
}
function isVideoFile(file){
    const regExp =/(mp4|mov)$/gm;
    const match = file.match(regExp)
    console.log(file)
    return !!match;
}
function isCapturedFile(file){
    const regExp =/(png|jpg)$/gm;
    const match = file.match(regExp)
    console.log(file)
    return !!match;
}
function isDuplicatedFile(files,file){
    // IMG_XXXX -> IMG_EXXX
    if(!file.startsWith('IMG_')|| file.startsWith('IMG_E')){
        return false
    }
    const edited =`IMG_E${file.split('_')[1]}`
    const found=files.find(f =>f.includes(edited))
    console.log(file)
    return !!found;
}

function move(file,targetDir){
    console.log(`move ${file} to ${path.basename(targetDir)}`)
    const oldPath=path.join(workingDir,file)
    const newPath=path.join(targetDir,file)
    fs.promises
    .rename(oldPath,newPath)
    .catch(console.error)
}