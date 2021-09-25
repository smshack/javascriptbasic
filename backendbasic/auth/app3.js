const crypto = require('crypto')

// 32byte key
const key = "ZcadyUjxqitUqPxyvJzBqliQs9ctnTN6";
// 16byte
const iv = 'l2LY4bYTVIa69QvO';
const value = `email:test@obenef.com&user_id:20042223&name:홍길동&HP:010-1234-5678&Organization:전남대학교&Major:이러닝학과`
const cipher = crypto.createCipheriv('aes-256-cbc', key,iv);
console.log(cipher,'cipher')
let encodedresult = cipher.update(value, 'base64', 'utf8');
console.log(encodedresult,'encodedresult');
encodedresult += cipher.final('base64');
console.log(encodedresult,'encodedresult')

const decipher = crypto.createDecipheriv('aes-256-cbc', key,iv);
let decodedresult = decipher.update(encodedresult, 'base64', 'utf8');

console.log(decodedresult,'decodedresult')
// decodedresult+= decipher.final('utf8');

