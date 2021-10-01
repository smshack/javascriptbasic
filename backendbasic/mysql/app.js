const express = require('express');
const mysql = require('mysql2');
const app = express();
const { config } = require('./config');
console.log(config.mysql);
const pool = mysql.createPool({
  host: config.mysql.host,
  user: config.mysql.user,
  database: config.mysql.database,
  password: config.mysql.password,
});

const db = pool.promise();
// 바디 파서 사용
app.use(express.json());
// 디비를 연결해서 연결이 성공하면 커넥션 정보를 받아온다

db.getConnection().then((connection) => console.log(connection));
app.get('/', (req, res, next) => {
  return res.send(req.body);
});

app.listen(30005);
