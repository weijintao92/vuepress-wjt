---
title: Clipboard 复制插件
tags:
  - Clipboard
  - copy
---

### Clipboard复制插件
- [clipboard.js中文网站](http://www.clipboardjs.cn/)

- [参考](https://www.cnblogs.com/linchen1300/p/10219966.html)

### 使用说明
- 安装
``` node.js
npm install clipboard --save
```

- 源码
``` vue.js
<template>
  <div>
    <!-- Trigger -->
    <button class="btn4" :data-clipboard-text="my_text" @click="copyLink()">
      Copy to clipboard
    </button>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  name: 'Clipboard',
  data() {
    return {
      my_text: '复制的文本3334444'
    }
  },
  methods: {
    copyLink() {
      var clipboard = new Clipboard('.btn4')

      // 成功
      clipboard.on('success', function(e) {
        // console.info('Action:', e.action)
        // console.info('Text:', e.text)
        // console.info('Trigger:', e.trigger)

        e.clearSelection()
        // 释放内存
        clipboard.destroy()
      })
      // 失败
      clipboard.on('error', function(e) {
        console.error('Action:', e.action)
        console.error('Trigger:', e.trigger)
        clipboard.destroy()
      })
    }
  }
}
</script>
```
