// 解决属性名称冲突
const grade = {
    张三: {
        address: 'xxx',
        tel: '111'
    },
    李四: {
        address: 'yyy',
        tel: '222'
    },
    李四: {
        address: 'zzz',
        tel: '333'
    },
}
console.log(grade)
// 只会保留最后一个李四


// 使用symbol解决
const stu1 = Symbol('李四')
const stu2 = Symbol('李四')
const grade = {
    // 可计算属性名配合symbol
    [stu1]: {
        address: 'yyy',
        tel: '222'
    },
    [stu2]: {
        address: 'zzz',
        tel: '333'
    },
}
console.log(grade) // 两个都存在
console.log(grade[stu1]) // 获得第一个李四 yyy
console.log(grade[stu2]) // 第二个李四信息 zzz