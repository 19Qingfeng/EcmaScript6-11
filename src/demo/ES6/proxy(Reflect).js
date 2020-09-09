// ES5中拦截对象的属性
let obj = {}
let newVal = ""
Object.defineProperty(obj, 'name', {
    get() {
        return newVal
    },
    set(val) {
        newVal = val
    }
})

// ES6 Proxy

// get 拦截
let obj = {}
const p = new Proxy(obj, {

})
p.name = 'wanghaoyu'
console.log(obj.name) // wanghaoyu
// 上面代码没有进行任何配置代理拦截 所以对于代理p的才会原封不动的到obj上


// 增加一些拦截的钩子
// 注意这个例子是用in检查receiver（代理）而非target，
// 是因为防止receiver是否含有has陷阱，
// 如果有has陷阱就可以对in进行一层拦截。
// 而源对象target可能会忽略in操作符的has陷阱从而引发错误。
const array = [7, 8, 9]
const p = new Proxy(arr, {
    get(target, props, receiver) {
        // target 表示源对象（被代理的对象）
        // props 表示读取的属性key值
        // receiver表示操作发生的对象（通常是代理）
        if (!(props in receiver)) {
            throw new TypeError("key值不存在")
        }
        // Reflect反射API以对象的形式出现，对象中方法的默认特性与相同的底层操作一致。
        // 也就是return Refelct API就是默认的get值。
        return Reflect.get(target, props, receiver)
    }
})


// set 拦截
// set(target,key,value,receiver)拦截 -> 默认 Reflect.set(target,key,value,receiver)
// target源对象(用于接收属性的对象)，key要写入的属性键，value被写入属性的值，receiver操作发生的对象（代理对象）。
let arr = new Proxy(arr, {
    set(target, key, value, receiver) {
        if (typeof key !== 'number') {
            throw new TypeError("属性必须是数字")
        }
        return Reflect.set(target, key, value, receiver)
    }
})

// has陷阱
// has(target,key) 拦截 -> 默认 Refelect.has(target,key) （对于in拦截）
// target（源对象），key(in操作符前的属性key值)
let range = {
    name: "target",
    value: 42
}
let proxy = new Proxy(range, {
    has(target, key) {
        if (key === 'value') {
            return false // 表示碰到key为value的返回false 不可被for in
        } else {
            return Reflect.has(target, key)
        }
    }
})


// ownKeys拦截
// ownKeys(target) 拦截 -> Refelect.ownKeys(target)
// target源对象。(ownKeys对于Object.keys(),Object.getOwnPropertyNames(),Object,getOwnPropertySymbols()，for in进行拦截)

// ownKeys陷阱唯一接收的参数事操作的目标，返回值必须是一个数组或者类数组对象，否则就会抛出错误。当调用Object.keys(),Object.getOwnPropertyNames(),Object.getOwnPropertySymbols()或者Object.assign()以及for in方法的时候，可以用ownKeys陷阱过滤不想使用的属性键。

let userInfo = {
    username: "wanghaoyu",
    age: 23,
    _password: "***" // 下划线开头的***我并不想被Object.keys()，forin等取到
}

// 这个例子使用了一个ownKeys陷阱，它首先调用Reflect.ownKeys()获取目标的默认key列表
// 接下来用filter()方法过滤掉以下划线自负开始的字符串。然后将过滤后的数组元素添加到proxy的方法返回上
user = new Proxy(userInfo, {
    ownKeys(target) {
        // 返回不以_开头的属性数组
        return Reflect.ownKeys(target).filter(i => !i.startsWith("_"))
    }
})
Object.keys(userInof) // [username,age]

// deleteProperty拦截
// deleteProperty(target,key)陷阱拦截删除 -> Reflect.deleteProperty(target,key)
// target源对象，key需要删除的key值。

// ES5中删除属性delete属性操作符，成功返回true，不成功返回false，严格模式下会报错。配置Object.defineProperty(obj,'xx',{ configurable:false })设置属性不可以配置也就不可以删除了。

// ES6中可以使用代理Proxy代理deleteProperty()来改变这个行为。

let user = {
    name: "wanghaoyu",
    age: 18,
    _password: "***"
}
// 我希望下划线开头的_password属性不可以删除
user = new Proxy(user, {
    deleteProperty(target, key) {
        if (key.startsWith("_")) {
            return false
        } else {
            return Reflect.deleteProperty(target, key)
        }
    }
})


// apply拦截
// apply(target,thisArg,argumentsList)陷阱对于函数的拦截。 -> Reflect.apply(target,this.Arg,argumentsList)
// target被执行的元素（被代理的函数），thisArg函数被调用时内部this的值，argumentsList传递给函数的参数数组。

// 注意形参上的...args并不是扩展，是rest参数
// 将传入的参数合成成为一个数组Array
let sum = (...args) => {
    let num = 0
    args.forEach(i => {
        num += i
    })
    return num
}

// proxy apply
let proxy = new Proxy(sum, {
    // 注意和属性拦截写法的区别哦
    apply: (target, this, args) => {
        return Reflect.apply(target, this, args) * 2
    }
})

console.log(sum(10, 16)) // 26
console.log(proxy(10, 12)) // 52


// constructor陷阱
// constructor(target,argumentList,newTarget)陷阱 -> Reflect.constructor(target,argumentList,newTarget)
// target被代理的class类，argumentList参数列表，newTarget指的是创造实例的时候new命令作用的那个构造函数。

let user = class User {

}

let proxy = new Proxy(user, {
    construct: (target, arguments, newTarget) => {
        return Reflect.constructd(target, arguments, newTarget)
    }
})

class Test {
    constructor() {}
}

let proxy = new Proxy(Test, {
    construct: (target, argList, newTarget) => {
        console.log(target === Test, 'target === Test') // true
        console.log(newTarget === proxy, 'newTarget') // true
    }
})

const test = new proxy()