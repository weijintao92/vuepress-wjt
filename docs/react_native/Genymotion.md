---
title: Genymotion安装app
tags:
  - Genymotion
  - install
  - 安装
---

# Genymotion安装app
放弃了
Genymotion模拟器使用的是x86架构，在第三方市场上的应用有部分不采用x86这么一种架构，所以在编译的时候不通过，报“APP not installed”，可以下载Genymotion提供的ARM转换工具包，将应用市场中的ARM架构的apk转换成Genymotion可以编译的x86架构；

ARM Translation 下载
https://590m.com/dir/20175339-34355301-deb8ca

解决 Genymotion 下无法安装apk的问题
https://blog.csdn.net/zhf6751134/article/details/77849483?locationNum=5&fps=1&utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-1&spm=1001.2101.3001.4242

```
adb push Genymotion-ARM-Translation.zip /sdcard/Download/

adb shell flash-archive.sh /sdcard/download/Genymotion-ARM-Translation.zip
```










<!-- 评论 -->
<Vssue />
