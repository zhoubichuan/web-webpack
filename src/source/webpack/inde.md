---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# Webpack源码整体结构
## entry-options
option初始化，创建compiler、compilation对象、初始化webpack参数等
### 创建compiler
### 创建compilation对象
### 初始化webpack参数
## compiler
开始编译，主要是加载入口文件，添加入口module
## make
分析入口文件创建模块对象，主要做模块的解析，获取当前模块的request、loaders、源码等信息
## build-module
构建模块
## after-compile
完成所有模块构建，结束编译过程
## emit
Compiler开始输出生成assets，插件有最后的机会修改assets
## after-emit
输出完成
