// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // 배열을 스트링으로 이어 붙여라
    console.log(`1. 배열을 문자열로 이어 붙여라 join`)
    const result = fruits.join('')
    const result2 = fruits.join(',')
    const result3 = fruits.join('|')
    console.log(result)
    console.log(result2)
    console.log(result3)
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    console.log(`2. 문자열을 특정 문자를 기준으로 배열로 만들기 split`)
    const result = fruits.split(',')
    console.log(result)
    result.forEach((value, index) => {
        console.log({ value, index })
    });
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(`3. 배열을 반대로 돌리기 reverse`)
    const result = array.reverse()
    console.log(array, 'array')
    console.log(result, 'result')
    console.log(array, 'array')
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    console.log(`4. 주어진 배열에서 첫번째 두번째를 제외한 배열을 만들어라slice,splice`)
    const result1 = array.slice(2, 5)
    console.log(result1)
    const result2 = array.splice(0, 2)
    console.log(array, 'array')
    console.log(result2, 'result2')
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    console.log(`5. 배열에서 원하는 조건에 맞는 값 찾기 find`)
    console.log(`   find(predicate: (value: number, index: number, obj: Int8Array) => boolean, thisArg?: any): number | undefined;`)
    const result = students.find((student, index) => {
        console.log({ student, index });
        return student.score == 90;
    })
}

// Q6. make an array of enrolled students
{
    console.log(`6. 원하는 조건에 맞는 값들만 다시 배열로 만들기 filter`)
    const result = students.filter((student) => student.enrolled)
    console.log(result)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log(`7. 배열안에 있는 값들을 원하는 필드 값만 빼서 만들거나 원하는 계산등을 포함해서 리턴 배열 만들기 map`)
    const result = students.map((student) => student.score);
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
    console.log(`8. 배열에서 하나라도 원하는 조건에 부합하는 값이 있는가 some`)
    const result = students.some((student) => student.score < 50);
    console.log(result)
    console.log(`every 배열의 모든값이 원하는 조건을 만족하는지 확인할 때`)
    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2)
}

// Q9. compute students' average score
{
    console.log(`9. 해당 배열에서 원하는 값을 누적하여 계산할경우 사용 reduce`)
    console.log(`reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number): number;    `)
    const result = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).join()
    console.log(result)

    const result2 = students
        .map((student) => student.score)
        .filter(score => score >= 50)
        .join();
    console.log(result2)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map((student) => student.score)
        .sort((a, b) => a - b)
        .join()
    console.log(result)
}