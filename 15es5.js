{
    const ellie1 = {
        name: 'Ellie',
        age: '18'
    }
    console.log(ellie1)
}
const name = "Ellie"
const age = '18'
console.log({ name, age })
const ellie2 = {
    name: name,
    age: age
}
console.log(ellie2)
const ellie3 = {
    name,
    age
}
console.log(ellie3)
{
    {
        const student = {
            name: "Anna",
            level: 1,
        }
        const name = student.name;
        const level = student.level;
        console.log({ name, level })
    }
    {
        const student = {
            name: "Anna",
            level: 1,
        }
        const { name, level } = student
        console.log({ name, level })
    }
    {
        const student = {
            name: "Anna",
            level: 1,
        }
        const { name: stuaneme, level: stulevel } = student
        console.log({ stuaneme, stulevel })
    }
}

{
    const animals = ['강아지', '고양이', '사자', '호랑이', '자라']
    {
        const first = animals[0]
        const second = animals[1]
        console.log(first, second)
    }
    {
        const [first, second, ...third] = animals
        console.log(first, second, third)
    }
}

{
    const obj1 = { key: 'key1' }
    const obj2 = { key: 'key2' }
    const array = [obj1, obj2]

    // array copy
    const arrayCopy = [...array, { key: 'key3' }]
    console.log(array)
    obj1.key = "newKey"
    console.log(arrayCopy)

    //obj copy
    const obj3 = { ...obj1 };
    console.log(obj3)

    //array concatenation
    const fruits1 = ['사과', '배']
    const fruits2 = ['포토', '딸기']
    const fruits = [...fruits1, ...fruits2]
    console.log(fruits)

    //object merge
    const objs = { ...obj1, ...obj2 }
    // 키값이 같을 경우 뒤에 온 값으로 덮어씌워짐
    console.log(objs)
}

{
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message'
            }
            console.log(message)
        }
    }
    printMessage('hello')
    printMessage()
}

{
    {
        function printMessage(message = "default message") {
            console.log(message)
        }
    }
    printMessage('hello')
    printMessage()
}

{
    const isCat = true;
    {
        let component = isCat ? '고양이' : '강아지'
        console.log(component)
    }
}

{
    const person1 = {
        name: "Ellie",
        job: {
            title: 'S/W Engineer',
            manager: {
                name: 'Bob'
            }
        }
    }
    const person2 = {
        name: 'Bob'
    }

    {
        function printManger(person) {
            console.log(person.job.manager.name)
        }
        printManger(person1)
        // printManger(person2) Error
    }
    {
        function printManger(person) {
            console.log(person.job
                ? person.job.manager
                    ? person.job.manager.name
                    : undefined
                : undefined
            )
        }
        printManger(person1)
        printManger(person2)
    }
    {
        function printManger(person) {
            console.log(person.job && person.job.manager && person.job.manager.name)
        }
        printManger(person1)
        printManger(person2)

    }

    {
        function printManger(person) {
            console.log(person.job?.manager?.name)
        }
        printManger(person1)
        printManger(person2)
    }

    {
        // Logincal OR operator
        // false : false, '',0, null, undefined
        const name = 'Ellie';
        const userName = name || "Guest"
        console.log(userName)
    }
    {
        const name = ''
        const userName = name || 'Guest'
        console.log(userName)
    }
    {
        const name = ''
        const userName = name ?? "Guest";
        console.log(userName)

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message)
    }
}
