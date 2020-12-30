---
title: 使用Highlight在页面高亮显示源码
tags:
  - Highlight
---

### 使用Highlight在页面高亮显示源码
- 这是一个使用elementui Card 卡片 和 highlightjs，在页面上显示代码的组件

### 安装highlight
``` npm
npm install highlight.js
```
### 在man.js注册
``` js
import hljs from 'highlight.js';
//引入样式
import 'highlight.js/styles/github.css';
// 注册highlight插件
Vue.use(hljs.vuePlugin);
```

### 使用
- 您将获得一个highlightjs可在模板中使用的组件：
``` vue
<div id="app">
<!-- bind to a data property named `code` -->
<highlightjs autodetect :code="code" />
<!-- or literal code works as well -->
<highlightjs language='javascript' code="var x = 5;" />
</div>
``` 
### 参考
[highlight官方参考](https://highlightjs.org/usage/)