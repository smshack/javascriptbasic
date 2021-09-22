const jwt = require('jsonwebtoken');

const secret = 'asefasdfasdfasdf';
const token = jwt.sign(
  {
    id: 'sdfasdfasdfasdf',
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 } // 유효기간
);
// secretOrPrivateKey 길이는 보통 32
const edited = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNkZmFzZGZhc2RmYXNkZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMjMxNzY4NywiZXhwIjoxNjMyMzE3Njg5fQ.D1kjR4B4wlU8FaBLwJEp03A0lUO7MxLOl4RPuhOzwXw`;
setTimeout(() => {
  jwt.verify(edited, secret, (error, decoded) => {
    console.log(error, decoded);
  });
}, 3000);
console.log(token);
