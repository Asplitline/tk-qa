---
title: js 笔试题
order: 3
---

# JavaScript 笔试题

## 1.请问在非严格模式下以下 JS 代码最终的输出是什么？

```js
function change(obj) {
  with (obj) {
    color = 'red'
  }
}
var box = {
  size: '15*15'
}
change(box)
console.log(color)
```

<details class="details-block">
    <summary>答案</summary>

答案：red

解析：需要明确 with 会创建一个新的作用域，由于 box 本身没有 color 这个变量，所以这个操作相当于往全局定义了一个值为 red 的全局变量，而不是在 box 对象中定义，因此可以全局访问 color。

</details>

## 2.执行以下程序，下列说法中，正确的是（）

```js
var arr = new Array(3) // 1

arr[0] = 1

arr.b = 0

console.log(arr.length) // 2

arr.forEach((value) => {
  console.log(value) // 3
})

for (var i in arr) {
  console.log(arr[i]) // 4
}
```

A. 1 处创建一个长度为 3 的数组

B. 2 处输出结果为 4

C. 3 处输出结果为 1 0

D. 4 式输出结果为 1

<details class="details-block">
    <summary>答案</summary>
答案：A
解析：

B 选项，数组的长度仍为 3，这是因为 arr.b = 0;实际上是为变量 arr 赋予属性 b，该属性不是数组元素，所以 arr.length 值不变，仍为 3；`[1, empty × 2, b: 0]`

C 选项，forEach 函数只遍历数组元素，由于 arr 数组的数组元素只有 1，因此输出结果为 1；

D 选项，for...in...会遍历数组以及数组的可枚举属性，因此输出结果为 1 0

</details>

## 3.执行下列选项的程序，输出结果不是 Window 对象的是（）

A.

```js
setTimeout(function () {
  console.log(this)
}, 1000)
```

B.

```js
function Star() {
  console.log(this)
}
new Star()
```

C.

```js
var o = {sayHi:()=>{console.log(this);}}o.sayHi();
```

D.

```js
;(function () {
  console.log(this)
})()
```

<details class="details-block">
    <summary>答案</summary>

答案：B

解析：

A：在 setTimeout()定时器中，this 指向 Window 对象；

B：通过 new Star()来调用 Star 函数，使用 new Star 函数内部的 this 指向 new 创建的实例

C：箭头函数不会与 this 进行绑定，其 this 指向取决于该箭头函数同级作用域的 this 指向，又由于对象不能形成自己的作用域，因此其作用域为全局作用域

D：立即执行函数的 this 指向 Window 对象

</details>

## 4.依据以下 JS 代码，在位置 A 打印变量 a 与在位置 B 打印变量 a 各会有怎样的输出？

```js
var a = 1
function test() {
  // 位置A
  class a {}
  // 位置B
}
test()
```

<details class="details-block">
    <summary>答案</summary>

答案：报错、class a {}

解析：class 的声明特征跟 const 和 let 类似，都是作用于块级作用域，预处理阶段则会屏蔽外部变量。因此在声明之前访问变量 a 都会报错，在声明之后访问才可以正常输出。

</details>

## 5.请问以下 JS 代码的输出结果以及变量 i 的值是？

```js
var i = 100
function foo() {
  bbb: try {
    console.log('position1')
    return i++
  } finally {
    break bbb
  }
  console.log('position2')
  return i
}
foo()
```

<details class="details-block">
    <summary>答案</summary>

答案：position1、position2、101

解析：

`break`除了用于中断循环以及 switch 语句，还可以用于标签化语句的中断，这里的标签化语句即在一般语句前面多加了`xxx：`的标签。

在`try`或`try catch`块中使用了 return，那么这个**break 将发生于最后一行语句之后，但是却是在 return 语句之前**。所以这里的 break 是去中断 bbb 里面的语句，执行完所有的操作后才阻止了 return，因此 i 是增加了，然后继续执行剩下的代码，在输出 position2 后才返回 i 变量。

</details>

## 6.在严格模式下执行以下选项的程序，不会抛出异常的是（）

A.

```js
uname = 'window'
setTimeout(function () {
  console.log(this.uname)
}, 1000)
```

B.

```js
var uname = 'window'
;(function () {
  console.log(this.uname)
})()
```

C.

```js
function fn(a, a) {
  console.log(a + a)
}
fn(1, 1)
```

D.

```js
var uname = 'window'
function Person() {
  console.log(this.uname)
}
var p = new Person()
```

<details class="details-block">
    <summary>答案</summary>

答案：D

解析：

A 选项，在严格模式下，虽然定时器函数的 this 仍然指向 window 对象，但是变量 uname 必须先声明再赋值

B 选项，在严格模式下，立即执行函数的 this 取决于上下环境，这里指向 undefined，由于没有 uname 属性，同样会抛出异常；

C 选项，在严格模式下，函数不允许重名参数；

D 选项，构造函数的 this 指向实例对象 p，由于 p 没有 uname 属性，因此输出 undefined。

</details>

## 7.执行以下程序，下列选项中，说法正确的是（）

```js
var obj = { brand: '华为', price: 1999 }
Object.defineProperty(obj, 'id', { value: 1 })
Object.defineProperty(obj, 'price', { configurable: false })
console.log(Object.keys(obj).length) // 1
for (var k in obj) {
  console.log(obj[k]) // 2
}
obj.price = 999
delete obj['price']
console.log(obj) // 3
```

A.1 处输出结果为 3

B.2 处输出结果为华为 1999 1

C.3 处输出结果为`{brand: '华为', price: 999, id: 1}`

D.3 处输出结果为`{brand: '华为', id: 1}`

<details class="details-block"><summary>答案</summary>

答案：C

解析：

A：Object.keys(obj)返回 obj 对象中自身可枚举属性组成的数组，id 属性不可枚举；

B：使用 for...in...循环可以遍历对象可枚举的属性，id 属性由于不可枚举

C：price 属性设置了 configurable:false，表示该属性不可删除，删改无效，也不可再次修改其特性，但是属性值是可以重写的

</details>

## 8.执行以下程序，会抛出语法错误的式子是（）

```js
var s = Symbol('key') // 1
console.log(s + '123') // 2
var obj = {
  [s]: function () {
    console.log(1)
  } // 3
}
var b = Reflect.ownKeys(obj) // 4
```

<details class="details-block"><summary>答案</summary>

答案：2

解析：

symbol 对象不能用于数据运算，包括`+、-、\*、/`等

</details>

## 9.请问以下 JS 代码的输出是什么？

```js
let A = function () {}
A.prototype.a = 1
let B = new A()
A.prototype = {
  b: 2,
  c: 3
}
let C = new A()
A.prototype.d = 4
console.log(B.a)
console.log(B.b)
console.log(C.c)
console.log(C.d)
```

<details class="details-block"><summary>答案</summary>

答案：1、undefined、3、4

解析：首先需要明确 new 方法**返回的是构造函数的 prototype 也就是一个对象**，其中直接给对象上不存在的 a 变量赋值相当于往这个对象添加了一个 a 变量，因此 B 可以访问到变量 a，但是后续是直接赋值了一个对象，产生了新旧两个 prototype 的引用，所以 B 访问不到新对象的变量 b。C 的话拿到的是新对象以及往新对象里面新增的 d 变量。

</details>

## 10.执行以下选项中的程序，输出结果是 undefined 的是（）

A.

```js
var o = {
  age: 18,
  a: {
    fn: function () {
      console.log(this.age)
    }
  }
}
o.a.fn()
```

B.

```js
class Animal {
  constructor(color) {
    this.color = color
  }

  getColor() {
    console.log('animal的颜色是' + this.color)
  }
}
class Dog extends Animal {
  constructor(color) {
    this.color = color
  }
}

var dog = new Dog('黄色')

dog.getColor()
```

C.

```js
function fn() {
  setTimeout(function () {
    console.log(this)
  }, 100)
}

fn()
```

D.

```js
var person = {
  sex: '女',

  fn: function () {
    console.log(this.sex)
  }
}

person.fn()
```

<details class="details-block"><summary>答案</summary>

答案：A

解析：

A 选项，fn()方法内的 this 指代对象 a，由于对象 a 并没有 age 属性，因此输出结果为 undefined

B 选项，子类对象调用父类 getColor()方法，方法内的 this 指向子类对象，**但当子类有自己的构造方法时，必须在其构造方法使用 super 调用父类的构造方法**，否则不能生成 this 对象，**会抛出异常**

C 选项，定时器中的 this 指向 window 对象

D 选项，this 指向 person 对象，由于 person 对象有属性 sex，因此可以输出对应的属性值

</details>

## 11.请问以下 JS 代码会输出什么、

```js
var a = 10
;(function a() {
  a = 20
  console.log(a)
})()
console.log(a)
```

<details class="details-block"><summary>答案</summary>

答案：a 输出函数 a 的内容、10

解析：一开始变量 a 被提升，值为 undefined，由于函数提升优先级更高所以 a 先被赋值为函数。
又因为是立即执行函数所以执行了函数 a 输出 a 目前的值（即函数），之后才是被赋值为 10.

补充：上面是一个立即执行的函数表达式（IIFE），而且是一个具名的函数表达式（NFE）。在 ECMAScript 标准中要求 NFE 实现两个特性

1.只能在函数体内访问函数名变量。

2.函数名变量可以理解为常量，不可改变。所以 a = 20 被忽略了，在严格模式下会报错

</details>

## 12.执行以下程序，输出结果为（）

```js
var a = 2
function fn() {
  b()
  return
  var a = 1
  function b() {
    console.log(a)
  }
}
fn()
```

<details class="details-block"><summary>答案</summary>

答案：undefined

解析：

return 语句可以终止函数，但是 return 语句后如果有变量和函数声明，仍然存在变量提升和函数提升。

在函数 fn 内，函数 b 和局部变量 a 会提升到函数的开头部分。当调用函数 b 时，需要查找并输出 a 的值，根据作用域链查找规则，会先在函数 fn 内找到已经声明的局部变量 a，由于**局部变量 a 的赋值并未跟着发生提升**，因此输出的 a 值为 undefined

</details>

## 13.以下 JS 代码在 Node 环境下的输出顺序是？

```js
Promise.resolve()
  .then(() => {
    console.log('p1')
  })
  .then(() => {
    console.log('p2')
  })
process.nextTick(() => {
  console.log('n1')
  process.nextTick(() => {
    console.log('n2')
  })
})
```

<details class="details-block"><summary>答案</summary>

答案：n1、n2、p1、p2

解析：Node 在执行微任务时， 会优先执行 nextTick task queue 中的任务

</details>

## 14.执行完如下程序后，所有能被访问到的变量包括（）

```js
var a = 1
b = 2
eval('var c = 3')
delete a
delete b
delete c
```

<details class="details-block"><summary>答案</summary>

答案：a

解析：

决定属性是否可以删除的关键在于属性描述属性值 configurable 是否是 true，var 定义的变量的 configuarable 的值是 false，另外两个是 true

</details>

## 15.下列正则表达式中，能匹配到的字符串个数最多的是（）

A. `^abc$`

B. `^[abc]$`

C. `^[abc][1,2]$`

D. `^[abc]{2}$`

<details class="details-block"><summary>答案</summary>

答案：D

`^abc$` 匹配开头是 a，结尾是 c，开头和结尾中间有一个 b，所以只能匹配 abc 一个

`^[abc]$` 匹配中括号[]里面的一个字母，而且以这个字母开始，以这个字母结尾，所以只能匹配上 a，b 或者 c，共三个

`^[abc][1,2]$`匹配以 abc 的一个字母开始，以 1 或 2 结尾的，组合一下可知有 a1,a2,b1,b2,c1,c2;共六个

`^[abc]{2}$`匹配 abc 随便组成的两个字母，有 aa，ab,ac,ba,bb,bc,ca,cb,cc;共九个

</details>



## 16.请问以下 JS 代码输出的结果是什么？

```js
function f(x) {
  console.log(x)
  var x = 200
  console.log(x)
}
f((a = 100))
console.log(a)
```

<details class="details-block">
    <summary>答案</summary>


答案：100、200、100

解析：

JS 中的函数是非惰性求值，将 a=100 完成计算赋值后的结果 100，传入到了 f 函数中，传入的是值而不是逻辑，相当于 f（100），同时变量 a 也处于函数外也即全局环境了，因此 f 函数里面的 x 一开始是传进来的 100，后续被重新赋值为 200.

</details>



## 17.执行以下程序，下列选项中，说法错误的是（）

```js
class Phone{
  constructor(brand){
    this.brand = brand;
}
  call(){} // 1
}
function playGame(){console.log("我可以打游戏")};
function photo(){console.log("我可以拍照")};
console.log(typeof Phone); // 2
var p = new Phone('华为');
console.log(p.brand); // 3
```

A、1处的call方法是定义在类Phone的prototype对象上

B、2处输出结果为Object

C、3处输出结果为华为

D、若想一次性给类添加playGame和photo两个实例方法，可以使用`Object.assign(Phone.prototype,{playGame,photo})`

<details class="details-block"><summary>答案</summary>    
答案：B

解析：

A：类的所有实例方法均定义在类的原型对象上；

B：类的本质是函数，实际上，ES6中的类可以视为ES5中构造函数的另一种写法，所以②式的输出结果为function而不是Object；

C：p为类的实例对象，该对象有一个属性brand，属性值为华为

D：`Object.assign(target, source)`可将source源对象所有可枚举的属性（或方法）分配给target对象  



补充：

`typeof function(){}与class{}`返回的都是`function`

</details>



## 18.请问以下JS代码输出结果是什么？

```js
console.log(typeof ''.prototype);
console.log(typeof ''.__proto__); 
console.log(typeof ''.__proto__ === typeof ''.prototype); 
```

<details class="details-block"><summary>答案</summary>


答案：undefined、object、false

解析：

  1）**函数（或构造函数）身上才有 prototype** （prototype名字叫原型，原型是一个对象）； 

  2）而其他任何通过构造函数实例化出来的对象(不包括null、undefined）身上都有 `__proto__`（`__proto__`是隐式原型，隐式原型也一个对象）

  3）实例化对象的`__proto__` 就是 构造函数的 prototype  （===关系）

  附：undefind 和 null 既没有prototype也没有 `__proto__` ，因为它俩不是函数，也不是函数实例化出来的对象 

</details>



## 19.执行以下程序，输出结果为（）

```js
class Phone{
  constructor(price){
    this.price = price;
  }
  get price(){
    return 999;
  }
}
var p = new Phone(888);
console.log(p.price);
```



<details class="details-block"><summary>答案</summary>


答案：抛出异常

解析：

当类中一个属性只有get()方法而无set()方法时，该属性是无法进行赋值的，连构造方法中的初始化都不行。

补充：

加上 `set price(v){}`,会输出 999

</details>

