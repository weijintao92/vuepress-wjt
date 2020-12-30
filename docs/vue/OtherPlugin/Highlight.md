### 使用Highlight在页面高亮显示源码
- 这是一个使用elementui Card 卡片 和 highlightjs，在页面上显示代码的组件

### 安装highlight
``` npm
npm install highlight.js
```
### 与Vue.js一起使用
``` vue.js
#只需在Vue中注册插件：
Vue.use(hljs.vuePlugin);
#您将获得一个highlightjs可在模板中使用的组件：
<div id="app">
<!-- bind to a data property named `code` -->
<highlightjs autodetect :code="code" />
<!-- or literal code works as well -->
<highlightjs language='javascript' code="var x = 5;" />
</div>

``` 
### 参考
[highlight官方参考](https://highlightjs.org/usage/)