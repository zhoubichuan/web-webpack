module.exports = {
  // 基础配置
  base: '/web-webpack/', // 部署站点的基础路径
  description: '山不厌高，海不厌深',
  plugins: {
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    '@vuepress/medium-zoom': true,
    '@vuepress/nprogress': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
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
  locales: {
    // 默认标题
    '/': {
      title: 'webpack笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
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
            text: '三.plugin',
            link: '/base/plugin/1.index',
          },
          {
            text: '四.loader',
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
            text: '一.loader的实现',
            link: '/senior/loader/1.index'
          },
          {
            text: '二.plugin的实现',
            link: '/senior/plugin/1.index'
          },
          {
            text: '三.tapable的实现',
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
            '8.workflow'
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
            '5.compiler对象',
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