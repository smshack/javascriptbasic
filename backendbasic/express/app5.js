const express = require('express');
const app = express()

// 바디 파서 사용
app.use(express.json())

app.post('/',(req,res,next)=>{

    console.log('post')
    return res.send(req.body)
})


app.listen(30005)