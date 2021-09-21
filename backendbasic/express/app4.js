const express = require('express');
const app = express()

// 미들웨어 처리를 잘 해줘야 함
// 라우팅은 미들웨어 체이닝이랑 같은 개념
// next로 다음으로 넘기고 응답을 안해주면 멈춰있음

// 이 경로에 한해서만 수행
// api
app.all('/api/*',(req,res,next)=>{
    console.log('all')
    next()
})

// 그 뒤에 어떤 경로를 하더라도 항상 use가 호출
// sky/adfasdf/adfadf
app.use('/sky',(req,res,next)=>{
    console.log('use')
    next()
})

app.get('/',(req,res,next)=>{
    console.log('first1')
    // next('route')
    next()
    // next(new Error('error'))
},
(req,res,next)=>{
    console.log('first2')
    next()
}
)
// send 사용시 return을 같이 써서 해당 함수가 끝나도록 해야 한다
app.get('/',(req,res,next)=>{
    console.log('second')
    return res.send('hihi')
})

// 에러 헨들러 등록해야 함
app.use((error, req, res, next)=>{
    console.error(error)
    res.status(500).send('sorry ! try to later!')
})


app.listen(30004)