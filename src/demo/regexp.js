const s = 'aaa_aa_a'
const r1 = /a+/g
const r2 = /a+/y

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null
// 上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。由于g修饰没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配必须从头部开始，所以返回null。

// 如果改一下正则表达式，保证每次都能头部匹配，y修饰符就会返回结果了。

const s = 'aaa_aa_a'
const r = /a+_/y

r.exec(s) // ["aaa_"]
r.exec(s) // ["aa_"]
// 上面代码每次匹配， 都是从剩余字符串的头部开始。

// 使用lastIndex属性， 可以更好地说明y修饰符。

const regexp = /a/g

// 指定从2号位置（y）开始匹配
regexp.lastIndex = 2

// 匹配成功
const match = regexp.exec('xaya')

// 在3号位置匹配成功
console.log(match.index) // 3

// 下一次匹配从4号位开始
console.log(regexp.lastIndex) // 4

// 4号位开始匹配失败
regexp.exec('xaxa') // null
// 上面代码中， lastIndex属性指定每次搜索的开始位置， g修饰符从这个位置开始向后搜索， 直到发现匹配为止。

// y修饰符同样遵守lastIndex属性， 但是要求必须在lastIndex指定的位置发现匹配。

const regexp = /a/y

// 指定从2号位置开始匹配
regexp.lastIndex = 2

// 不是粘连，匹配失败
regexp.exec('xaya') // null

// 指定从3号位置开始匹配
regexp.lastIndex = 3

// 3号位置是粘连，匹配成功
const match = regexp.exec('xaxa')
console.log(match.index) // 3
console.log(regexp.lastIndex) // 4
// 进一步说， y修饰符号隐含了头部匹配的标志 ^ 。

const reg = /b/y
reg.exec('aba')
// null
// console.log(reg.lastIndex)

// u修饰符
// (1) 点字符

// 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于 0xFFFF 的 Unicode 字符，点字符不能识别，必须加上u修饰符。

let s = '𠮷'

    /
    ^
    .$ / .test(s) // false

    /
    ^
    .$ / u.test(s) // true
    // 上面代码表示，如果不添加u修饰符，正则表达式就会认为字符串为两个字符，从而匹配失败。

    // TIP

    // '𠮷'这个字读 jí，是'吉'字的异形体，Unicode 码点 U+20BB7

    // (2) Unicode字符表示法

    // ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别。

    /
    \u {
        61
    }
/.test('a') / / false

    /
    \u {
        61
    }
/u.test('a') / / true

    /
    \u {
        20 BB7
    }
/u.test('𠮷') / / true
    // 上面代码表示，如果不加u修饰符，正则表达式无法识别\u{61}这种表示法，只会认为这匹配61个连续的u。

    // (3) 量词

    // 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符。

    /
    a {
        2
    }
/.test('aa') / / true

    /
    a {
        2
    }
/u.test('aa') / / true

    /
    𠮷{
        2
    }
/.test('𠮷𠮷') / / false

    /
    𠮷{
        2
    }
/u.test('𠮷𠮷') / / true
    // 另外，只有在使用u修饰符的情况下，Unicode表达式当中的大括号才会被正确解读，否则会被解读为量词。

    /
    ^ \u {
        3
    }
$ / .test('uuu') // true
    // 上面代码中，由于正则表达式没有u修饰符，所以大括号被解读为量词。加上u修饰符，就会被解读为Unicode表达式。

    /
    \u {
        20 BB7
    } {
        2
    }
/u.test('𠮷𠮷') / / true
    // 使用 u 修饰符之后 Unicode 表达式+量词也是可以的。

    // (4) 预定义模式

    // u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的Unicode字符。

    /
    ^ \S$ / .test('𠮷') // false

    /
    ^
    \S$ / u.test('𠮷') // true
// 上面代码的\S是预定义模式，匹配所有不是空格的字符。只有加了u修饰符，它才能正确匹配码点大于0xFFFF的Unicode字符。

// 利用这一点，可以写出一个正确返回字符串长度的函数。

function codePointLength(text) {
    const result = text.match(/[\s\S]/gu)
    return result ? result.length : 0
}

const s = '𠮷𠮷'

s.length // 4
codePointLength(s) // 2
    // (5) i修饰符

    // 有些Unicode字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。

    /
    [a - z] / i.test('\u212A') // false

    /
    [a - z] / iu.test('\u212A') // true