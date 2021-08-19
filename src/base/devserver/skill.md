---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---
# 配置开发服务器
- contentBase 配置开发服务运行时的文件根目录
- host：开发服务器监听的主机地址
- compress 开发服务器是否启动gzip等压缩
- port：开发服务器监听的端口
```js
devServer:{
  contentBase:path.resolve(__dirname,'dist'),
  host:'localhost',
  compress:true,
  port:8080
}
```
```js
"scripts": {
  "build": "webpack",
  "dev": "webpack-dev-server --open "
}
```