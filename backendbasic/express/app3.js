const express = require('express');
const app = express()

app.get('/',(req,res,next)=>{
    console.log('get')
    res.setHeader('key','value')
    res.status(201).json({name:'jarry'})
})


app.listen(30003)