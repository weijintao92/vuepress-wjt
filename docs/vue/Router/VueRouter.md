---
title: VueRouter 动态路由配置的坑
tags:
  - router
  - dynamic 
---

### VueRouter 动态路由配置的坑
- 最大的坑是在配置3级侧边栏动态路由。我们必须在二级路由界面添加`<router-view />`。这个问题耗时5个小时，最后还是在我师傅的帮助下解决。

###  路由js文件
``` js
  {
    path: '/loginHome',
    component: Layout,
    name: 'LoginHome',
    redirect: '/loginHome/login',
    meta: { title: 'LoginHome', icon: 'Login' },
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/views/loginHome/login/index'), // Parent router-view
      meta: { title: 'Login' },
      children: [{
        path: '/show',
        name: 'Show',
        component: () => import('@/views/loginHome/login/show/index'),
        meta: { title: 'Show' }
      }, {
        path: '/code',
        name: 'Code',
        component: () => import('@/views/loginHome/login/code/index'),
        meta: { title: 'Code' }
      }]
    }]
  }
```


### 二级路由页面模板
``` vue
<template>
  <div class="my_main">
    <router-view />
  </div>
</template>
<style scoped>
.my_main{
  width: 100%;
  height: 100%;
}
</style>

```