const express = require('express');
const fs = require('fs')
const fsAsync = require('fs').promises
const app = express()
const postRouter = require('./router/post')
const userRouter = require('./router/user')

// 에러 처리
const express_error = require('express-async-errors')
// 바디 파서 사용
app.use(express.json()) // rest api, body
app.use(express.urlencoded({extended:false})) // HTML Form -> body
const options ={
    dotfiles:"ignore",
    etag:false,
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeaders:function(res,path,stat){
        res.set('x-timestamp',Date.now())
    }
}
// http://localhost:30008/index.html
app.use(express.static('public',options))

app.use('/posts',postRouter)
app.use('/users',userRouter)
  
// 에러 헨들러 등록해야 함
app.use((error, req, res, next)=>{
    console.error(error)
    res.status(500).json({message:"something went wrong"})
})

app.listen(30008)