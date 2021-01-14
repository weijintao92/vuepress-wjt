---
title: 修改滚动条（overflow）样式
tags:
  - 滚动条
  - overflow
---

### 修改滚动条（overflow）样式
```css
/*滚动条bai整体*/
::-webkit-scrollbar{
width:14px; /*滚动条宽度*/
}
/*滚动条按钮*/
::-webkit-scrollbar-button {
}
::-webkit-scrollbar-track{
background-color:#F3F3F3; /*滑道全部*/
}
::-webkit-scrollbar-track-piece{
background-color:#F3F3F3; /*滑道*/
-webkit-border-radius:4px; /*滑道圆角宽度*/
}
::-webkit-scrollbar-thumb{
background-color:#F3F3F3; /*滑动条表面*/
border:solid 1px #C0C0C0; /*滑动条边框*/
border-radius:4px; /*滑动条圆角宽度*/
}
/*横竖滚动条交角*/
::-webkit-scrollbar-corner {
background-color: #F3F3F3;
}
/*横竖滚动条交角图案*/
::-webkit-resizer {
/*background-image: url(/public/img/resizer-inactive.png);*/
background-repeat: no-repeat;
background-position: bottom right;
}
/*鼠标滑过滑动条*/
::-webkit-scrollbar-thumb:hover{
background-color:#F3F3E0;
}
```