const express = require('express');
const app = express()

app.get('/sky/:id',(req,res,next)=>{
   //curl http://localhost:30002/sky/hihi?keyword=bts
    res.send({path:req.path,header:req.header,params:req.params,query:req.query,ip:req.ip,hostname:req.hostname})
})


app.listen(30002)