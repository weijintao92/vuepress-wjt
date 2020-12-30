--- 
title: 提取文件中的源码显示在Web前端页面
tags: 
  - showCode
  - code
---

### 提取文件中的源码显示在Web前端页面
[参考博客](https://blog.csdn.net/qq_40411946/article/details/111027534)

### 自定义js

``` js
//新建docs-loader.js文件
// 通过 vue-loader 自定义块 功能，获取目标文件的文件路径，然后通过 fs 读取源码，
// 再用 @vue/compiler-core 的 API baseParse将读取到的内容转换成 AST 语法抽象树，
// 然后将 fs 读取的内容中 抽离出 自定义块内容 和 需要的源码，
// 最后再将以上两个内容重新挂到组件对象上，直接读取组件相应的字段就可以。
// const fs = require('fs')
// 参考博客：https://blog.csdn.net/qq_40411946/article/details/111027534
// Vue Loader官方说明：https://vue-loader.vuejs.org/zh/guide/custom-blocks.html
const { baseParse } = require('@vue/compiler-core')

module.exports = function(source, map) {
  // 1. 获取带有 <docs /> 标签的文件完整路径
  const { resourcePath } = this
  // 2. 读取文件内容
  const file = fs.readFileSync(resourcePath).toString()
  // 3. 通过 baseParse 将字符串模板转换成 AST 抽象语法树
  const parsed = baseParse(file).children.find(n => n.tag === 'docs')
  // 4. 标题
  const title = parsed.children[0].content
  // 5. 将 <docs></docs> 标签和内容抽离
  const main = file.split(parsed.loc.source).join('').trim()
  // 6. 回到并添加到 组件对象上面
  this.callback(
    null,
    `export default function (Component) {
          Component.options.__sourceCode = ${JSON.stringify(main)}
          Component.options.__sourceCodeTitle = ${JSON.stringify(title)}
        }`,
    map
  )
}

```


### 配置vue.config.js
``` js
  configureWebpack: {
    module: {
        rules: [
            {
            resourceQuery: /blockType=docs/,
            loader: require.resolve('./docs-loader.js')
            }
        ]
        }
  }
```


### 在目标文件中新增docs标签
``` vue
//新建demo.vue文件
<docs>
    我是ComponentB docs自定义快 内容
</docs>

<template>
    <div>
        ComponentB 组件
    </div>
</template>

```

### 显示页面
``` vue
<template>
    <div id="app">
        <demo/>
        <p>{{demoDocs}}</p>
    </div>
</template>

<script>
    import Demo from './components/demo'
    export default {
        name: 'App',
        components: {
            Demo
        },
        data () {
            return {
                demoDocs: Demo.__docs
            }
        }
    }
</script>

```
