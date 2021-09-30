const crypto = require('crypto');

// 32byte key
const key = 'ZcadyUjxqitUqPxyvJzBqliQs9ctnTN6';
// 16byte
const iv = 'l2LY4bYTVIa69QvO';
// const value = 'email:msakim@chosun.ac.kr&user_id:737853&name:김명수&HP:010-7131-6873&Organization:조선대학교&Major:치의학과'
// const value =
//   'email:test@test.com&user_id:737853&name:서명석&HP:010-7131-6873&indentity:교수자&Organization:조선대학교&Major:치의학과';
const value =
  'email:test22@test22.com&user_id:737853&name:test22&HP:010-7131-6873&indentity:교수자&Organization:조선대학교&Major:치의학과';
// {
// 	"_id" : ObjectId("611c5abd51b6e87fcc8cb54f"),
// 	"confirmed" : true,
// 	"blocked" : false,
// 	"gender" : null,
// 	"isLunarBirth" : null,
// 	"isEmailAlarm" : "y",s
// 	"isSmsAlarm" : "n",
// 	"identity" : "professor",
// 	"username" : "msakim@chosun.ac.kr",
// 	"email" : "msakim@chosun.ac.kr",
// 	"password" : "$2a$10$ilQW72pU69DgdGBWb6gQCOXwFyMybYCEF77uYfHH51qlpHuOmaaqq",
// 	"name" : "김명수",
// 	"nickname" : "김명수",
// 	"hp" : "010-7131-6873",
// 	"organization" : "조선대학교",
// 	"user_num" : "737853",
// 	"major" : "치의학과",
// 	"provider" : "local",
// 	"createdAt" : ISODate("2021-08-18T09:56:29.449+09:00"),
// 	"updatedAt" : ISODate("2021-08-18T09:56:29.455+09:00"),
// 	"__v" : NumberInt(0),
// 	"role" : ObjectId("602a25c5b2b9050bdac24a47")
// }
const encrypto = (value) => {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encodedresult = cipher.update(value, 'utf8', 'base64');
  encodedresult += cipher.final('base64');

  return encodedresult;
};

const decrypto = (encoded) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decodedresult = decipher.update(encoded, 'base64', 'utf8');
  decodedresult += decipher.final('utf-8');
  return decodedresult;
};

const encoded = encrypto(value);
console.log(encoded);
const decoded = decrypto(encoded);
console.log(decoded);
