---
title: nginx配置SSL证书
tags:
  - nginx
  - ssl
  - 证书
  - 反向
  - 代理
---

# nginx配置SSL证书

# 前言
- 随着微信小程序和appstore对ssl安全的需求，越来越多的网站和app需要支持SSL功能，需要开启https的方式来打开网站或传输数据。最直观的就是有了ssl证书后，在浏览器访问时不会有`不安全`的提示


# 注意
- 记得清理浏览器缓存

# nginx 配置文件
```
    # 我的api
    server {
        listen 80;
        server_name api.gd97.xyz;
        return 301 https://api.gd97.xyz$request_uri;
    }

    server {
    # 这里要加上ssl不然，会出现无法访问的错误
        listen 443 ssl;
        server_name api.gd97.xyz;

        ssl_certificate /etc/nginx/cert/4955144_api.gd97.xyz.pem;
        ssl_certificate_key /etc/nginx/cert/4955144_api.gd97.xyz.key;

        ssl_session_timeout 5m;
        ssl_protocols SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2;
        ssl_ciphers ALL:!ADH:!EXPORT56:RC4+RSA:+HIGH:+MEDIUM:+LOW:+SSLv2:+EXP;
        ssl_prefer_server_ciphers on;

        error_page 497 "https://$host$uri?$args"; #这是跳转Http请求到Https

        location /static {
            alias /www/DjangoREST/static; # your Django project's static files - amend as required
        }
        location / {
            proxy_set_header Host $http_host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_redirect off;
            proxy_buffering off;
            proxy_pass http://DjangoREST;
        }

        error_page 404 /404.html;
        location = /404.html {
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
```


# NGINX常用命令

```
nginx -s reload # 重新载入配置文件
nginx -s reopen # 重启 Nginx
nginx -s stop # 停止 Nginx
netstat -lnpt #查看开放了哪些端口
nginx -t   #检查配置文件
```

# 参考
[Nginx 配置SSL及Http跳转到Https](https://www.w3cschool.cn/nginxsysc/nginxsysc-ssl.html)

[Nginx部署https网站，并配置地址重写](https://blog.csdn.net/wdz306ling/article/details/79954561?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control)
