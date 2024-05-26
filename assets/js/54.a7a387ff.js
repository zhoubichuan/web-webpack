(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{415:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"一-loader的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-loader的实现"}},[s._v("#")]),s._v(" 一.loader的实现")]),s._v(" "),a("h2",{attrs:{id:"_1-loader-是一个函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-loader-是一个函数"}},[s._v("#")]),s._v(" 1.loader 是一个函数")]),s._v(" "),a("p",[s._v("先看一个简单的例子：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" marked "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"marked"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" laoderUtils "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"laoder-utils"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("markdown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用loaderUtils来获取loader的配置项")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// this 是构建运行时的一些上下文信息")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" loaderUtils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("getOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cacheable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 把配置项直接传递给marked")]),s._v("\n  marked"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用marked处理marked字符串，然后返回")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("marked")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("markdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("这是"),a("code",[s._v("markdown-loader")]),s._v("的实现代码，笔者添加了一些代码说明，看上去很简单。")]),s._v(" "),a("p",[s._v("markdown-loader 本身仅仅只是一个函数，接收模块代码的内容，然后返回代码内容转化后的结果。webpack loader 的本质就是这样的一个函数。")]),s._v(" "),a("p",[s._v("上述代码中用到"),a("code",[s._v("loader-utils")]),s._v("是 webpack 官方提供的一个工具库，提供 loader 处理是需要用到的一些工具方法，例如用来解析上下文 loader 配置项的"),a("code",[s._v("getOptions")]),s._v("。")]),s._v(" "),a("p",[s._v("代码中还用到了"),a("code",[s._v("marked")]),s._v(",marked 是一个用于解析 Markdown 的类库，可以把 Markedown 转为 HTML，markdown-loader 的核心功能就是用它实现的。基本上，webpack loader 都是基于一个实现核心功能的类库来开发的，例如"),a("code",[s._v("sass-loader")]),s._v("是基于"),a("code",[s._v("node-sass")]),s._v("实现的，等等。")]),s._v(" "),a("h2",{attrs:{id:"_2-开始一个-laoder-的开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-开始一个-laoder-的开发"}},[s._v("#")]),s._v(" 2.开始一个 laoder 的开发")]),s._v(" "),a("p",[s._v("我们可以在 webpack 配置中直接使用路径来指定使用本地 loader，或者在 loader 路径解析中加入本地开发 loader 的目录。看看配置例子:")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("rules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\.js$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("exclude")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("loader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./loader/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//使用本地的 ./loader/index.js作为loader")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在resolveLoader中添加本地开发的loaders存放路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 如果你同时需要开发多个laoder，那么这个方式会更加适合你")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("resolveLoader")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("modules")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'loaders'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("h2",{attrs:{id:"_3-复杂一点的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-复杂一点的情况"}},[s._v("#")]),s._v(" 3.复杂一点的情况")]),s._v(" "),a("p",[s._v("当我们选择上述任意一种方法，并且做好相应的准备后，我们就可以开始写 loader 的代码了，然后通过执行 webpack 构建来查看 loader 是否正常工作。")]),s._v(" "),a("p",[s._v("上面已经提到，loader 是一个函数，接收代码内容，然后返回处理结果，有一些 laoder 的实现基本上就是这么简单，但是有时候遇见相对复杂一点的情况。")]),s._v(" "),a("p",[s._v("首先 loader 函数接受的参数是有三个的："),a("code",[s._v("content, map, meta")]),s._v("。"),a("code",[s._v("content")]),s._v("是模块内容，但不仅限于字符串，也可以是 buffer，例如一些图片或者字体等文件。"),a("code",[s._v("map")]),s._v("则是 sourcemap 对象，"),a("code",[s._v("meta")]),s._v("是其他的一些元数据。loader 函数单纯返回一个值，这个值是当成 content 去处理，但如果你需要返回 sourcemap 对象或者 meta 数据，甚至是抛出一个 laoder 异常给 webpack 是，你需要使用"),a("code",[s._v("this.callback(err, content, map, meta)")]),s._v("来传递这些数据。")]),s._v(" "),a("p",[s._v("我们日常使用 webpack,有时候会把多个 laoder 串起来一起使用，最常见的莫过于 css-loader 和 style-loader 了。当我们皮遏制"),a("code",[s._v("use:['bar-loader', 'foo-loader']")]),s._v("时，loader 是以相反的顺序执行的，即先跑 foo-loader，再跑 bar-loader。这一部分内容在配置 loader 的小节中有提及，这里再以开放 loader 的角度稍稍强调下，搬运官网的一段说明：")]),s._v(" "),a("ul",[a("li",[s._v("最后的 loader 最早调用，传入原始的资源内容（可能是代码，也可能是二进制文件，用 buffer 处理）")]),s._v(" "),a("li",[s._v("第一个 laoder 最后调用，期望返回时 JS 代码和 sourcemap 对象")]),s._v(" "),a("li",[s._v("中间 laoder 执行时，传入的是上一个 loader 执行的结果")])]),s._v(" "),a("p",[s._v("虽然有多个 loader 时遵循这样的执行顺序，但对于大多数单个 laoder 来说无须感知这一点，只负责处理接受的内容就好。")]),s._v(" "),a("p",[s._v("还有一个场景是 loader 中的异步处理。有一些 loader 在执行过程中坑你依赖外部 I/O 的结果，导致他必须使用异步的方式来处理，这个使用需要咋 loader 是使用"),a("code",[s._v("this.async()")]),s._v("来标识该 loader 是异步处理的，然后使用"),a("code",[s._v("this.callback")]),s._v("来返回 laoder 处理结果。")]),s._v(" "),a("h2",{attrs:{id:"_4-pitching-loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-pitching-loader"}},[s._v("#")]),s._v(" 4.Pitching loader")]),s._v(" "),a("p",[s._v("我们可以使用"),a("code",[s._v("pitch")]),s._v("来跳过 loader 的处理，"),a("code",[s._v("pitch")]),s._v("方法是 loader 额外实现的一个函数，看下官方文档中的一个例子：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("exports")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("someSyncOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//pitch的缘故，这里的data.value为42")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 挂在loader函数上的pitch函数")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("pitch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("remainingRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" precedingRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("value "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("42")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们可以简单把"),a("code",[s._v("pitch")]),s._v("理解为 loader 的前置钩子，它可以使用"),a("code",[s._v("this.data")]),s._v("来传递数据，然后具备跳过剩余 loader 的能力。")]),s._v(" "),a("p",[s._v("在一个"),a("code",[s._v("use")]),s._v("配置中所有 loader 执行前会先执行它们对应的"),a("code",[s._v("pitch")]),s._v(",并且与 loader 执行顺序是相反的，如：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo-loader'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行bar-loader的pitch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行foo-loader的pitch")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// bar-loader")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// foo-loader")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("其中，当 pitch 中返回了结果，那么执行顺序会回过头来，跳掉剩余的 loader，如"),a("code",[s._v("bar-laoder")]),s._v("的 pitch 返回结果了，那么执行剩下")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 执行bar-loader 的pitch")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可能只有比较少的 loader 会用到 pitch 这个功能，但有的时候需要考虑实现 loader 功能需求时把 pitch 纳入范围会有不一样的灵感，它可以让你更加灵活地去定义 loader 的执行。")]),s._v(" "),a("h2",{attrs:{id:"_5-loader-上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-loader-上下文"}},[s._v("#")]),s._v(" 5.loader 上下文")]),s._v(" "),a("p",[s._v("上述提及的一些代码会使用到"),a("code",[s._v("this")]),s._v(",即 loader 函数的上下文，包括"),a("code",[s._v("this.callback")]),s._v("和"),a("code",[s._v("this.data")]),s._v("等。可以这样简单地理解:"),a("code",[s._v("this")]),s._v("是作为 laoder 运行时数据和调用犯法的补充载体。")]),s._v(" "),a("p",[s._v("laoder 上下文有很多运行时的信息，如"),a("code",[s._v("this.context")]),s._v("和"),a("code",[s._v("this.request")]),s._v("等等，而最重要的方法莫过于"),a("code",[s._v("this.callback")]),s._v("和"),a("code",[s._v("this.async")]),s._v("，关于上下文这里不做展开，官方文档有比较详细的说明。")])])}),[],!1,null,null,null);a.default=n.exports}}]);