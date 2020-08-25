// 任意可迭代对象都可以赋值
let [a, b, c] = "abc" // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3])
//  被赋值的变量还可以是对象的属性，不局限于单纯的变量。
const user = {};
[user.firstName, user.secondName] = 'Kobe Bryant'.split(' ')

console.log(user.firstName, user.secondName) // Kobe Bryant

// 循环体
let user = {
    name: 'John',
    age: 30
}

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`) // name:John, then age:30
}

// 可以跳过赋值元素
// 如果想忽略数组的某个元素对变量进行赋值，可以使用逗号来处理。
// second element is not needed
let [name, , title] = ['John', 'Jim', 'Sun', 'Moon']

console.log(title) // Sun

// rest 参数
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

console.log(name1) // Julius
console.log(name2) // Caesar

// Note that type of `rest` is Array.
console.log(rest[0]) // Consul
console.log(rest[1]) // of the Roman Republic
console.log(rest.length) // 2

// 默认值
// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"]

console.log(name) // Julius (from array)
console.log(surname) // Anonymous (default used)

// 重命名
let {width: w, height: h, title} = options

// 字符串也可以解构
let str = 'imooc'

let [a, b, c, d, e] = str

console.log(a, b, c, d, e)