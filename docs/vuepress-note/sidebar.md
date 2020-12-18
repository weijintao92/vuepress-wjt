---
title: sidebar侧边栏
sidebarDepth: 2
tags:
  - sidebar
  - 侧边栏
  - sidebar侧边栏
---

# sidebar侧边栏
``` js
    sidebar: [
      {
        title: '首页',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: []
      },
      {
        title: 'vuepress笔记',
        path: '/vuepress-note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'siderbar侧边栏',   // 必要的
          path: '/vuepress-note/sidebar',
        }],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ]
```