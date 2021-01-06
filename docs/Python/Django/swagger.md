---
title: swagger
tags:
  - swagger
---

### swagger概述
>Django REST Framework的Swagger / OpenAPI文档生成器

[swagger参考](https://marcgibbons.com/django-rest-swagger/)

[django-rest-framework参考](https://www.django-rest-framework.org/tutorial/1-serialization/)


### 安装
```python
pip install django-rest-swagger

#加入'rest_framework_swagger'到INSTALLED_APPS在Django设置。

#settings.py

INSTALLED_APPS = [
    ...
    'rest_framework_swagger',
    ...
]

#urls.py

from django.conf.urls import url
from rest_framework_swagger.views import get_swagger_view

schema_view = get_swagger_view(title='Pastebin API')

urlpatterns = [
    url(r'^swagger$',schema_view)
]
```

### 可能会遇到的错误
>'staticfiles' is not a registered tag library. Must be one of:

{% load staticfiles %}
改成
{% load static %}


[解决方案参考](https://yuchi.blog.csdn.net/article/details/104195789)

