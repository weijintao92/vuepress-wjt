---
title: 共享打印机常见问题处理
tags:
  - shared printer
---

### 共享打印机常见问题处理

### 批处理添加共享打印机
```bat
@echo off

echo 添加网络打印机
echo 等待….
rem 只需替换以下ip、打印机名、帐号、密码为具体名称即可
net use \\192.168.25.236 /delete /y
rem 删除打印机
rundll32 printui.dll,PrintUIEntry /n"\\192.168.25.236\HP LaserJet Professional P1108" /dn /q
echo 删除打印机成功！

rem 添加打印机
net use \\192.168.25.236 /user:administrator 123 
rundll32 printui.dll,PrintUIEntry /in /n "\\192.168.25.236\HP LaserJet Professional P1108"   
rundll32 printui.dll,PrintUIEntry /y /n "\\192.168.25.236\HP LaserJet Professional P1108" 

echo 添加打印机成！
pause

```

### 参考 


[批处理自动安装打印机](https://www.cnblogs.com/fangbo/archive/2009/07/31/1535849.html)

[批处理自动安装打印机](https://blog.51cto.com/kfyxw/1166226)

[rundll32-printui微软官方文档](https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/rundll32-printui)




