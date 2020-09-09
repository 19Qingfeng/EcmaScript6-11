const a = 0B0101
console.log(a)

const b = 0O777
console.log(b)


// Math.trunc()
// 方法用于去除一个数的小数部分，返回整数部分。

console.log(Math.trunc(5.5))
console.log(Math.trunc(-5.5))
console.log(Math.trunc(true)) // 1
console.log(Math.trunc(false)) // 0
console.log(Math.trunc(NaN)) // NaN
console.log(Math.trunc(undefined)) // NaN
console.log(Math.trunc()) // NaN

// Math.sign()
console.log(Math.sign(5)) // 1
console.log(Math.sign(-5)) // -1
console.log(Math.sign(0)) // 0
console.log(Math.sign(NaN)) // NaN
console.log(Math.sign(true)) // 1
console.log(Math.sign(false)) // 0

// Math.crbt()
console.log(Math.cbrt(8)) // 2

console.log(Math.cbrt('imooc')) // NaN