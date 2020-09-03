// 解决异步问题
// 第一次调用next方法开始执行到第一次request对象发送请求a
// a成功之后会再次调用getData的next方法
// 这时next方法传入的参数res就是上一次得到的异步的数据
// 同时传递给next方法作为上一步yield request('static/a.json')表达式的返回值，使用了res1接收
// request的成功函数中继续调用next方法，会接下来去执行到yield request('static/b.json')
// 只有成功才会继续调用next
// 这就是解决异步的方式
function request(url) {
    ajax(url, res => {
        getData.next(res)
    })
}

function* gen() {
    let res1 = yield request('static/a.json')
    console.log(res1)
    let res2 = yield request('static/b.json')
    console.log(res2)
    let res3 = yield request('static/c.json')
    console.log(res3)
}
let getData = gen()
getData.next()

// 我们经常玩一些小游戏， 比如数数字， 敲7， 到7和7的倍数， 无限循环转圈去数数

function* count(x = 1) {
    while (true) {
        if (x % 7 === 0) {
            yield x
        }
        x++
    }
}
// es5中就是个死循环 因为es5的循环需要有个终止值，但我们这个需求没有终止，一直在数数
let n = count()
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)