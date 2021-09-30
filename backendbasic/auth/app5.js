console.log(`동적으로 패스워드 생성 AAAA1111
(A~Z 랜덤, 1~9 랜덤)`)

let str = ''
for(let i = 0;i<4 ;i++){
    str +=Math.floor((Math.random() * 26)+10).toString(36).toUpperCase()
}
let numberstring = ''

for(let i = 0;i<4 ;i++){
    numberstring +=Math.floor((Math.random() * 10)).toString(10).toUpperCase()
}

const password = `${str}${numberstring}`
console.log(password)
