"use strict";
// 定义⼀个泛型函数，T 是泛型参数
function identity(arg) {
    return arg;
}
// 使⽤泛型函数
let output1 = identity("Hello TypeScript!"); // 明确指定 T 为 string
let output2 = identity(42); // 明确指定 T 为 number
console.log(output1); // 输出: Hello TypeScript!
console.log(output2); // 输出: 4
// 使⽤泛型接⼝
let pair1 = { first: "One", second: 1 };
let pair2 = { first: true, second: "True" };
console.log(pair1); // 输出: { first: "One", second: 1 }
console.log(pair2); // 输出: { first: true, second: "True" }
// 定义⼀个泛型类
class GenericNumber {
    constructor(zeroValue, addFn) {
        this.zeroValue = zeroValue;
        this.add = addFn;
    }
}
// 使⽤泛型类
let myGenericNumber = new GenericNumber(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10)); // 输出: 15
let myGenericString = new GenericNumber("", (x, y) => x + y);
console.log(myGenericString.add("Hello, ", "World!")); // 输出: Hello, World!
// 泛型函数，要求 T 必须具有 length 属性
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
// 使⽤泛型函数
logLength("Hello TypeScript!"); // 输出: 16
logLength([1, 2, 3]); // 输出: 3
logLength({ length: 10, value: 42 }); // 输出: 10
// logLength(42); // 错误: number 类型没有 length 属性
// 定义⼀个带有默认泛型类型的函数
function createArray(length, value) {
    return Array(length).fill(value);
}
// 使⽤泛型函数
let stringArray = createArray(3, "Hello"); // 推断 T 为 string
let numberArray = createArray(3, 42); // 显式指定 T 为 number
console.log(stringArray); // 输出: ["Hello", "Hello", "Hello"]
console.log(numberArray); // 输出: [42, 42, 42]
