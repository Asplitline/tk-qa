---
title: JS手写篇
order: 1
---

# JS 手写篇

## 数组集合操作 - 交集/并集/差集/对称差集/笛卡尔积/幂集

交集：指两个集合中都存在的元素组成的集合。例如，集合 A = `{1, 2, 3}`和集合 B = `{2, 3, 4}`的交集为`{2, 3}`。

<details class="details-block"><summary>答案</summary>



```js
function intersection(a, b) {
  return a.filter((value) => b.includes(value))
}

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
console.log(intersection(a, b))
// [3, 4]
```

</details>

并集：指两个集合中所有元素组成的集合。例如，集合 A = `{1, 2, 3}`和集合 B = `{2, 3, 4}`的并集为`{1, 2, 3, 4}`。

<details class="details-block"><summary>答案</summary>



```js
function union(a, b) {
  return Array.from(new Set([...a, ...b]))
}

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
console.log(union(a, b))
// [1, 2, 3, 4, 5, 6]
```

</details>

差集：指个集合中减去另一个集合中存在的元素后得到的集合。例如，集合 A = `{1, 2, 3}`和集合 B = `{2, 3, 4}`的差集为`{1}`。

<details class="details-block"><summary>答案</summary>

```js
function difference(a, b) {
  const setA = new Set(a)
  const setB = new Set(b)
  const difference = new Set([...setA].filter((x) => !setB.has(x)))
  return Array.from(difference)
}

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
console.log(difference(a, b))
// [1, 2]
```

</details>

对称差集：指两个集合中除了交集外的所有元素组成的集合。例如，集合 A = `{1, 2, 3}`和集合 B = `{2, 3, 4}`的对称差集为`{1, 4}`。

<details class="details-block"><summary>答案</summary>



```js
function symmetricDifference(a, b) {
  const setA = new Set(a)
  const setB = new Set(b)
  const difference = new Set([...setA].filter((x) => !setB.has(x)))
  const symmetricDifference = new Set([...difference, ...[...setB].filter((x) => !setA.has(x))])
  return Array.from(symmetricDifference)
}

const a = [1, 2, 3, 4]
const b = [3, 4, 5, 6]
console.log(symmetricDifference(a, b))
// [1, 2, 5, 6]
```

</details>

笛卡尔积：指两个集合中所有元素对的组合。例如，集合 A = `{1, 2}`和集合 B = `{x, y}`的笛卡尔积为`{(1, x), (1, y), (2, x), (2, y)}`。

<details class="details-block"><summary>答案</summary>

```js
function cartesianProduct(a, b) {
  return a.flatMap((x) => b.map((y) => [x, y]))
}

const a = [1, 2]
const b = ['a', 'b']
console.log(cartesianProduct(a, b))
// [[1, "a"], [1, "b"], [2, "a"], [2, "b"]]
```

</details>

幂集：指一个集合中所有子集（包括空集和本身）的集合。例如，集合 A = `{1, 2, 3}`的幂集为`{ {}, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3} }`。

<details class="details-block"><summary>答案</summary>

```js
function powerset(a) {
  return a.reduce((subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])), [[]])
}

const a = [1, 2, 3]
console.log(powerset(a))
// [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

</details>

手写 Promise

手写 Promise.all

## 手写深拷贝

深拷贝

1. 要考虑到循环引用的情况，避免进入死循环；
2. 要能够正确地拷贝各种数据类型，如原始类型、数组、对象、日期、正则、Map、Set等；
3. 对于函数的拷贝，需要根据具体场景进行考虑。一般来说，可以选择不拷贝函数或者使用函数的序列化和反序列化来实现拷贝；
4. 要保留被拷贝对象的原型链；
5. 对于对象的属性，要递归拷贝。

```js
function deepClone(obj, cache = new WeakMap()) {
  // 非对象和 null 直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // 处理特殊类型
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  // 避免循环引用
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  // 创建新对象
  const result = Array.isArray(obj) ? [] : {};
  // 缓存引用
  cache.set(obj, result);
  // 获取对象的所有属性，包括 Symbol 类型
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  // 处理所有属性
  for (let key in descriptors) {
    const descriptor = descriptors[key];
    // 过滤掉不可枚举的属性
    if (!descriptor.enumerable) {
      continue;
    }
    // 处理属性值
    const value = descriptor.value;
    if (typeof value === 'object' && value !== null) {
      result[key] = deepClone(value, cache);
    } else {
      result[key] = value;
    }
  }
  // 处理 Map 和 Set 类型
  if (obj instanceof Map) {
    obj.forEach((value, key) => {
      result.set(key, deepClone(value, cache));
    });
  }
  if (obj instanceof Set) {
    obj.forEach(value => {
      result.add(deepClone(value, cache));
    });
  }
  return result;
}
```



## 手写call，apply，bind

call, apply, bind 都是用来改变函数执行上下文的方法，它们的本质是调用函数并指定函数内部 this 指向的对象

call 的参数是一个一个传进去的

apply 的参数是以数组的形式传进去的。

bind 会返回一个新函数，新函数的 this 指向 bind 的第一个参数，后面的参数作为新函数的参数，bind 返回的新函数可以在之后被调用。如果新函数作为构造函数使用，this 会指向新函数实例化出来的对象



<details class="details-block"><summary>答案</summary>
 

```js
Function.prototype.myCall = function (context, ...args) {
  // 如果没有传递上下文，就默认使用全局对象 window
  context = context || window;
  // 声明一个唯一的 Symbol 作为 context 对象的属性名，避免与其它属性名冲突
  const fn = Symbol('fn');
  // 将调用 myCall 方法的函数作为 context 对象的属性值
  context[fn] = this;
  // 调用 context 对象上的函数并返回结果
  const result = context[fn](...args);
  // 删除添加的属性
  delete context[fn];
  // 返回函数执行结果
  return result;
}

Function.prototype.myApply = function(context, args) {
  // 首先判断调用 myApply 方法的对象是否是函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  // 如果没有传入 context，则默认为全局对象
  context = context || window;
  // 将当前函数作为属性添加到传入的 context 对象上
  context.fn = this;
  // 执行函数，并将参数以数组的形式传入
  const result = args ? context.fn(...args) : context.fn();
  // 删除添加的属性
  delete context.fn;
  // 返回函数执行结果
  return result;
};

Function.prototype.myBind = function(context, ...args1) {
  // 首先判断调用 myBind 方法的对象是否是函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  const fn = this;
  // 返回一个新函数
  return function(...args2) {
    // 如果该函数作为构造函数被调用，则 this 绑定到新创建的对象上
    // 否则，this 绑定到传入的 context 对象上
    return fn.apply(this instanceof fn ? this : context, [
      ...args1,
      ...args2
    ]);
  };
};

```



</details>





手动实现一个简单的 Symbol

