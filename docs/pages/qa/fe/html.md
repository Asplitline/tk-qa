---
title: html
order: 2
---



# html

## 基础篇



### 事件冒泡和事件捕获 

<details class="details-block"><summary>答案</summary>

事件冒泡和事件捕获是浏览器中常见的两种事件传播机制，它们描述的是**当一个元素上的事件被触发时，该事件是如何向上传递和处理的**。

**事件冒泡**：当一个元素上的事件被触发时，该事件会**从该元素开始向上冒泡传递，直到传递到文档根节点为止**。例如，当在一个按钮上点击时，该点击事件会从该按钮开始向上传递，先是触发按钮上的事件处理函数，然后再依次触发按钮所在的父元素上的事件处理函数，一直传递到文档根节点为止。

**事件捕获**：当一个元素上的事件被触发时，该事件会**从文档根节点开始向下捕获传递，直到传递到该元素为止**。例如，当在一个按钮上点击时，该点击事件会从文档根节点开始向下传递，先依次触发文档根节点到该按钮所在的父元素上的事件处理函数，最后再触发按钮上的事件处理函数。

在浏览器中，事件传播机制默认是事件冒泡。通过调用事件对象的 `stopPropagation()` 方法来阻止事件冒泡或事件捕获。

</details>





### 讲讲回流与重绘、回流会引起重绘吗、重绘会引起回流吗

<details class="details-block"><summary>答案</summary>


回流（reflow）和重绘（repaint）是浏览器渲染页面时的两个关键步骤。

回流：指浏览器**重新计算页面中元素的位置和大小**等信息的过程。当页面中某个元素的尺寸、位置、显示状态等属性发生变化时，浏览器需要重新计算该元素及其周围元素的位置和大小等信息，这个过程就是回流。

重绘：指浏览器根据**元素的最新属性值重新绘制页面**的过程。当页面中某个元素的颜色、背景色、边框等属性发生变化时，浏览器会重新绘制该元素，这个过程就是重绘。

**回流会引起重绘，但重绘不一定会引起回流**。

当页面中某个元素的位置、大小、布局等属性发生变化时，浏览器需要重新计算该元素及其周围元素的位置和大小，这个过程就会引起回流，同时浏览器会重新绘制这些元素，这个过程就会引起重绘。

反之，当页面中某个元素的颜色、背景色等属性发生变化时，浏览器只需要重新绘制该元素，而不需要重新计算该元素及其周围元素的位置和大小，因此不会引起回流。

因此，为了**提高页面的性能**，我们应该尽可能地减少回流和重绘的次数。可以通过以下几种方式：

- 使用 CSS3 的 `transform` 属性来代替 top/left 等定位属性，因为 transform 不会引起回流；
- 将**多次对 DOM 的操作合并成一次**，避免频繁更新 DOM；
- 使用文档碎片（`DocumentFragment`）来批量操作 DOM；
- 使用 **CSS 动画代替 `JavaScript` 动画**，因为 CSS 动画的性能更高；
- **避免频繁查询某个元素的属性值**，应该将查询结果缓存起来。

</details>



## 对比篇

### 说下 requestAnimationFrame， 它和 settimeout 和 setinterval 有什么区别

<details class="details-block"><summary>答案</summary>


`requestAnimationFrame` 是一种浏览器提供的 API，它用于优化动画的性能和流畅度。与 `setTimeout` 和 `setInterval` 相比，`requestAnimationFrame` 在实现动画效果时有以下区别：

**时序问题**：**`setTimeout` 和 `setInterval` 的执行时间不是固定的，取决于浏览器当前的负载情况**，可能会导致动画帧率过低或过高，从而影响动画的流畅度和视觉效果。而 `requestAnimationFrame` 的执行时间是由浏览器的刷新频率决定的，通常为每秒 60 次。

**节省资源**：**setTimeout 和 setInterval 的执行是由 `JavaScript` 引擎控制的**，因此可能会占用过多的 CPU 资源，从而影响其他 JavaScript 代码的执行效率。**而 `requestAnimationFrame` 的执行是由浏览器引擎控制的**，可以更好地协调资源的使用，从而减少浏览器的负担。 


</details>


