for (let val of [1, 2, 3]) {
    console.log(val);
}
// 1,2,3

// values() kes() entries()返回的都是iterator对象
for (let item of arr) {
    console.log(item)
}

for (let item of arr.values()) {
    console.log(item)
}

for (let item of arr.keys()) {
    console.log(item)
}

for (let [index, item] of arr.entries()) {
    console.log(index, item)
}


// Array.from()
// [1,1,1,1,1] ES 5用法
let arr = Array(6).join(' ').split('').map(item => 1)
// ES 6 
Array.from({
    length: 5
}, function () {
    return 1
})


//  Array.of()
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]
// Array.of 就是为了解决 ES5中Array的问题
Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]

// Array.prototype.fill()
let array = [1, 2, 3, 4]
array.fill(0, 1, 2) // 用0填充 开始位置1 不包括结束2
// 数组第一个索引位置使用0进行填充
// [1,0,3,4]
// 更加优雅的处理初始化数组
Array(5).fill(1)
// [1,1,1,1,1]


// Array.prototype.find()
let array = [5, 12, 8, 130, 44];

let found = array.find(function (element) {
    return element > 10;
});

console.log(found); // 12

// Array.prototype.findIndex()
let array = [5, 12, 8, 130, 44];

let found = array.findIndex(function (element) {
    return element > 10;
});

console.log(found); // 1

// Array.prototype.copyWithin()
let arr = [1, 2, 3, 4, 5]
// 原本arr索引为1的位置开始填充，从第三个位置开始截取
console.log(arr.copyWithin(1, 3)) // [1, 4, 5, 4, 5]