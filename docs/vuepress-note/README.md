---
title: vuepress笔记
tags:
  - vuepress
  - press
---

### vuepress笔记 <Badge text="私人笔记" type="warning"/> <Badge text="学习记录"/>

### 页面跳转参考
[sidebar侧边栏](/vuepress-note/sidebar)



### 显示图片
```
![An image](./image.png)
```
[显示图片-官方文档](https://vuepress.vuejs.org/zh/guide/assets.html#%E7%9B%B8%E5%AF%B9%E8%B7%AF%E5%BE%84)

### 默认主题配置参考
[默认主题配置-官方文档](https://www.vuepress.cn/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

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
