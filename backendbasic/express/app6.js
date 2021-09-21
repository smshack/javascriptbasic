const express = require('express');
const fs = require('fs')
const fsAsync = require('fs').promises
const app = express()

// 바디 파서 사용
app.use(express.json())

app.get('/file1',(req,res,next)=>{
    // 동기
    // try {
    //     const data = fs.readFileSync('/file.txt')
    // } catch (error) {
    //     return res.status(404).send('File not found')
    // }
    // 비동기 적으로 처리 될 때는 에러를 밖으로 던져 줘야
    // 외부에서 에러가 발생하는지 알수 있다
        fs.readFile('/file1.txt',(err,data)=>{
            if(err){
                return res.status(404).send('File not found')
            }
        })
   
})

// 비동기일 경우 에러를 찾을 때는 try catch로 잡을 수 없음
app.get('/file2',(req,res)=>{
    fs.readFile('/file.txt')
    .then((data)=>{})
    .catch((error)=>res.status(404).send('File not found'))
})

// 동기적으로 실행되지만 함수 자체는 리턴되는 함수는 promise로 비동기기 때문에 에러를 밷지 않고 멈춤
// 어떻게 처리 할까요??
app.get('/file3',async (req,res)=>{
    try {
        const data = await fsAsync.readFile('/file.txt')

        return res.send(data)
    } catch (error) {
        return res.status(404).send('File not found')
    }
    
})

// 에러 헨들러 등록해야 함
app.use((error, req, res, next)=>{
    console.error(error)
    res.status(500).json({message:"something went wrong"})
})

app.listen(30006)