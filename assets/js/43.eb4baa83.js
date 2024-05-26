(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{404:function(s,a,n){"use strict";n.r(a);var e=n(7),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"抽离css样式文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽离css样式文件"}},[s._v("#")]),s._v(" 抽离css样式文件")]),s._v(" "),a("h2",{attrs:{id:"安装-mini-css-extract-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-mini-css-extract-plugin"}},[s._v("#")]),s._v(" 安装 mini-css-extract-plugin")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i mini-css-extract-plugin -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"webpack-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nlet MiniCssExtractPlugin = require("mini-css-extract-plugin");\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "[name].[hash:8].js"\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n      filename: "index.html",\n      minify: {\n        removeAttributeQuotes: true,\n        collapseWhitespace: true\n      },\n      hash: true\n    }),\n    new MiniCssExtractPlugin({\n      filename: "main.css"\n    })\n  ],\n  module: {\n    rules: [\n      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },\n      {\n        test: /\\.less$/,\n        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]\n      }\n    ]\n  }\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br")])]),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("dis 目录下有单独的 main.css 文件")]),s._v(" "),a("h2",{attrs:{id:"添加浏览器前缀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加浏览器前缀"}},[s._v("#")]),s._v(" 添加浏览器前缀")]),s._v(" "),a("p",[s._v("postcss-loader autoprefixer")]),s._v(" "),a("h2",{attrs:{id:"src-index-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-index-less"}},[s._v("#")]),s._v(" src/index.less")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("body {\n  div {\n    border: 1px solid black;\n    transform: translate(50%);\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i postcss-loader autoprefixer -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"src-postcss-config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#src-postcss-config-js"}},[s._v("#")]),s._v(" src/postcss.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('module.exports = {\n  plugins: [require("autoprefixer")]\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"webpack-config-js-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-2"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('const path = require("path");\nconst HtmlWebpackPlugin = require("html-webpack-plugin");\nlet MiniCssExtractPlugin = require("mini-css-extract-plugin");\nmodule.exports = {\n  mode: "development",\n  entry: "./src/index.js",\n  output: {\n    path: path.resolve(__dirname, "dist"),\n    filename: "[name].[hash:8].js"\n  },\n  plugins: [\n    new HtmlWebpackPlugin({\n      template: "./src/index.html",\n      filename: "index.html",\n      minify: {\n        removeAttributeQuotes: true,\n        collapseWhitespace: true\n      },\n      hash: true\n    }),\n    new MiniCssExtractPlugin({\n      filename: "main.css"\n    })\n  ],\n  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]\n      },\n      {\n        test: /\\.less$/,\n        use: [\n          MiniCssExtractPlugin.loader,\n          "css-loader",\n          "postcss-loader",\n          "less-loader"\n        ]\n      }\n    ]\n  }\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br")])]),a("h2",{attrs:{id:"运行-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行-2"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以得到加浏览器前缀的 main.css")]),s._v(" "),a("h2",{attrs:{id:"实现-css-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-css-压缩"}},[s._v("#")]),s._v(" 实现 css 压缩")]),s._v(" "),a("p",[s._v("optimize-css-assels-webpack-plugin")]),s._v(" "),a("h2",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm i optimize-css-assels-webpack-plugin -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"实现-js-压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-js-压缩"}},[s._v("#")]),s._v(" 实现 js 压缩")]),s._v(" "),a("p",[s._v("optimize-css-assels-webpack-plugin")]),s._v(" "),a("h2",{attrs:{id:"安装-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-3"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cnpm i uglifyjs-webpack-plugin -D\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"webpack-config-js-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js-3"}},[s._v("#")]),s._v(" webpack.config.js")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('...\nlet OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");\nlet UglifyJsPlugin = require("uglifyjs-webpack-plugin");\nmodule.exports = {\n  optimization: {\n    minimizer: [\n      new UglifyJsPlugin({\n        cache: true,\n        parallel: true,\n        sourcMap: true\n      }),\n      new OptimizeCssAssetsPlugin()\n    ]\n  },\n  ...\n};\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/zhoubichuan/frontend-note/tree/master/3.dev/3.scaffolding/1.webpack/1.base/5.style",target:"_blank",rel:"noopener noreferrer"}},[s._v("完整代码"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);