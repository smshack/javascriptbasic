const _ =require('lodash')
const cookies = {
    username:'test@naver.com',
    tempass:"dfasdfasdf"
}

const cookies2 = {
    username:'test@naver.com',
}

console.log(_.isEmpty(_.get(cookies2, 'tempass')) ? `아이디:${ _.get(cookies2, 'username')}`
:`아이디:${ _.get(cookies2, 'username')} 임시비밀번호:${_.get(cookies2, 'tempass')}`
)


