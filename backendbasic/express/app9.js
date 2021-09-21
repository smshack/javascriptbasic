const express = require('express');
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const morgan = require('morgan') //요청 정보 로깅
const helmet = require('helmet') // 보안에 필요한 옵션을 헤더에 추가

const corsoption ={
    origin:['http://34.84.226.175:30009'],//이 주소에서 요청이 들어 왔으면 허용해줘도 되
    optionsSuccessStatus:200,
    credentials:true
}
const express_static_options ={
    dotfiles:"ignore",
    etag:false,
    index:false,
    maxAge:'1d',
    redirect:false,
    setHeaders:function(res,path,stat){
        res.set('x-timestamp',Date.now())
    }
}
app.use(express.json()) // rest api, body
app.use(cookieParser()) // 쿠키 파싱
app.use(morgan('combined'))
app.use(express.urlencoded({extended:false})) // HTML Form -> body
app.use(cors(corsoption))
app.use(helmet())


// http://localhost:30008/index.html
app.use(express.static('public',express_static_options))

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//       'Access-Control-Allow-Methods',
//       'OPTIONS, GET, POST, PUT, DELETE'
//     );
//     next();
//   });
  
  app.get('/', (req, res) => {
    console.log(req.cookies)
    res.send('Welcome!');
    
  });


app.listen(30009)