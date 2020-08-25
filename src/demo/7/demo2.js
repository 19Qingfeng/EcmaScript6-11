const sym = Symbol('imooc')
class User {
    constructor(name) {
        this.name = name
        this[sym] = 'imooc.com'
    }
    getName() {
        return this.name + this[sym]
    }
}
const user = new User('xiecheng')
console.log(user.getName())

// 无法获取Symbol
for (let key in user) {
    console.log(key)
}

// 无法获取Symbol
for (let key of Object.keys(user)) {
    console.log(key)
}

// 仅仅可以获取Symbol
for (let key of Object.getOwnPropertySymbols(user)) {
    console.log(key)
}


// 都可以获取
for (let key of Reflect.ownKeys(user)) {
    console.log(key)
}