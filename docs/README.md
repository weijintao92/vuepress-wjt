---
title: 首页
sidebarDepth: 2
---

### 首页 <Badge text="私人笔记" type="warning"/> <Badge text="学习记录"/>

### 页面跳转
[sidebar侧边栏](/vuepress-note/sidebar)

### 自定义容器 默认主题
::: tip
这是一个提示
:::

### 代码块中的语法高亮
``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

### 引入文件中的代码 
<<< docs/.vuepress/config.js

### 模板语法
#插值
{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

### 访问网站以及页面的数据
{{ $page }}
