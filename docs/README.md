---
title: Blogging Like a Hacker
lang: en-US
---

[Home](/bar/)

::: tip
这是一个提示
:::


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


<<< docs/.vuepress/config.js


{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>


{{ $page }}
