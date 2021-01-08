---
title: python接受前端传递的参数
tags:
 - params
 - qs
 - request
 - get
 - post
---

### python接受前端传递的参数

### 后端
```python {8-9}
def get_itellyou_software_message(request):
    """
    获取“我告诉你“软件语言版本信息

    传递的参数是
    itellyou_lang_edition 的key
    """
    fk = request.POST.get("fk")
    lk = request.POST.get("lk")
    if fk is None:
        return Response(data="获取传递参数失败！",status=404)
    if request.method == 'POST':  
        serializer = itellyou_software_messageSerializer(itellyou_software_message.objects.filter(father_key=fk,lang_key=lk), many=True)
        return Response(data=serializer.data)
```

### 前端
- 代码
``` vue
import axios from 'axios'
import qs from 'qs'
// 使用vue代理
      axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/Vueget_gitHub_accessToken/',
        data: qs.stringify({
          client_id: this.client_id,
          client_secret: this.client_secret,
          code: this.gitHubCode })
      }).then(re => {
        console.log(re)
      }).catch(error => {
        console.log(error)
      })
    }
```
- qs参考
```cmd
#安装qs
npm i qs
```
>qs是一个负责 `params` 序列化的函数，它会将参数序列号成form-data的格式
[qs-NPM地址](https://www.npmjs.com/package/qs)



<!-- README.md -->
<Vssue />