// 默认参数
function foo(x, y = 'world') {
    // undefined or null 才会走默认参数
    console.log(x, y)
}
foo('hello', 0)
// 注意这段代码，先进行了默认参数，然后对于默认参数又进行了一次解构赋值
function ajax(url, {
    body = '',
    method = 'GET',
    headers = {}
} = {}) {
    console.log(method)
}

ajax('http://www.imooc.com', {
    method: 'POST'
})


// function length 返回第一个默认参数前的形参个数
function foo(a, b = 1, c) {
    console.log(foo.length)
}
foo('a', 'b') // 1
function foo(a = 2, b = 1, c) {
    console.log(foo.length)
}
foo('a', 'b') // 0



// Rest参数 Rest为数组
function sum(...nums) {
    let num = 0
    nums.forEach(function (item) {
        num += item * 1
    })
    return num
}
console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4)) // 10
function sum(base, ...nums) {
    let num = base
    nums.forEach(function (item) {
        num += item * 1
    })
    return num
}
console.log(sum(30, 1, 2, 3)) // 36
console.log(sum(30, 1, 2, 3, 4)) // 40

// Spread Operator 和 Rest Parameter 是形似但相反意义的操作符， 简单的来说 Rest Parameter 是把不定的参数“ 收敛” 到数组， 而 Spread Operator 是把固定的数组内容“ 打散” 到对应的参数。 示例如下：

function sum(x = 1, y = 2, z = 3) {
    return x + y + z
}

console.log(sum(...[4])) // 9
console.log(sum(...[4, 5])) // 12
console.log(sum(...[4, 5, 6])) // 15

// 函数的name属性
function foo() {}
foo.name // foo

(new Funciton()).name // anonymous


function foo() {
    this.a = '6'
}
foo.bind({}).name // 多了一个关键字 bound foo

function () {}.bind({}).name // bound

// 箭头函数就不做演示了 太常规了吧