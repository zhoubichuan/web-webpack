(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{382:function(s,a,n){"use strict";n.r(a);var e=n(9),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"抽离css样式文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抽离css样式文件"}},[s._v("#")]),s._v(" 抽离css样式文件")]),s._v(" "),n("h2",{attrs:{id:"安装-mini-css-extract-plugin"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-mini-css-extract-plugin"}},[s._v("#")]),s._v(" 安装 mini-css-extract-plugin")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm i mini-css-extract-plugin -D\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"webpack-config-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nlet MiniCssExtractPlugin = require("mini-css-extract-plugin");\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "[name].[hash:8].js"\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n      filename: "index.html",\n      minify: {\n        removeAttributeQuotes: true,\n        collapseWhitespace: true\n      },\n      hash: true\n    }),\n    new MiniCssExtractPlugin({\n      filename: "main.css"\n    })\n  ],\n  module: {\n    rules: [\n      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },\n      {\n        test: /\\.less$/,\n        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]\n      }\n    ]\n  }\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br")])]),n("h2",{attrs:{id:"运行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("dis 目录下有单独的 main.css 文件")]),s._v(" "),n("h2",{attrs:{id:"添加浏览器前缀"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加浏览器前缀"}},[s._v("#")]),s._v(" 添加浏览器前缀")]),s._v(" "),n("p",[s._v("postcss-loader autoprefixer")]),s._v(" "),n("h2",{attrs:{id:"src-index-less"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-index-less"}},[s._v("#")]),s._v(" src/index.less")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("body {\n  div {\n    border: 1px solid black;\n    transform: translate(50%);\n  }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm i postcss-loader autoprefixer -D\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"src-postcss-config-js"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#src-postcss-config-js"}},[s._v("#")]),s._v(" src/postcss.config.js")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('module.exports = {\n  plugins: [require("autoprefixer")]\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"webpack-config-js-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-2"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nlet MiniCssExtractPlugin = require("mini-css-extract-plugin");\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "[name].[hash:8].js"\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n      filename: "index.html",\n      minify: {\n        removeAttributeQuotes: true,\n        collapseWhitespace: true\n      },\n      hash: true\n    }),\n    new MiniCssExtractPlugin({\n      filename: "main.css"\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          "css-loader",\n          "postcss-loader",\n          "less-loader"\n        ]\n      }\n    ]\n  }\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br")])]),n("h2",{attrs:{id:"运行-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行-2"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("npm run build\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以得到加浏览器前缀的 main.css")]),s._v(" "),n("h2",{attrs:{id:"实现-css-压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现-css-压缩"}},[s._v("#")]),s._v(" 实现 css 压缩")]),s._v(" "),n("p",[s._v("optimize-css-assels-webpack-plugin")]),s._v(" "),n("h2",{attrs:{id:"安装-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cnpm i optimize-css-assels-webpack-plugin -D\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"实现-js-压缩"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#实现-js-压缩"}},[s._v("#")]),s._v(" 实现 js 压缩")]),s._v(" "),n("p",[s._v("optimize-css-assels-webpack-plugin")]),s._v(" "),n("h2",{attrs:{id:"安装-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cnpm i uglifyjs-webpack-plugin -D\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"webpack-config-js-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-3"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('...\nlet OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");\nlet UglifyJsPlugin = require("uglifyjs-webpack-plugin");\nmodule.exports = {\n  optimization: {\n    minimizer: [\n      new UglifyJsPlugin({\n        cache: true,\n        parallel: true,\n        sourcMap: true\n      }),\n      new OptimizeCssAssetsPlugin()\n    ]\n  },\n  ...\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[n("a",{attrs:{href:"https://github.com/zhoubichuan/frontend-note/tree/master/3.dev/3.scaffolding/1.webpack/1.base/5.style",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整代码"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);