--- 
title: vue设置代理（proxy）
tag:
 - proxy
 - 代理
 - vue设置代理（proxy）

---

### vue设置代理（proxy）
[参考](https://www.jianshu.com/p/5ef2b17f9b25)
```js
  devServer: {
    port: port,
    proxy: {
      '/rng': {    //这里最好有一个 /
        target: 'https://github.com/login/oauth/access_token',   // 后台接口域名
        ws: true,    //如果要代理 websockets，配置这个参数
        secure: false,   // 如果是https接口，需要配置这个参数
        changeOrigin: true,    //是否跨域
        pathRewrite: {
          '^/rng': ''
        }
      }
    },
  },
```

### 容易出错的地方
- `rng` 貌似长度过长，参杂大小写，都会导致代理失败。