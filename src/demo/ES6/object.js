// 属性简洁表示法
let name = 'xiecheng'
let age = 34
let obj = {
    name,
    age,
    study() {
        console.log(this.name + '正在学习')
    }
}

// 属性名表达式
let s = 'school'
let obj = {
    foo: 'bar',
    [s]: 'wang.haoyu'
}

// Object.is()
let obj1 = { // new Object()
    name: 'wang.haoyu',
    age: 34
}

let obj2 = { // new Object()
    name: 'wang.haoyu',
    age: 34
}
console.log(obj1 == obj2) // false

console.log(Object.is(obj1, obj2)) // false

let obj2 = obj1

console.log(Object.is(obj1, obj2)) // true

// Object.assign()
const target = {
    a: 1,
    b: 2
}
const source = {
    b: 4,
    c: 5
}

const returnedTarget = Object.assign(target, source)

console.log(target)
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget)
// expected output: Object { a: 1, b: 4, c: 5 }

let target = {
    a: {
        b: {
            c: 1
        },
        e: 4,
        f: 5,
        g: 6
    }
}
let source = {
    a: {
        b: {
            c: 1
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
console.log(target) // 浅拷贝 丢失g属性

// Object的遍历
let obj = {
    name: 'wang.haoyu',
    age: 34,
    school: 'colleges'
}
// Array中演示过，for...in不能够用于遍历Array，for...in的作用是用于遍历对象的。

for (let key in obj) {
    console.log(key, obj[key])
}
Object.keys() // 用于返回对象所有key组成的数组。

Object.keys(obj).forEach(key => {
    console.log(key, obj[key])
})
Object.getOwnPropertyNames() // 用于返回对象所有key组成的数组。

Object.getOwnPropertyNames(obj).forEach(key => {
    console.log(key, obj[key])
})
Reflect.ownKeys() // 用于返回对象所有key组成的数组。

Reflect.ownKeys(obj).forEach(key => {
    console.log(key, obj[key])
})