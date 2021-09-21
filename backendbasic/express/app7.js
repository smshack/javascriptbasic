const express = require('express');
const fs = require('fs')
const fsAsync = require('fs').promises
const app = express()
// 에러 처리
const express_error = require('express-async-errors')
// 바디 파서 사용
app.use(express.json())

app.get('/file1',async (req,res,next)=>{

   return fsAsync.readFile('/file.txt')
})

// 에러 헨들러 등록해야 함
app.use((error, req, res, next)=>{
    console.error(error)
    res.status(500).json({message:"something went wrong"})
})

app.listen(30007)