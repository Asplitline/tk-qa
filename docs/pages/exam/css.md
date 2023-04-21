---
title: css 笔试题
order: 2
---

# CSS 笔试题

## 1.根据 HTML 规范，以下代码中，外层容器 .outer 的宽高分别是

```css
<style>
.outer {
height: 50px;
}
.inner {
width: 120px;
height: 100px;
}
</style>

<div class="outer">
<span class="inner">content</span>
</div>
```

<details class="details-block">
    <summary>答案</summary>

高 50px，宽 100%

</details>



## 2.当 margin-top、padding-top 的值是百分比时，分别是如何计算的？

<details class="details-block">
    <summary>答案</summary>

答案：相对最近父级块级元素的 width，相对最近父级块级元素的 width


解析：

CSS 百分比参照问题

参照**父元素宽度**的元素：padding margin width text-indent

参照**父元素高度**的元素：height

参照父元素属性:font-size line-height

特殊：相对定位的时候，top(bottom) left(right)参照的是父元素的内容区域的高度与宽度，而绝对定位的时候参照的是最近的定位元素包含padding的高度与宽度

</details>



## 3.关于 CSS，以下说法正确的有

A. currentColor 取值为当前元素 color 属性的值

B. calc( ) 函数允许使用加法和减法，不允许使用乘法和除法

C. attr( ) 函数只能在 content 属性中使用

D. color: currentcolor 和 color: inherit 是等价的



<details class="details-block"><summary>答案</summary>

答案：AD

解析： currentColor 关键字的使用值是 color 属性值的计算值。如果currentColor关键字被应用在 color 属性自身，则相当于是 color: inherit。

</details>

