// const name = 'jarry';
// const age = 4;
// print(name, age);

const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name)
    console.log(person.age)
}

const jarry = { name: 'jarry', age: 4 }

print(jarry)
console.log(jarry)
// 프로그램이 동작하고 있을 때 데이터 형이 정해짐
jarry.hasJob = true;
console.log(jarry)
delete jarry.name;
console.log(jarry)

// 2. 계산된 프로퍼티
console.log(jarry.age)
console.log(jarry['age']) // 정확하게 어떤키가 필요한지 모를때
const somekey = 'hasJob'
console.log(jarry[`${somekey}`])
jarry['name'] = 'jarry';
console.log(jarry)

// 해당 키는 스트링으로 보내야 함
function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(jarry, 'name')
printValue(jarry, 'age')
printValue(jarry, 'hasJob')

// 3. 
const person1 = { name: 'bob', age: 2, job: 'developer' }
const person2 = { name: 'steve', age: 3 }
const person3 = { name: 'dave', age: 4 }
const person4 = new Person('jarry', 5)
console.log(person4)
// 4. constructor function
function Person(name, age) {
    //this ={};
    this.name = name;
    this.age = age;
}

//5. in operator
// 해당 키가 있는지 없는지 확인
console.log('name' in person1)
console.log('random' in person1)

// 6. for ..in vs for... of
//for (key in obj)
for (key in person1) {
    console.log(key)
}

// for(value of iterable)
const array = [1, 2, 3, 4, 5];
for (arr of array) {
    console.log(arr)
}

// cloning
// object.assign(dest,[obj1,obj2,obj3...])
const user = { name: 'jarry', age: 20 }
const user2 = user;
user2.name = 'coder'
console.log(user)

const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3)

// 오브젝트를 복사
const user4 = { job: 'developer' }
const copyvalue = Object.assign(user4, user)
console.log(copyvalue)
console.log(user4, 'user4')

let user5 = { job: 'developer5', ...user2 }
console.log(user5)

