'use strict';
// 1. 클래스를 선언
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    //method
    speak() {
        console.log(`${this.name}: hello!`)
    }
}
console.log(`1. class 선언과 오브젝트로 사용`)
const jarry = new Person('jarry', 27);
console.log(jarry.name)
console.log(jarry.age)

//2. getter, setter
console.log(`2. getter and setter`)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // getter를  정의할 경우
    // 위에 constructor 안에 this.age 
    // 메모리를 읽어오는 것이 아니라 아래의 getter를 호출하게 됨
    // 해당 변수의 이름이 같을 경우 로직이 돌아서 변수명을 다르게 지정해 줘야 함
    // get을 이용하여 값을 리턴하고
    get age() {
        return this._age;
    }

    //setter를 정의할 경우
    //  위의 constructor this.age = age; 값을 할당할 때
    // 메모리에 값을 할당하는 것이 아니라
    // 아래의 setter을 호출하게 됨
    // 해당 변수의 이름이 같을 경우 로직이 돌아서 변수명을 다르게 지정해 줘야 함
    // set을 값을 설정해야 됨
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative')
        // }
        this._age = value < 0 ? 0 : value;
    }
}

// 나이가 음수가 되는건 말이 안됨
// 사용자가 이상하게 사용하더라도
// 개발자가 getter로 불러와서 setter로 값을 초기화 시켜줄수 있음
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age)

// 3. Fields(public, private)
console.log(`3. Fields(public, private)`)

class Experiment {
    publicField = 2;// 외부에서 접근 가능
    #privateField = 0; // 클래스 내부에서만 사용 가능
}

const experiment = new Experiment();
console.log(experiment.publicField)
console.log(experiment.privateField);

// 4. static
// 오브젝트에 상관 없이 
// 전체에 동일하게 사용할 수 있는 static으로 정의된 클래스 자체에서 사용하는 것
// 들어오는 값과 상관 없이 사용할 수 있도록 클래스에서 사용
console.log(`4. static`)
class Article {
    static publisher = "Dream Coding";
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.printPublisher)
Article.printPublisher()

// 5. 상속과 다형성
// 도형의 경우 공통점을 찾고 shape 너비 높이
console.log(`5. 상속과 다형성`)

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.heigth = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color of`)
    }
    getArea() {
        return this.width * this.heigth;
    }
}

// 오버라이딩
// 상속 받은 후
// 원하는 부분만 재 정의해서 사용
class Rectangle extends Shape {
    draw() {
        console.log(`네모 ${this.color}`)
    }
}

class Triangle extends Shape {
    draw() {
        super.draw();// 부모의 메서드도 같이 사용하고 싶다면
        console.log(`세모 ${this.color}`)
    }
    getArea() {
        return this.width * this.heigth / 2;
    }
    toString() {
        return `색:${this.color}\n 밑변${this.width}\n 높이${this.heigth}\n 넓이${this.getArea()}\n 인 삼각형`
    }
}

const rectangle = new Rectangle(20, 20, 'blue')
rectangle.draw()
console.log(rectangle.getArea())
const triangle = new Triangle(20, 20, "red");
triangle.draw()
console.log(triangle.getArea())
console.log(triangle.toString())
// 6. class checking
console.log(rectangle instanceof Rectangle)
console.log(triangle instanceof Rectangle)
console.log(triangle instanceof Triangle)
console.log(triangle instanceof Shape)
console.log(triangle instanceof Object)

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
            break;
        case 'substraact':
            return a - b;
            break;
        case 'divide':
            return a / b;
            break;
        case 'multiply':
            return a * b;
            break;
        case 'remainder':
            return a % b;
            break;
        default:
            throw Errow('unkonwn command')
            break;
    }
}
console.log(calculate('add', 2, 3))
console.log(calculate('substraact', 2, 3))
console.log(calculate('divide', 2, 3))
console.log(calculate('multiply', 2, 3))
console.log(calculate('remainder', 2, 3))
console.log(calculate('??', 2, 3))