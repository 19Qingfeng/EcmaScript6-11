# Es6-Es11

EcmaScript6-11常用语法以及场景Demo。<br>

![ECMAScript2015_ES6_.png](https://i.loli.net/2020/08/14/IKn89JpoZX6YGbv.png)

<br>

## EcmaScript6

<font size=2 >

* 块级作用域，let，const。(1.js)

    1. let
        1. let 声明的全局变量不是全局对象window的属性

        2. 同一作用域中用let定义变量不允许重复声明

        3. let声明的变量不存在变量提升

        4. let声明的变量具有暂时性死区

        5. let 声明的变量拥有块级作用域

        

    2. const
        1. const定义的是常亮，不可修改。

        2. const 实际上保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。</font>

* 解构赋值(2.js)

    1. 赋值元素可以是任意可遍历的对象

    2. 被赋值的变量还可以是对象的属性，不局限于单纯的变量。

    3. 循环体。

    4. 跳过赋值元素。(使用逗号)

    5. rest参数。（剩余数组 or 剩余Object，放在最后一位）。

    6. 默认值。

    7. 重命名。（对于Object的解构）

    8. 字符串也可以解构。（Array形式接受）

* 数组(3.js)

    1. Es5中的一些数组方法。
        1. for循环。

        2. forEach:无返回值，break和container会报错。

        3. map:返回一个New Array，根据function对于每一项格式化。

        4. filter:返回符合条件的数组。

        5. some:数组中有一个为true返回true。

        6. every:数组中所有满足条件，返回true。

        7. reduce:累加执行，具体参数可以参照MDN。

        8. for in （不建议使用）。

    2. ES6对于数组方法的扩展。
        1. for of:迭代Array，因为Array内置了[Symbol.iterator]()所以可迭代。(字符串也支持，自定义对象实现迭代方法也可以forof)。

        2. Array.from(A,B,C):将类数组对象转成数组。(伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性。参考Demo可以有一些更高级的用法)
            1. A：伪数组对象。

            2. B:function,对要转化的每一项进行格式化的处理函数，return为处理后的每一项。

            3. C：B中的this指向。

        3. Array.of:解决ES5 new Array不统一的问题。

        4. Array.prototype.fill:填充传入的数组，包括开始索引，不包括结束。

        5. Array.prototype.find:找到符合条件的元素。

        6. Array.prototype.findIndex:找到符合条件的数组元素索引。

        7. Array.prototype.copyWithin(A,B,C):在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
            1. A:原有数组开启替换的位置。（Y）

            2. B:原有数组需要进行替换取值的开始点。（N）不填从第0个开始，负数从倒数开始。

            3. C:原有数组需要进行替换取值的结束点。（N）不填一直到结束，负数同理。

        8. Array.prototype.values()/keys()/entries():返回的都是Iterator，可以用for of进行处理。

* Function

    1. 默认参数,默认参数也可以结合解构赋值在进行默认值处理。(undefined or null 走默认参数)

    2. function.length:返回第一个默认参数前的形参个数。

    3. Rest参数:如果...在等号左边或者放在形参上，那么就是rest参数。如果...在等号右边或者放在实参上，那么就是扩展运算符。

    4. 扩展运算符。

    5. name属性:返回函数名称。匿名函数返回anonymous,bind绑定函数返回name多了一个关键字 bound xxx。

    6. 箭头函数。
        1. 箭头函数中this指向定义时所在的对象，而不是调用时所在的对象。

        2. 箭头函数不可以当作构造函数。

        3. 箭头函数不可以使用arguments对象。

    

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

</font>
