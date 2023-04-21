---
title: html 笔试题
order: 1
---

# html 笔试题

## 1.基于以下 HTML 结构，以下关于 main1.css 和 main2.css 的描述有哪些是正确的？

```html
<head>
  <link href="main1.css" rel="stylesheet">
  <link href="main2.css" rel="stylesheet">
</head>
```

A. main1.css 和 main2.css 同时开始加载，先加载完成的优先解析

B. 如果 main1.css 和 main2.css 中有相同的选择器规则，那么 main2.css 中的规则将合并 main1.css 的规则

C. main2.css 只有在 main1.css 加载并解析后，才开始加载

D. 如果 main1.css 和 main2.css 中有相同的选择器规则，那么 main2.css 中的规则将被忽略



<details class="details-block"><summary>答案</summary>


答案：AB

解析：link会同时加载，而@import会等到页面加载完毕后才加载     

</details>

