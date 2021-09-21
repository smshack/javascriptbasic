const express = require('express');
const app = express()

app.get('/',(req,res,next)=>{
    console.log('get')
    res.send('hihi')
})


app.listen(30001)