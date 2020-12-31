---
title: 使用vssue增加评论功能
tags:
 - vssue
 - critic
 - 评论
---

### 使用vssue增加评论功能
- 原理：
>由于你的页面是“静态”的，你没有数据库和后端 API 的支持。但是你希望让你的页面拥有评论功能，让用户可以登录和发表评论。
代码托管平台（如 Github、Gitlab、Bitbucket、Coding 等平台，示例选择了github）提供了 OAuth API ，
在它们的帮助下，Vssue 可以让用户通过这些平台的帐号登录，将评论存储在这些平台的 Issue 系统中，并在当前页面展示。


### 安装
```
npm install @vssue/vuepress-plugin-vssue
npm install @vssue/api-github-v3 或者 npm install @vssue/api-github-v4

```

### 修改config.js

``` js
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4', //v3的platform是github，v4的是github-v4
      // 其他的 Vssue 配置
      owner: 'weijintao92', //github账户名
      repo: 'weijintao92.github.io', //github一个项目的名称
      clientId: '7bb076189aa05aa2542d',//注册的Client ID
      clientSecret: '',//注册的Client Secret
      autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
```

### 获取clientId和clientSecret
[参考](https://blog.csdn.net/loveshanqian/article/details/106406261)

### 使用

``` md
<Vssue  />
```
