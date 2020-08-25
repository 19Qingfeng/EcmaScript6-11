// ES5声明类

let Animal = function (type) {
    this.type = type
    this.walk = function () {
        console.log(`I am walking`)
    }
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')

let Animal = function (type) {
    this.type = type
}

Animal.prototype.walk = function () {
    console.log(`I am walking`)
}

let dog = new Animal('dog')
let monkey = new Animal('monkey')

// ES6中的类 class其实就是ES5的语法糖
class Animal {
    constructor(type) {
        this.type = type
    }
    // walk是挂载在原型上的方法
    walk() {
        console.log(`I am walking`)
    }
}
let dog = new Animal('dog')
let monkey = new Animal('monkey')

// set and get
class Animal {
    constructor(type, age) {
        this.type = type
        this._age = age
    }
    get age() {
        return this._age
    }
    set age(val) {
        this._age = val
    }
}

// 仅get 只读属性
class Animal {
    constructor(type, age) {
        this.type = type
        this._age = age
    }
    get age() {
        return this._age
    }
}
// innerHTML简单封装
class CustomHTMLElement {
    constructor(element) {
        this.element = element
    }
    get html() {
        return this.element.innerHTML
    }
    set html(value) {
        this.element.innerHTML = value
    }
}
// 利用get和set简单封装私有属性访问限制
let age = 1
class Animal {
    constructor(type) {
        this.type = type
    }
    get age() {
        return age
    }
    set age(val) {
        if (val > 0 && val < 10) {
            age = val
        }
    }
}

// 静态方法 
// ES5中挂载在方法（类上） ES6通过static声明
let Animal = function (type) {
    this.type = type
    this.walk = function () {
        console.log(`I am walking`)
    }
}
// 通过类.xx 调用静态方法
Animal.eat = function (food) {
    console.log(`I am eating`)
}
class Animal {
    constructor(type) {
        this.type = type
    }
    walk() {
        console.log(`I am walking`)
    }
    // static标记实例属性 
    static eat() {
        console.log(`I am eating`)
    }
}

// 继承
// ES5中的原型继承和构造继承 以及组合继承
// 定义父类
let Animal = function (type) {
    this.type = type
}
// 定义方法
Animal.prototype.walk = function () {
    console.log(`I am walking`)
}
// 定义静态方法
Animal.eat = function (food) {
    console.log(`I am eating`)
}
// 定义子类
let Dog = function () {
    // 初始化父类 构造继承
    Animal.call(this, 'dog')
    this.run = function () {
        console.log('I can run')
    }
}
// 原型继承
Dog.prototype = Animal.prototype
// ES6的extends关键字实现了原型和构造继承的结合体。