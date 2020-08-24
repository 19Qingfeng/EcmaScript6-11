# Es6-Es11

EcmaScript6-11常用语法以及场景Demo。<br>

![ECMAScript2015_ES6_.png](https://i.loli.net/2020/08/14/IKn89JpoZX6YGbv.png)

<br>

## EcmaScript6

* 块级作用域，let，const。(Demo1)
    1. let
        1. let 声明的全局变量不是全局对象window的属性
        2. 同一作用域中用let定义变量不允许重复声明
        3. let声明的变量不存在变量提升
        4. let声明的变量具有暂时性死区
        5. let 声明的变量拥有块级作用域
    2. const
        1. const定义的是常亮，不可修改。
        2. const 实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。

* 解构赋值
    1. 赋值元素可以是任意可遍历的对象
    2. 被赋值的变量还可以是对象的属性，不局限于单纯的变量。
    3. 循环体。
    4. 跳过赋值元素。(使用逗号)
    5. rest参数。（剩余数组 or 剩余Object，放在最后一位）。
    6. 默认值。
    7. 重命名。（对于Object的解构）
    8. 字符串也可以解构。（Array形式接受）
* 数组
* 对象
* 正则
* 字符串
* Symbol
* Set
* Map
* 解构赋值
* rest参数和扩展运算符
* 类与继承
* Proxy与Reflect
* Promise
* Generator
* Iterator
