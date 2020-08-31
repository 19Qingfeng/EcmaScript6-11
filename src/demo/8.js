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

const set4 = new Set(arr4)
const set5 = new Set(arr5)
const mergeSet = arr4.filter(i => {
    return set5.has(i)
})


// 差集 
// 第一个有第二个没有 第二个有第一个没有
const arr7 = [8, 9, 10]
const arr8 = [11, 7, 9]

const set7 = new Set(arr4)
const set8 = new Set(arr5)

const nSet7 = set7.filter(i => !set8.has(i))
const nSet8 = set8.filter(i => !set7.has(i))

const result = [...nSet7, ...nSet8]