const jwt = require('jsonwebtoken');

const secret = 'a2431875-6f0c-46b9-8957-032fdacd726e';
const token = jwt.sign(
  {
    identifier: 'gjudec000',
    password: 'gjudec000',
  },
  secret,
  { expiresIn: "2h" } // 유효기간
);
console.log(token)
// secretOrPrivateKey 길이는 보통 32
// const edited = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNkZmFzZGZhc2RmYXNkZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjMxNzY4NywiZXhwIjoxNjMyMzE3Njg5fQ.D1kjR4B4wlU8FaBLwJEp03A0lUO7MxLOl4RPuhOzwXw`;
// setTimeout(() => {
//   jwt.verify(edited, secret, (error, decoded) => {
//     console.log(error, decoded);
//   });
// }, 3000);
// console.log(token);
