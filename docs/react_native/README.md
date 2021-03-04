---
title: React Native
tags:
  - React Native
---

# React Native笔记

###  安装脚手架
npm install -g react-native-cli

```npm
cd AwesomeProject
yarn android
# 或者
yarn react-native run-android

npx react-native run-android
#查看设备
adb devices  
```



###  Genymotion报错
[react-native启动时红屏报错：Unable to load script.Make sure you're either running a metro server or that ....](https://www.cnblogs.com/shizk/p/11189978.html)
>
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res 

### 打包APK
[打包APK](https://reactnative.cn/docs/signed-apk-android)
[keytool 错误: java.io.FileNotFoundException: MyAndroidKey.keystore (拒绝访问).](https://blog.csdn.net/hssdw25172008/article/details/8499423)

.\keytool -genkeypair -v -keystore d:/my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


Warning:
JKS 密钥库使用专用格式。建议使用 "keytool -importkeystore -srckeystore d:/my-release-key.keystore -destkeystore d:/my-release-key.keystore -deststoretype pkcs12" 迁移到行业标准格式 PKCS12。


### React Native Component ExceptionElement
![An image](./Component_Excepthon.png)


- 在引入组件时不要 加 {}
#### 参考
[React Native Component Exception - Element Type is invalid: expected string…got undefined](https://stackoverflow.com/questions/65100627/react-native-component-exception-element-type-is-invalid-expected-string-go)



