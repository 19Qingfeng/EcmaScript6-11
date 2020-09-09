// 非window
let a = 'let statement'
console.log(window.a) // undefined


// 不可重复声明
let a = 5
let a = 6
// var可以重复进行覆盖 let在同一作用域中
// VM131:1 Uncaught SyntaxError: Identifier 'a' has already been declared
//   at <anonymous>:1:1

// 不存在变量提升
function foo() {
    console.log(a) // var 变量提升 JS预加载
    var a = 5
}

// 相当于
// function foo() {
//     var a
//     console.log(a)
//     a = 5
// }

foo() //undefined


function foo() {
    console.log(a)
    let a = 5
}

foo()
// Uncaught ReferenceError: Cannot access 'a' before initialization



//  let声明的变量具有暂时性死区
var a = 5
if (true) {
    a = 6
    let a
}
// Uncaught ReferenceError: Cannot access 'a' before initialization
// 先使用在声明相同作用域内会报错

// 块级作用域
{
    let a = 3;
}
console.log(a) // undefined


/* 常见面试题 let和const 闭包的区别 */
for (var i = 0; i < 3; i++) {
    console.log('循环内:' + i) // 0、1、2
}
console.log('循环外:' + i) // 3 

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    })
}
// 3、3、3
// 想要得到1,2,3

// 方法1：使用闭包 匿名函数自执行传递参数结合function作用域
for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j)
        })
    })(i)
}

// 方法2使用let
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    })
}


// const 定义常亮不可修改
const a = 3;
a = 4 // 报错

const obj = {
    a:"3"
}
obj["a"] = 6 
obj["b"] = 3
// 这是可以的，因为实际指向的内存地址并没有改变。