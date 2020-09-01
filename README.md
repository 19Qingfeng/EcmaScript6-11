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

---

* 解构赋值(2.js)

    1. 赋值元素可以是任意可遍历的对象

    2. 被赋值的变量还可以是对象的属性，不局限于单纯的变量。

    3. 循环体。

    4. 跳过赋值元素。(使用逗号)

    5. rest参数。（剩余数组 or 剩余Object，放在最后一位）。

    6. 默认值。

    7. 重命名。（对于Object的解构）

    8. 字符串也可以解构。（Array形式接受）

---

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

        > for of中也存在break和continue以及return，return和break都是直接终止循环。

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

---

* Function(4.js)

    1. 默认参数,默认参数也可以结合解构赋值在进行默认值处理。(undefined or null 走默认参数)

    2. function.length:返回第一个默认参数前的形参个数。

    3. Rest参数:如果...在等号左边或者放在形参上，那么就是rest参数。如果...在等号右边或者放在实参上，那么就是扩展运算符。

    4. 扩展运算符。

    5. name属性:返回函数名称。匿名函数返回anonymous,bind绑定函数返回name多了一个关键字 bound xxx。

    6. 箭头函数。
        1. 箭头函数中this指向定义时所在的对象，而不是调用时所在的对象。

        2. 箭头函数不可以当作构造函数。

        3. 箭头函数不可以使用arguments对象。

    

---

* Object(5.js)

    1. 属性简洁表示法。

    

    2. 属性名表达式。

    3. Object.is():替代===，解决NaN问题。

    4. Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。(浅拷贝)

    5. 对象的遍历方式。结合ES5一切复习了吧：
        1. for...in。(不包括不可枚举属性,会遍历出原型属性)

        2. Object.keys()用于返回对象所有key组成的数组。(不可获得不可枚举属性,仅自身属性)

        3. Object.getOwnPropertyNames()用于返回对象所有key组成的数组。(仅自身属性，包括不可枚举属性)

        4. Reflect.ownKeys()用于返回对象所有key组成的数组。(包括不可枚举属性，包括方法属性)

---

* Class(6.js)
    1. set and get关键字。
        1. 只读属性。

        2. 私有属性访问限制。

    2. 静态方法:static关键字。

        > Tip:class关键字目前仅支持static声明静态方法，静态属性仍需要类.xx实现。
        

    3. 继承:extends关键字。

        > 其实extends关键字相当于ES5原型继承和构造继承的结合体。内部实现原理：

        1. 子类constructor中call调用父类-构造继承。

        2. 子类.prototype = new 父类-原型继承。

        3. 继承父类实例方法-可以通过子类.xx调用父类构造方法。

        4. super():ES6的继承extends必须要在父类的constructor中显示的调用super(params),params是传递给父类构造函数的参数。

    

> 对于面向对象编程而言，更关注类的声明、属性、方法、静态方法、继承、多态、私有属性。

* Symbol

    1. 声明方式：基本数据类型:let a = Symbol(description);

    > Symbol()声明一个独一无二的Symbol.

    2. Symbol.for()

    > Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。

    > Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会。Symbol.for()不会每次调用就返回一个新的 Symbol 类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值。

    > Symbol.for()会生成一个全局的Symbol，会和之前for生成的Symbol进行覆盖，所以他们是相等的，参见Demo。

    4. Symbol.keyFor(symbol):返回一个全局已登记的描述。

    > keyFor只能获得for声明全局Symbol的描述。无法获得Symbol的描述。

    3. Symbol.prototype.description：实例属性，获得Symbol生成时候的描述。(这个其实是ES10加入的)

    > description()可以获得Symbol()声明以及Symbol.for()声明的描述，两个都可以。

    - 日常项目中对于Symbol的实际运用。(见Demo)

        

        1. 独立属性名:解决对象名称冲突-可计算属性名配合Symbol。

        2. 属性遍历:Symbol定义key值的属性名无法通过Object.keys,for in遍历到。通过Object.getOwnPropertySymbol()仅仅可以获取对象上通过Symbol定义的属性。Reflect.ownKeys()可以获取全部。(常规遍历无法获取)

        3. 消除项目中魔幻字符串:魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。(并不关心内容，所以使用Symbol()保证独一无二代替字符串)

  

    

   

> ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

> Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

---

* Set

> 在 JavaScript 里通常使用 Array 或 Object 来存储数据。但是在频繁操作数据的过程中查找或者统计并需要手动来实现，并不能简单的直接使用。 比如如何保证 Array 是去重的，如何统计 Object 的数据总数等，必须自己去手动实现类似的需求，不是很方便。 在 ES6 中为了解决上述痛点，新增了数据结构 Set 和 Map，它们分别对应传统数据结构的“集合”和“字典”。首先，我们先来学习下 Set 数据结构。

> 频繁的数据操作set比Array性能会好很多。

###### 生成set

``` 
let s = new Set()
let s = new Set([1, 2, 3, 4])
```

> 初始化的参数必须是可遍历的，可以是数组或者自定义遍历的数据结构(Symbol.iterator)。

###### 添加数据

``` 
s.add('hello')
s.add('goodbye')
s.add('hello').add('goodbye')
```

> Set 数据结构不允许数据重复，所以添加重复的数据是无效的

###### 删除数据

``` 
// 删除指定数据
s.delete('hello') // true
// 删除全部数据
s.clear()
```

###### 统计数据

> Set 可以快速进行统计数据，如数据是否存在、数据的总数

``` 
// 判断是否包含数据项，返回 true 或 false
s.has('hello') // true
// 计算数据项总数
s.size // 2
```

###### 应用场景

* 数组去重

* 合并去重

* 交集

* 差集

* Set遍历方式

    1. keys()：返回键名的遍历器
    2. values()：返回键值的遍历器
    3. entries()：返回键值对的遍历器
    4. forEach()：使用回调函数遍历每个成员
    5. for...of：可以直接遍历每个成员

#### WeakSet

weakSet

``` 
weakSet只能够存储对象，不能遍历。
let ws = new WeakSet()
ws.add({

    imooc:"wanghaoyu"

})
console, log(ws) // { imooc:"wanghaoyu" }
// 同样具有add，delete，has, 没有size和clear方法
```

> weakSet是弱引用对象，也就是垃圾回收机制并不会考虑weakSet。 

> 当一个对象除了WeakSet被引用到时候就会被垃圾回收。

---

* Map

> ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。

##### 基本语法

``` 
let map = new Map([iterable])
```

> Iterable 可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ], [ 2, 'two' ]])。 每个键值对都会添加到新的 Map。null 会被当做 undefined

``` 
let keyObj = {}
let keyFunc = function() {}
let keyString = 'a string'
// 添加键
map.set(keyString, "和键'a string'关联的值")
map.set(keyObj, '和键keyObj关联的值')
map.set(keyFunc, '和键keyFunc关联的值')
// 删除指定的数据
map.delete(keyObj)
// 删除所有数据
map.clear()
// 统计所有 key-value 的总数
console.log(map.size) //2
// 判断是否有 key-value
console.log(map.has(keyObj)) // true
// 查询数据
console.log(map.get(keyObj)) // 和键keyObj关联的值
```

* 遍历方式
    1. keys() 返回一个新的 Iterator 对象。 它包含按照顺序插入 Map 对象中每个元素的 key 值

    2. values() 方法返回一个新的 Iterator 对象。 它包含按顺序插入Map对象中每个元素的 value 值

    3. entries() 方法返回一个新的包含[key, value] 对的 Iterator ? 对象， 返回的迭代器的迭代顺序与 Map 对象的插入顺序相同

    4. forEach() 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数

    

    5. for... of 可以直接遍历每个成员

* 其实 Object 也是按键值对存储和读取的，那么他俩之间除了我们之前说的区别以外还有其他的吗?

    1. 键的类型

    > 一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。

    2. 键的顺序

    

    > Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。

    3. 键值对的统计

    > Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。

    4. 性能

    > Map 在涉及频繁增删键值对的场景下会有些性能优势

#### WeakMap

    - WeakMap结构与Map结构类似，也是用于生成键值对的集合。

``` 
    // WeakMap 可以使用 set 方法添加成员
    const wm1 = new WeakMap()
    const key = {
        foo: 1
    }
    wm1.set(key, 2)
    wm1.get(key) // 2

    // WeakMap 也可以接受一个数组，
    // 作为构造函数的参数
    const k1 = [1, 2, 3]
    const k2 = [4, 5, 6]
    const wm2 = new WeakMap([
        [k1, 'foo'],
        [k2, 'bar']
    ])
    wm2.get(k2) // "bar"
```

    - WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

``` 
const map = new WeakMap()
map.set(1, 2)
// TypeError: 1 is not an object!
map.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map.set(null, 2)
// TypeError: Invalid value used as weak map key
```

    - WeakMap的键名所指向的对象，不计入垃圾回收机制，弱引用。

---

* String
    - Unicode表示法: 只要将码点放入大括号，就能正确解读该字符。

    - 遍历器接口:ES6 为字符串添加了遍历器接口，详见Iterator一节，使得字符串可以被for...of循环遍历。

    - 模板字符串

    - String.prototype.fromCodePoint()

    > 用于从 Unicode 码点返回对应字符，并且可以识别大于0xFFFF的字符。

    - String.prototype.includes()

    > ES6提供了includes方法来判断一个字符串是否包含在另一个字符串中，返回boolean类型的值。

    - String.prototype.startsWith()

    > 判断参数字符串是否在原字符串的头部, 返回boolean类型的值。

    - String.prototype.endsWith()

    > 判断参数字符串是否在原字符串的尾部, 返回boolean类型的值。

    - String.prototype.repeat()

    > repeat方法返回一个新字符串，表示将原字符串重复n次。

---

* RegExp

    - y修饰符。

    > ES6为正则表达式添加了y修饰符，叫做“粘连”（sticky）修饰符。
    >> y修饰符的作用与g修饰符类似，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
    >>> 其实y修饰符就是要求下一次匹配的lastIndex位置必须是对应匹配到的元素(粘连)。而g修饰符是lastIndex后拥有匹配到即可。
    >>>> 进一步说， y修饰符号隐含了头部匹配的标志 ^ 。

    - sticky 模式在正则匹配过程中只会影响两件事：

    1. 匹配必须从 re.lastIndex 开始（相当于正则表达中的 ^）

    2. 如果匹配到会修改 re.lastIndex（相当于 g 模式）

    - u修饰符。

        

        1. ES6新增了使用大括号表示Unicode字符，这种表示法在正则表达式中必须加上u修饰符，才能识别

        2. 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于 0xFFFF 的 Unicode 字符，点字符不能识别，必须加上u修饰符。

        3. 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的Unicode字符。

        4. 预定义模式。

        5. i修饰符。

    > ES6为正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理大于 \uFFFF 的Unicode字符。也就是说，会正确处理四个字节的UTF-16编码。

---

* Number

    - 二进制与八进制

    >ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。

    - Number新增方法
        + Number.isFinite()

        > 用来检查一个数值是否为有限的（finite），即不是Infinity。

        + Number.isNaN()

        > 用来检查一个值是否为NaN。

        + Number.parseInt()/Number.parseFloat()

        > 将window对象的parseInt(),parseFloat()移植到了Number对象上。

        + Number.isInteger()

        

        > 判断是否是整数。

        + Number.MAX_SAFE_INTEGER/Number.MIN_SAFE_INTEGER

        > 最大安全整数和最小安全整数。

        + Number.isSafeInteger()

        

        > 判断是否是安全范围内的Number。

    

    - Math扩展
        + Math.trunc()

        > 去除一个数的小数部分，返回整数部分。
        >> 它与parseInt的区别是:
        >> Number.parseInt()并不会对传入的数值进行隐式类型转换。
        >> 而Math.trunc()会对传入的Number进行隐式类型转换。

        + Math.sign()

        > 方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

        > 它会返回五种值。

        >> 参数为正数，返回+1
        >> 参数为负数，返回-1
        >> 参数为 0，返回0
        >> 参数为-0，返回-0
        >> 其他值，返回NaN

        + Math.cbrt()

        > 计算一个数的立方根。

    

* Proxy与Reflect

> 调用new Proxy()可以创建代替其他目标(target)对象的代理，它虚拟化了目标，所以两者看起来功能一致。 

> 代理可以拦截JavaScript引擎内部目标的底层对象操作，这些底层操作被拦截后会触发相应特定操作的陷阱函数。（钩子函数Hook） 

> 反射API以Reflect对象的形式出现，对象中方法的默认特性与相同的底层操作一致，而代理可以覆写这些操作，每个代理陷阱对应一个命名和参数都相同的Reflect方法。 

![代理和反射.jpeg](https://i.loli.net/2020/09/01/ImL5r6jD1oiKVY3.jpg)

**关于Proxy和Object.defineProperty()对于数组的劫持**

<br>

**以及对于Vue为什么不可以实现数组的数据响应式劫持解释**

> 无论是Object.defineProperty()还是new Proxy()对于数组的代理，数字的原本方法比如push(), pop(), shift()等这些方法是可以不被拦截的，所以这也就Vue底层对于数组的监听在原型上重写了这些方法(变异方法，做到数据响应式)。（虽然Vue不支持对于数组下标形式的修改，但是这两种方式显然是支持数组下标的拦截的。） 

<br>

> 为什么不用数组的拦截并不是不支持而是->参见github上尤大的回答。

<br>

![数组劫持.png](https://i.loli.net/2020/09/01/Zc5IisVyNvtzXeT.png)

    - 常见拦截器:(详细见Demo)

    

    - get(target, key, receiver) 拦截 -> 默认Reflect.get(target, key, receiver)

    - set(target, key, value, receiver)拦截 -> 默认 Reflect.set(target, key, value, receiver)

    

    - has(target,key) 拦截 -> 默认 Reflect.has(target,key) （对于in拦截）

    - ownKeys(target) 拦截 -> Refelect.ownKeys(target)

    > ownKeys陷阱唯一接收的参数事操作的目标，返回值必须是一个数组或者类数组对象，否则就会抛出错误。当调用for of,Object.keys(),Object.getOwnPropertyNames(),Object.getOwnPropertySymbols()或者Object.assign()以及for in方法的时候，可以用ownKeys陷阱过滤不想使用的属性键。

    - deleteProperty(target, key)陷阱拦截删除 -> Reflect.deleteProperty(target, key)

    > ES5中删除属性delete属性操作符，成功返回true，不成功返回false，严格模式下会报错。配置Object.defineProperty(obj,'xx',{ configurable:false })设置属性不可以配置也就不可以删除了。

    > ES6中可以使用代理Proxy代理deleteProperty()来改变这个行为。（不可删除，被拦截的需要返回false）

**深入浅出ES6对于函数的解释**

> 函数有两个内部方法[call]和[construct], apply陷阱和constructor陷阱可以复写这些内部方法，若使用new操作符调用函数，则执行construct方法。则会执行construct陷阱。 若不用则调用call方法。执行会执行apply陷阱(以及apply，call调用函数都会进入apply陷阱)。

> 小Tips：注意apply和construct陷阱的写法是x:()=> {} 函数写法，其他属性陷阱是a() {} 写法。

    - 函数的拦截

    - apply(target,thisArg,argumentsList)陷阱对于函数的拦截。 -> Reflect.apply(target,this.Arg,argumentsList)

    > 非new调用的函数陷阱拦截。thisAra:函数被调用时this的指向,argumentsList:传递给函数的参数数组。

    - constructor(target,argumentList,newTarget)陷阱 -> Reflect.constructor(target,argumentList,newTarget)

    > new 调用constructor时触发constructor陷阱。target被代理的class类,argumentList:参数列表，array。newTarget:new 调用时命令指向的构造函数(new实例时候的构造函数)。

* Promise
* Generator
* Iterator

</font>
