---
title: MySql Navicat 无法登录的解决
tags:
 - mysql 
 - navicat
 - install mysql
---

### MySql Navicat 无法登录的解决

### Windows安装MySql
```mysql 
# 下载
MySQL清华镜像下载地址：https://mirrors.tuna.tsinghua.edu.cn/mysql/downloads/MySQL-8.0/mysql-8.0.21-winx64.zip
#切换盘符
d:
#进入`bin`目录
cd D:\mysql-8.0.21-winx64\bin
#初始化数据库：
mysqld --initialize --console
#将MySQL安装成windows服务
mysqld install
#启动mysql
net start mysql
#登录
mysql -u root -p
#第一次登录需要修改密码（修改当前登录用户的密码）
alter user user() identified by '123456';
#选择mysql库
use mysql;
# 修改root用户的host，以使root用户可以任意主机连接
update user set host = '%' where user = 'root';
#修改加密方式，以使navicat可以连接
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
#刷新以使设置生效
FLUSH PRIVILEGES;
```

