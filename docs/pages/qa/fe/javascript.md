---
title: javascript
order: 4
---

# JavaScript

## 基础篇

### new 一个箭头函数的会怎么样

箭头函数是 ES6 中的提出来的，它没有 prototype，也没有自己的 this 指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。

**new 操作符**的实现步骤如下：

1. 创建一个对象
2. 将构造函数的作用域赋给新对象（也就是将对象的**proto**属性指向构造函数的 prototype 属性）
3. 指向构造函数中的代码，构造函数中的 this 指向该对象（也就是为这个对象添加属性和方法）
4. 返回新的对象 

所以，上面的第二、三步，箭头函数都是没有办法执行的。

### 箭头函数与普通函数的区别

（1）箭头函数比普通函数更加简洁

（2）箭头函数没有自己的 this。它只会在自己作用域的上一层继承 this。所

（3）箭头函数继承来的 this 指向永远不会改变

（4）call()、apply()、bind()等方法不能改变箭头函数中 this 的指向

（5）箭头函数不能作为构造函数使用

（6）箭头函数没有自己的 arguments

（7）箭头函数没有 prototype

（8）箭头函数不能用作 Generator 函数，不能使用 yeild 关键字

### 扩展运算符的作用及使用场景

对象的扩展运算符：用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中。

数组的扩展运算符：可以将一个数组转为用逗号分隔的参数序列，且每次只能展开一层数组。

### 什么是尾调用，使用尾调用有什么好处？

尾调用是指一个函数在最后一步调用另一个函数。

在尾调用优化的情况下，调用函数的栈帧被弹出，让新的函数调用成为当前帧的最后一条语句，从而避免了额外的函数调用开销。

尾调用的好处主要有以下几点：

1. **节省内存**：由于尾调用优化会减少不必要的函数调用，所以可以减少内存的使用。在递归调用时，如果使用尾调用，可以有效地避免栈溢出的问题，因为只需要保留一帧栈帧即可。
2. **提高性能**：由于尾调用不需要额外的函数调用开销，所以可以提高函数的性能，特别是在调用次数较多的情况下。
3. **简化代码**：使用尾调用可以使代码更加简洁、易读、易维护，特别是在函数式编程中，可以使用尾调用实现函数的组合和柯里化等高级函数的特性。

### 闭包

**闭包是指有权访问另一个函数作用域中变量的函数**。

创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。

两个常用用途：

1。 在函数外部能够访问到函数内部的变量。

2. 使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。

在 JS 中，闭包存在的意义就是让我们可以间接访问函数内部的变量。经典面试题：循环中使用闭包解决 var 定义函数的问题

判断数据类型的方式

1. **typeof 操作符**：可以返回数据类型的字符串形式，包括 undefined、boolean、number、string、object、symbol 和 function。但 typeof null 会返回 object，无法准确区分 null 和 object 类型。
2. **instanceof 操作符**：可以判断一个实例是否属于某个构造函数创建的对象，判断结果是布尔值。但是，instanceof 无法判断字面量方式创建的原始类型值，比如字符串、数字等。
3. **Object.prototype.toString**方法：可以返回对象的类型字符串，比 typeof 更加精确。可以通过 Function.prototype.call 方法调用，传入需要判断类型的对象作为参数。
4. **Array.isArray**方法：用于判断一个变量是否为数组类型，返回布尔值。
5. **constructor**属性：所有的 JavaScript 对象都有一个 constructor 属性，该属性指向创建该对象的构造函数。但是该属性可以被更改，因此可能不准确。

### 宏任务、微任务

**宏任务**:可以看作是由 JavaScript 引擎（浏览器或 Node.js）创建的任务。**每次执行栈中的代码执行完毕，就会执行一次宏任务队列中的任务。**

如：script 脚本、setTimeout、setInterval、I/O 等。

**微任务**：是相对于宏任务而言的，可以看作是在当前宏任务执行完毕后立即执行的任务。**当一个宏任务中的代码执行完毕后，会立即执行微任务队列中的任务，直到微任务队列为空，然后再执行下一个宏任务。**

如：Promise 的 then 方法、MutationObserver、Object.observe 等。

### 讲下原型链

原型链是 JavaScript 中的一种机制，用于实现对象的继承和属性的查找。

- 每个对象都有一个原型对象，即 `__proto__` 属性，它指向该对象的构造函数的原型对象。
- 原型对象也可以有自己的原型对象，形成一个链式结构。在查找对象的属性和方法时，如果在当前对象上找不到，则会沿着原型链向上查找，直到找到为止。
- 最终，所有对象的原型对象都会指向 `Object.prototype`。

### 暂死性死区

暂时性死区是指在代码块内部，使用 `let` 或 `const` 声明变量之前，该变量是不能被访问的，否则会抛出一个 `ReferenceError` 错误。

由于 JavaScript 的变量提升机制变为了块级作用域，在变量声明前访问该变量时，该变量还没有被声明

特性可以避免在变量未声明的情况下使用变量，从而减少代码错误。

### 事件循环（event loop）

事件循环（event loop）是 JavaScript 实现异步编程的核心机制之一。它是一个事件处理的循环系统，负责接收事件并将它们派发给相应的处理器。在浏览器中，事件可以是用户输入、计时器到期、网络请求的响应等等。在 Node.js 中，事件可以是文件 I/O、网络 I/O、定时器等等。

JavaScript 的事件循环包含一个主线程和一个任务队列（task queue）。主线程会不停地从任务队列中取出任务并执行，这些任务可以是同步任务和异步任务。同步任务会立即执行，而异步任务会被放到任务队列中，等待下一次事件循环再次执行。

在事件循环中，异步任务分为宏任务（macro task）和微任务（micro task）。宏任务包括 setTimeout、setInterval、I/O 操作等，而微任务包括 Promise、process.nextTick、MutationObserver 等。在事件循环中，主线程执行完当前宏任务后，会立即处理所有微任务，然后再从任务队列中取出下一个宏任务执行。

JavaScript 采用单线程的事件循环机制，保证了同一时刻只能有一个任务在主线程中执行，避免了多线程带来的各种问题。同时，异步任务的使用也可以避免阻塞主线程，提高了 JavaScript 的执行效率。

### 原型、构造函数、对象

1. **构造函数**：构造函数是用于创建对象的函数，通过构造函数创建的对象，可以共享构造函数的属性和方法。
2. **原型**：每个函数都有一个原型对象，可以通过函数的 `prototype` 属性来访问，原型对象中保存了构造函数的公共属性和方法，也就是所有通过构造函数创建的对象共享的属性和方法。
3. **对象**：通过构造函数创建出来的实例对象。

### 继承的几种方式及优缺点

JavaScript 中常用的继承方式有以下几种：

1. 原型链继承
2. 构造函数继承
3. 组合继承
4. 原型式继承`
5. 寄生式继承
6. 寄生组合式继承
7. ES6 继承

| 继承方式       | 能否向父类构造函数传参 | 能否继承父类实例方法和属性 | 能否继承父类原型方法和属性 | 能否通过 instanceof 判断子类的类型 | 是否存在引用值属性共享问题 | 是否存在重复调用父类构造函数 |
| -------------- | ---------------------- | -------------------------- | -------------------------- | ---------------------------------- | -------------------------- | ---------------------------- |
| 原型链继承     | `×`                    | `×`                        | √                          | √                                  | `√`                        | ×                            |
| 构造函数继承   | √                      | √                          | `×`                        | √                                  | ×                          | `√`                          |
| 组合继承       | √                      | √                          | √                          | √                                  | ×                          | `√`                          |
| 原型式继承     | `×`                    | `×`                        | √                          | `×`                                | `√`                        | ×                            |
| 寄生式继承     | `×`                    | √                          | √                          | `×`                                | `√`                        | ×                            |
| 寄生组合式继承 | √                      | √                          | √                          | √                                  | ×                          | `√`                          |
| ES6 继承       | √                      | √                          | √                          | √                                  | `√`                        | ×                            |

**原型链继承**：通过将**父类的实例作为子类的原型**来实现继承。

- [ ] 向父类构造函数传参
- [ ] 继承父类实例方法和属性
- [ ] 继承父类原型方法和属性
- [ ] 能通过 instanceof 判断子类的类型
- [ ] 没有引用值属性共享问题
- [ ] 没有重复调用父类构造问题

<details class="details-block">
    <summary>原型链继承</summary>

```js
function Parent() {
  this.name = 'parent';
}

Parent.prototype.sayHello = function() {
  console.log('Hello, I am ' + this.name);
}

function Child() {
  this.name = 'child';
}

Child.prototype = new Parent();

const child = new Child();
child.sayHello(); // 输出：Hello, I am child
```

</details>



**构造函数继承**：在子类构造函数中**调用父类构造函数**，使用 `call` 或 `apply` 方法将父类实例绑定到子类实例上，实现子类继承父类的属性。

- [x] 向父类构造函数传参
- [x] 继承父类实例方法和属性
- [ ] 继承父类原型方法和属性
- [x] 能通过 instanceof 判断子类的类型
- [x] 没有引用值属性共享问题
- [x] 没有重复调用父类构造问题

缺点：**无法继承**父类**原型上的属性和方法**。

<details class="details-block">
    <summary>构造函数继承</summary>

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function() {
  console.log('Hello, I am ' + this.name);
}

function Child(name) {
  Parent.call(this, name); // 在子类构造函数中调用父类构造函数
}

const child = new Child('child');
child.sayHello(); // 报错：child.sayHello is not a function
```

</details>



**组合继承**：将**原型链继承和构造函数继承结合**起来。

- [x] 向父类构造函数传参
- [x] 继承父类实例方法和属性
- [x] 继承父类原型方法和属性
- [x] 能通过 instanceof 判断子类的类型
- [x] 没有引用值属性共享问题
- [ ] 没有重复调用父类构造问题



优点：继承了**父类原型上的属性和方法**，又能够**向父类构造函数传递参数**，**避免了共享父类**实例上的属性和方法。

缺点：会**调用两次父类构造函数**，一次在子类的构造函数中，另一次在将父类实例作为子类原型时。

> 注意：会丢失子类构造函数

<details class="details-block">
    <summary>组合继承</summary>

```js
// 组合继承
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

let child = new Child('child', 18);
console.log(child.name); // "child"
console.log(child.age); // 18
child.sayHello(); // "Hello, child!"
```

</details>



**原型式继承**：创建**一个新对象**，将**父类的实例作为新对象的原型**，并可以根据需要增强新对象。

优点：使用方便。

缺点：**共享**父类实例上的属性和方法。

<details class="details-block">
    <summary>原型式继承</summary>

```js
// 原型式继承
function createObject(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

let parent = {
  name: 'parent',
  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

let child = createObject(parent);
child.name = 'child';
console.log(child.name); // "child"
child.sayHello(); // "Hello, child!"
```

</details>



**寄生式继承**：在原型式继承的基础上，增强新对象，返回一个增强后的新对象。

优点：可以用来为对象添加一些方法。

缺点：共享父类实例上的属性和方法。

> 和原型式继承有什么关系？

<details class="details-block">
    <summary>寄生式继承</summary>

```js
// 寄生式继承
function createObject(o) {
  let obj = Object.create(o);
  obj.sayHello = function() {
    console.log(`Hello, ${this.name}!`);
  };
  return obj;
}

let parent = {
  name: 'parent',
}

let child = createObject(parent);
child.name = 'child';
console.log(child.name); // "child"
child.sayHello(); // "Hello, child!"
```

</details>



**寄生组合继承**：在组合继承的基础上，通过Object.create()方法来减少调用两次父类构造函数的问题。

优点：继承了**父类原型上的属性和方法**，又能够**向父类构造函数传递参数**，且**避免了调用两次**父类构造函数的问题。

缺点：代码较为复杂。

> 共享问题呢？

<details class="details-block">
    <summary>寄生组合继承</summary>

```js
// 寄生组合式继承
function inherit(child, parent) {
  let prototype = Object.create(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
}

Parent.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}!`);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inherit(Child, Parent);

let child = new Child('child', 18);
console.log(child.name); // "child"
console.log(child.age); // 18
child.sayHello(); // "Hello, child!"
```

</details>

### js 垃圾回收机制

JavaScript 的垃圾回收机制是自动的，不需要手动操作。JavaScript 引擎会自动监测内存的使用情况，当发现一个对象不再被引用时，就会将其标记为垃圾对象，并在适当的时候进行回收，释放其所占用的内存空间，以便下一次的内存分配。

具体来说，JavaScript 中的垃圾回收机制主要有两种实现方式：

1. 标记清除（Mark-and-Sweep）：JavaScript 引擎会定期进行垃圾回收，先标记所有被引用的对象，再清除所有没有被标记的对象。
2. 引用计数（Reference Counting）：JavaScript 引擎会维护每个对象的引用计数，当引用计数为 0 时，就将其标记为垃圾对象，并立即回收。

在实际应用中，标记清除是目前主流的垃圾回收算法，而引用计数的缺陷也是被广泛认可的，它不能处理循环引用的情况，会导致内存泄漏。因此，现代浏览器都采用了标记清除算法，并针对循环引用的问题进行了优化。

### promise

Promise 是一种异步编程的解决方案，可以有效地解决回调地狱的问题。

Promise 有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。Promise 对象的状态改变只能从 pending 转变为 fulfilled 或 rejected，且一旦状态改变，就不能再次改变。

一个 Promise 对象通常包含两个函数作为参数，分别是 resolve 和 reject。当异步操作执行成功时，会调用 resolve 函数，并且把异步操作的结果作为参数传递给 resolve 函数。当异步操作执行失败时，会调用 reject 函数，并把错误信息作为参数传递给 reject 函数。

Promise 对象具有链式调用的特点，即可以在一个 then 方法中返回另一个 Promise 对象，从而实现多个异步操作的依次执行。此外，Promise 还提供了 catch 方法来捕获可能发生的错误，以及 finally 方法来指定不管 Promise 对象的状态如何都要执行的操作。

值得注意的是，在使用 Promise 的过程中，需要特别注意回调函数中的 this 指向问题，可以通过箭头函数或 bind 方法解决这个问题。此外，在使用 Promise 的过程中，还需要注意错误处理，以免出现未处理的异常情况。

### ES6 新特性

1. let 和 const 关键字
2. 箭头函数
3. 模板字符串
4. 解构赋值
5. 默认参数值
6. rest 参数
7. 扩展操作符
8. 对象字面量增强
9. 类与继承
10. 模块化
11. Promise
12. Set 和 Map 数据结构
13. 迭代器和生成器
14. Symbol 类型和 Symbol 属性
15. Proxy 和 Reflect
16. for...of 循环
17. 字符串和数值扩展
18. 生成器和异步函数

## 对比篇

### `__proto__`和`prototype`

`__proto__` 是每个对象都有的一个属性，指向它的原型对象（隐式原型）。

prototype 是函数才有的一个属性，指向它的构造函数的原型对象（显式原型）。

当你创建一个对象时，它的 `__proto__` 属性会自动设置为它的构造函数的 prototype 属性。

当你访问一个对象的属性或方法时，它会先在自身查找，如果没有找到，就会沿着 `__proto__` 链向上查找，直到找到或者到达 `Object.prototype.__proto__`（null）为止

### let、const、var 的区别

**（1）块级作用域：** 块作用域由 `{ }`包括，let 和 const 具有块级作用域，var 不存在块级作用域。块级作用域解决了 ES5 中的两个问题：

- 内层变量可能覆盖外层变量
- 用来计数的循环变量泄露为全局变量

**（2）变量提升：** var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。

**（3）给全局添加属性：** 浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。

**（4）重复声明：** var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的遍历。const 和 let 不允许重复声明变量。

**（5）暂时性死区：** 在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为**暂时性死区**。使用 var 声明的变量不存在暂时性死区。

**（6）初始值设置：** 在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。

**（7）指针指向：** let 和 const 都是 ES6 新增的用于创建变量的语法。 let 创建的变量是可以更改指针指向（可以重新赋值）。但 const 声明的变量是不允许改变指针的指向。

### ES6 模块与 CommonJS 模块有什么异同？

1. 语法不同：ES6 模块使用`import`和`export`关键字来导入和导出模块，而 CommonJS 模块使用`require()`函数来导入模块，使用`module.exports`或`exports`对象来导出模块。
2. 加载方式不同：ES6 模块在编译时静态分析，可以通过网络或本地加载器（如 Webpack）等进行加载，而 CommonJS 模块是在运行时动态加载的，只能在本地环境中使用。
3. 导出方式不同：ES6 模块可以导出变量、函数、类、对象等任何 JavaScript 对象，而 CommonJS 模块只能导出一个对象或函数。
4. 执行顺序不同：ES6 模块中的顶级代码是在模块加载时执行的，而 CommonJS 模块中的顶级代码是在运行时执行的。
5. 可静态分析：由于 ES6 模块采用静态分析，因此可以进行更好的优化，例如在编译时进行静态分析，进行更好的压缩、减少依赖等。
6. 循环依赖的处理方式不同：ES6 模块支持循环依赖，但是需要注意处理方式；而 CommonJS 模块则会出现死锁的问题，因为每个模块都会在运行时进行加载和执行。

### ajax、axios、fetch 的区别

**XMLHttpRequest** (XHR) 是一种用于网络请求的标准 API，它有以下优点和缺点：

优点：

1. **支持同步和异步请求**：XHR 可以进行同步和异步请求，具有一定的灵活性。
2. 可以**设置请求头和请求体**：XHR 可以设置请求头和请求体，使得请求可以携带更多的信息。
3. 可以**监测上传和下载进度**：XHR 可以监测文件上传和下载的进度，使得用户体验更佳。
4. **跨域请求支持**：XHR 支持跨域请求，可以实现跨域数据获取和资源共享。

缺点：

1. 处理复杂请求时**代码复杂度高**：当请求比较复杂或需要发送多个请求时，需要编写大量的代码，代码复杂度较高。
2. 代码可读性较差：XHR 回调函数嵌套较多，代码可读性较差。
3. 不支持 Promise：XHR 不支持 Promise 处理异步操作。

**Fetch** 一种用于网络请求的新的浏览器标准 API。fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象。

优点：

1. **链式调用**：Fetch API 提供了链式调用的方式，使得代码可读性更好，更易于维护。
2. **支持 Promise**：Fetch API 使用 Promise 处理异步操作，避免了回调地狱的问题，使得代码逻辑更加清晰。
3. **语法简单**：Fetch API 语法简单，易于使用，且与现代 JavaScript 的标准语法更为一致。
4. **自动解析 JSON**：Fetch API 可以自动解析 JSON 格式的数据，无需手动解析。

缺点：

1. **不支持同步请求**：Fetch API 只支持异步请求，无法进行同步请求。
2. **可能存在兼容性问题**：尽管 Fetch API 的浏览器支持性很好，但是在某些旧版本浏览器中可能存在兼容性问题。
3. **不支持超时设置**：Fetch API 没有提供内置的超时处理机制，需要手动编写超时代码。
4. **无法监测上传进度**：Fetch API 无法监测文件上传的进度。
5. **CSRF 攻击**：在 Fetch API 中，需要手动处理 CSRF（跨站请求伪造）攻击的问题，增加了开发难度。

**（3）Axios** Axios 是一种基于 Promise 封装的 HTTP 客户端，其特点如下：

- 浏览器端发起 XMLHttpRequests 请求
- node 端发起 http 请求
- 支持 Promise API
- 监听请求和返回
- 对请求和返回进行转化
- 取消请求
- 自动转换 json 数据
- 客户端支持抵御 XSRF 攻击

### map 和 Object 的区别

1. 键的类型：`Object`的键必须是字符串或者 Symbol，而`Map`的键可以是任意类型，包括函数、对象、原始类型等。
2. 大小的获取：`Object`没有提供直接获取键值对数量的方法，需要手动遍历对象；而`Map`提供了`size`属性可以直接获取键值对的数量。
3. 迭代：`Object`可以使用`for-in`、`Object.keys()`等方式迭代对象的键值对；而`Map`提供了多种迭代方式，如`forEach`、`for-of`等。
4. 性能：在存储大量数据时，`Map`相对于`Object`具有更快的插入、查找和删除速度。
5. 内存消耗：相比于`Object`，`Map`占用更多的内存空间。

### map 和 weakMap 区别

1. 键的类型：`Map`的键可以是任意类型，包括函数、对象、原始类型等；而`WeakMap`的键只能是对象。
2. 引用关系：`Map`中的键值对对于垃圾回收是可达的，即只要`Map`对象存在，其中的键值对就会一直存在；而`WeakMap`中的键值对只对其键是强引用关系，即如果键不再被引用，键值对会被自动清除，从而释放内存。
3. 大小的获取：`Map`提供了`size`属性可以直接获取键值对的数量，而`WeakMap`没有提供获取大小的方法。
4. 迭代：`Map`提供了多种迭代方式，如`forEach`、`for-of`等；而`WeakMap`没有提供直接迭代其内部键值对的方法。
5. 方法：`Map`提供了一些操作方法，如`set`、`get`、`delete`、`has`等；而`WeakMap`只提供了`set`、`get`、`delete`等最基本的操作方法。

### map 和 set 区别

1. 存储方式：`Map`存储键值对，每个键都只能出现一次；而`Set`存储唯一的值，每个值只能出现一次。
2. 键和值：在`Map`中，键和值可以是任意类型的数据，可以是基本数据类型、对象、甚至是函数等；而在`Set`中，值只能是 JavaScript 中的任意数据类型。
3. 遍历方式：`Map`和`Set`都可以使用`for-of`循环进行遍历，但是遍历顺序不同。在`Map`中，遍历顺序是插入顺序；而在`Set`中，遍历顺序就是插入顺序。
4. 方法：`Map`提供了一系列操作方法，如`set`、`get`、`has`、`delete`等；而`Set`也提供了类似的方法，如`add`、`has`、`delete`等。





## 实战篇

### instanceof的底层实现原理，手动实现一个instanceof

instanceof是JavaScript中的一个运算符，用于判断一个对象是否是一个类或其派生类的实例。其底层实现原理可以简述为：

1. 首先**获取待判断对象的原型链**（即`__proto__`链）。
2. **在原型链中查找是否存在与待判断类型的原型对象相同的对象**，如果找到则返回true，否则继续查找，直到原型链的末尾。
3. 如果一直查找到原型链的末尾仍未找到与待判断类型的原型对象相同的对象，则返回false。

<details class="details-block">
    <summary>手动实现一个instanceof的代码</summary>

  ```js
  function myInstanceOf(obj, type) {
    let proto = Object.getPrototypeOf(obj);  // 获取对象的原型链
    while (proto !== null) {
      if (proto === type.prototype) {  // 如果找到类型的原型对象，则返回true
        return true;
      }
      proto = Object.getPrototypeOf(proto);  // 继续查找原型链上一层
    }
    return false;  // 如果查找到原型链的末尾仍未找到类型的原型对象，则返回false
  }
  ```

</details>





### 如何切片并传输

### 断点上传怎么做

1. 断点续传如何保证文件一致？
2. 串行断点续传有什么意义？如何并行传输
3. tcp 的最大并行限制，并行场景下如何断点续传？
4. 超大文件怎么办？

断点上传是指在上传文件时，将文件分割成多个小块进行上传，若某个小块上传失败，则只需重新上传该小块而不是整个文件。这种方式可以有效地提高文件上传的效率和稳定性。

1. **保证文件一致性的关键在于每个小块的上传和校验。**每个小块上传完成后需要进行校验，确保上传成功，否则需要重新上传该小块。另外，在所有小块上传完成后还需要进行整个文件的校验，确保上传的所有小块拼接后能够得到完整的文件。
2. **串行断点续传**可以保证上传的正确性，但是效率较低。并行传输可以提高上传效率，但需要注意并发请求的数量不能超过服务器的最大并发限制，否则会影响上传的速度和稳定性。可以采用线程池等方式来管理并发请求，避免同时上传过多的小块导致服务器拒绝服务。
3. **TCP 协议的最大并行限制**是由操作系统和硬件决定的，一般情况下为数千个连接。在并行上传场景下，可以采用多线程或多进程的方式来提高上传效率，同时需要注意避免同时上传过多的小块导致服务器拒绝服务。
4. **对于超大文件**，可以将文件分割成更小的块进行上传，同时采用多线程或多进程的方式来提高上传效率。此外，可以使用分布式存储技术，将文件分布到多个服务器上，从而进一步提高上传速度和稳定性。

**校验文件**

为了验证断点上传是否保证文件一致，可以在上传时，对文件进行哈希计算，并记录哈希值。上传完成后，再次计算哈希值，如果两个哈希值一致，则说明文件在上传过程中没有被篡改。

**利用线程池管理并发请求**

为了管理并发请求，可以利用线程池来限制并发请求数量。线程池是一种预先创建的线程集合，可用于执行一系列任务。在 Node.js 中，可以使用 `worker_threads` 模块来创建线程池。

当需要发送并发请求时，可以将每个请求封装成一个任务，然后将所有任务添加到线程池中执行。线程池会自动管理线程的数量，并控制并发请求数量不超过指定的阈值。

在断点上传的并行场景中，需要对每个上传任务记录已经上传的字节数，以便在断点续传时从上次上传的位置继续上传。当并发请求数量超过 TCP 的最大并行限制时，可以通过设置请求的超时时间来避免网络阻塞。如果一个请求超时，则可以将其重新放回线程池，等待后续处理。

## 搜集篇

axios 并发执行多个请求的时候如何取消之前的请求

xss 和 csrf

token 无痕刷新

防止按钮重复提交怎么做，防抖节流的原理、除了防抖节流还能怎么做

setInterval 底层原理，有什么问题

promise 内部运行逻辑

promise then 方法的回调函数里，在 promise 最外层加个 try catch，能捕获到这个异常吗

xhr 请求取消
