module.exports = {
  base: '/web-webpack/',
  title: 'webpack笔记',
  description: '择一事终一生,不为繁华易匠心',
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/nprogress': true,
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'web-vue', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: '基础知识',
          items: [{
            text: '一.基础功能',
            link: '/base/function/1.index'
          },
          {
            text: '二.常见配置',
            link: '/base/config/1.打包多页应用',
          },
          {
            text: '三.plugin使用',
            link: '/base/plugin/1.index',
          },
          {
            text: '四.loader使用',
            link: '/base/loader/1.index',
          },
          {
            text: '五.性能优化',
            link: '/base/optimize/1.noParse',
          },
          ]
        },
        {
          text: '高级知识',
          items: [{
            text: '一.loader实现',
            link: '/senior/loader/1.index'
          },
          {
            text: '二.plugin实现',
            link: '/senior/plugin/1.index'
          },
          {
            text: '三.tapable实现',
            link: '/senior/tapable/1.index',
          },
          {
            text: '四.webpack简易实现',
            link: '/senior/write/1.writeByHand',
          }
          ]
        },
        {
          text: '源码知识',
          items: [{
            text: '一.webpack源码解析',
            link: '/source/webpack/1.index'
          }
          ]
        }
        ],
        sidebar: {
          '/base/function/': [
            '1.index',
            '2.build',
            '2.route',
            '3.devenv',
            '4.devserver',
            '5.envconfig',
            '6.loaderconfig',
            '7.处理js语法及校验',
            '7.pluginconfig',
            '8.全局变量引入问题',
          ],
          '/base/config/': [
            '1.打包多页应用',
            '2.sourceMap',
            '3.watch的用法',
            '4.小插件应用',
            '5.webpack跨域问题',
            '6.resolve属性的配置',
            '7.定义环境变量',
            '8.区分不同环境'
          ],
          '/base/plugin/': [
            '1.index',
            '2.plugin',
            '3.document',
            '4.inline',
            '5.auto'
          ],
          '/base/loader/': [
            '1.index',
            '1.loader',
            '2.deploy',
            '3.babel',
            '4.banner',
            '5.file-url',
            '6.less-css',
            '7.css'
          ],
          '/base/optimize/': [
            '1.noParse',
            '2.lgnorePlugin',
            '3.dllPlugin',
            '4.happypack',
            '5.webpack自带优化',
            '6.抽离公共代码',
            '7.懒加载',
            '8.热更新',
            '9.热模块替换',
            '11.optimization'
          ],
          '/senior/loader/': [
            '1.index'
          ],
          '/senior/plugin/': [
            '1.index',
            '2.extend',
            '3.componentCommunication',
            '4.render',
            '5.api',
            '6.form',
            '7.checkBox',
            '8.active',
            '9.alert',
            '10.table',
            '11.tree'
          ],
          '/senior/tapable/': [
            '1.index',
            '2.SyncHook',
            '3.SyncBailHook',
            '4.SyncWaterfallHook',
            '5.SyncLoopHook',
            '6.AsyncParallelHook',
            '7.AsyncParallelBailHook',
            '8.AsyncSeriesHook',
            '9.AsyncSeriesBailHook',
            '10.AsyncSeriesWaterfallHook'
          ],
          '/senior/write/': [
            '1.writeByHand',
            '2.analyse',
            '3.relation',
            '4.ast',
            '5.build',
            '6.loader',
            '7.plugins'
          ],
          '/source/webpack/': [
            '1.index',
            '1.webpack',
            '2.options',
            '3.compiler',
            '4.plugin',
            '5.compiler',
            '6.run',
            '7.compile',
            '8.compilation',
            '9.make',
            '10._addModuleChain',
            '11.seal',
            '12.chunk',
            '13.onCompiled'
          ]
        }
      }
    }
  },
}