const bcrypt = require('bcrypt');

const password = 'abcd1234';
const hashed = bcrypt.hashSync(password, 10);

console.log(`password:${password} | hashed:${hashed}`);

// 사용자의 비밀번호와 hashed 값 비교
const result = bcrypt.compareSync('abcd1234', hashed);
console.log(result);
