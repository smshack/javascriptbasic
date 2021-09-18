//1. Obejct to JSON
//stringfy(obj)
// 오브젝트를 json으로 변환
// interface JSON {
//     /**
//      * Converts a JavaScript Object Notation (JSON) string into an object.
//      * @param text A valid JSON string.
//      * @param reviver A function that transforms the results. This function is called for each member of the object.
//      * If a member contains nested objects, the nested objects are transformed before the parent object is.
//      */
//     parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
//     /**
//      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//      * @param value A JavaScript value, usually an object or array, to be converted.
//      * @param replacer A function that transforms the results.
//      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
//      */
//     stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
//     /**
//      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
//      * @param value A JavaScript value, usually an object or array, to be converted.
//      * @param replacer An array of strings and numbers that acts as an approved list for selecting the object properties that will be stringified.
//      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
//      */
//     stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;
// }
console.log(`1. obj => json  stringify`)
let json = JSON.stringify(true)
console.log(json)
json = JSON.stringify(['apple', 'banana'])
console.log(json)
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump`)
    }
}

json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log({ key, value })
    return key === 'name' ? 'jarry' : value;
    // return value
})
console.log(json)

console.log(`2. json => obj parse`)
const obj = JSON.parse(json, (key, value) => {
    console.log({ key, value })
    return key == 'birthDate' ? new Date(value) : value;
})
console.log(obj)
console.log(rabbit.birthDate.getDate())
console.log(obj.birthDate)
