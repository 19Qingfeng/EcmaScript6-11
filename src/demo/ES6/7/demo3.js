// 消除魔幻字符串
function getArea(shape) {
    let area = 0
    switch (shape) {
        case 'Triangle':
            area = 1
            break
        case 'Circle':
            area = 2
            break
    }
    return area
}
console.log(getArea('Triangle'))

// 上面代码的Triangle和Circle就是魔幻字符串
// 我并不关心她是什么样子 我只想得到结果


// 消除魔幻字符串
const shapeType = {
    // 我并不关心内容，我只要不重复
    triangle: Symbol(),
    circle: Symbol()
}

function getArea(shape) {
    let area = 0
    switch (shape) {
        case shapeType.triangle:
            area = 1
            break
        case shapeType.circle:
            area = 2
            break
    }
    return area
}
console.log(getArea(shapeType.triangle))