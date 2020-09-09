//  set去重

const arr = [1, 1, 1, 1, , 1, 1]
const delArr = new Set(arr) // 去重

// 合并去重

const arr2 = [1, 2, 3, 4]
const arr3 = [4, 5, 6, 1]

const delArr2 = new Set([...arr2, arr3])

// 交集
// 交集两个都有 取一个判断就OK
const arr4 = [8, 9, 10]
const arr5 = [11, 7, 9]

let s1 = new Set(arr4)
let s2 = new Set(arr5)
let result = new Set(arr4.filter(item => s2.has(item)))
console.log(Array.from(result))


// 差集 
// 第一个有第二个没有 第二个有第一个没有
const arr1 = [1, 2, 3, 4]
const arr2 = [4, 5, 6, 7, 1, 1]
let arr3 = new Set(arr1.filter(item => !s2.has(item)))
let arr4 = new Set(arr2.filter(item => !s1.has(item)))
console.log(arr3)
console.log(arr4)
console.log([...arr3, ...arr4])