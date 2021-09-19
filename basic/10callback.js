// javascript is synchronous.
// Execute the code block by orger after hoisting
const readline = require("readline");
// console.log(1)
// setTimeout(() => console.log(2), 1000);
// console.log(3)


// const printImmediately = (print) => {
//     print();
// }
// printImmediately(() => console.log('hello'))

// const pintWithDelay = (print, timeout) => {
//     setTimeout(print, timeout)
// }
// pintWithDelay(() => console.log('async callback'), 2000)


class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id == 'jarry' && password == "dream") ||
                (id == 'coder' && password == "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'))
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user == 'jarry') {
                onSuccess({ name: 'jarry', role: "admin" })
            } else {
                onError(new Error('no access'))
            }
        }, 2000);
    }
}
// 1. id, password를 입력 받아서
// 2. login이 된다면
// 3. role을 받아와서
// 4. 사용자 정보와 권한을 출력


const userStorage = new UserStorage();
const loginprogram = async () => {
    const id = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const password = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    await id.prompt('enter your id')
    await password.prompt('enter your password')
    userStorage.loginUser(
        id,
        password,
        user => {
            userStorage.getRoles(
                user,
                userWithWithRole => {
                    alert(`hello ${userWithRole.name} , you have a ${userWithRole.role} role`)
                },
                error => {
                    console.log(error)
                }
            )
        },
        error => {
            console.log(error)
        }
    )
}

loginprogram()

