---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 一、Proxy

```js
let obj = {}

let proxyObj = new Proxy(obj, {})

proxyObj.a = 1
proxyObj.fn = function() {
  console.log("it is a function")
}

console.log(proxyObj.a) // 1
console.log(obj.a) // 1
console.log(obj.fn()) // it is a function
```

### 数据拦截

```js
const isObject = (val) => typeof val == "object" && val != null
const hasOwn = (target, key) =>
  Object.prototype.hasOwnProperty.call(target, key)
const hasChanged = (newValue, oldValue) => newValue !== oldValue

function createGetter() {
  return function get(target, key) {
    const res = Reflect.get(target, key)
    console.log("用户对这个对象取值了", res, target, key)
    if (isObject(res)) {
      return reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function set(target, key, value, reactive) {
    const hadKey = hasOwn(target, key)
    const oldValue = target[key]
    const result = Reflect.set(target, key, value, reactive)
    if (!hadKey) {
      console.log("属性的新增操作", target, key)
    } else if (hasChanged(value, oldValue)) {
      console.log("修改操作", target, key)
    }
    return result
  }
}
const get = createGetter()
const set = createSetter()
const mutableHandler = {
  get,
  set,
}

function reactive(target) {
  return createReactiveObject(target, mutableHandler)
}

function createReactiveObject(target, baseHandler) {
  if (!isObject(target)) {
    return target
  }
  const observed = new Proxy(target, baseHandler)
  return observed
}

const state = reactive({
  name: "aaa",
  age: 11,
  arr: [1, 2, 3],
})
let a = state.arr[0]
state.arr.push(1)
```
