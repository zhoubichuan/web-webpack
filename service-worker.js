/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7cf1a7fef6bd0a8318a886aaa85a55d"
  },
  {
    "url": "assets/css/0.styles.bb649629.css",
    "revision": "403214d5e6cd2b7c27de3b54298f3e70"
  },
  {
    "url": "assets/img/1.3.ec0e67c7.png",
    "revision": "ec0e67c7968d600985a429fdef9a143e"
  },
  {
    "url": "assets/img/1.5deffe87.png",
    "revision": "5deffe87a6a37f315484e75df33d5294"
  },
  {
    "url": "assets/img/111.949fb08f.png",
    "revision": "949fb08f470de4d2eb9b4253088f795d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.169abc1b.js",
    "revision": "64593481beb29a9609872e212e9ac159"
  },
  {
    "url": "assets/js/11.8da21d7b.js",
    "revision": "7a767a58e76f4062f68302db1fff9e14"
  },
  {
    "url": "assets/js/12.7ba4a3c5.js",
    "revision": "14ed21339d4c7efb69900b78e6610af1"
  },
  {
    "url": "assets/js/13.4fd79a9b.js",
    "revision": "e7eed339015c0268b6ccccefbe888fd7"
  },
  {
    "url": "assets/js/14.bf3b2437.js",
    "revision": "8563b66dffc9255476f51bf03bd9004e"
  },
  {
    "url": "assets/js/15.6b6f98ba.js",
    "revision": "dd4c6d566ae1886995a9e2408a33ce8a"
  },
  {
    "url": "assets/js/16.84158b52.js",
    "revision": "5cb00d5955cad0a444268cafcdbd37b5"
  },
  {
    "url": "assets/js/17.b80a5f49.js",
    "revision": "7cffbe7a11a5037ba209af662f591e19"
  },
  {
    "url": "assets/js/18.71a22b7f.js",
    "revision": "ec4ca77687051ab9fab0f92041fb287f"
  },
  {
    "url": "assets/js/19.14909abe.js",
    "revision": "ae8f001ed92b783d49538904c2a7cfea"
  },
  {
    "url": "assets/js/2.2ebcf086.js",
    "revision": "acca5dad813450eb1f84ad26ee17f5a1"
  },
  {
    "url": "assets/js/20.6841aff3.js",
    "revision": "0fed4a7179b32889225c78cd396f91e0"
  },
  {
    "url": "assets/js/21.d19d80e9.js",
    "revision": "4f69f2d927efe4544dcaeb40774fc5dd"
  },
  {
    "url": "assets/js/22.a8574a6f.js",
    "revision": "e72fd2e010731e3be7c1e9e05c5909d5"
  },
  {
    "url": "assets/js/23.c588a3e7.js",
    "revision": "e41e0512360756d9d32c4394b7c40e86"
  },
  {
    "url": "assets/js/24.a9328ac5.js",
    "revision": "7d2af848cb5b5ed431f3ca84706f902b"
  },
  {
    "url": "assets/js/25.b8a1a066.js",
    "revision": "bc69db292fb61c6dcba4d42b04f2e2e4"
  },
  {
    "url": "assets/js/26.700b2a4b.js",
    "revision": "2e0dfbc2aa02db70a1ce11d9808d2b1f"
  },
  {
    "url": "assets/js/27.889ccf51.js",
    "revision": "a1770a527abdc2aee2bbc6a6a76a290a"
  },
  {
    "url": "assets/js/28.98d4bcd9.js",
    "revision": "97952f804b42acfa0b48ac728829823d"
  },
  {
    "url": "assets/js/29.40c77bf8.js",
    "revision": "651ab4b471dd2088f453c9fc99885d7f"
  },
  {
    "url": "assets/js/3.2b568e75.js",
    "revision": "7ac54c830631080481f8f8104aa6f3a5"
  },
  {
    "url": "assets/js/30.c61efe3a.js",
    "revision": "96215cff7ff75067f610959aeeb83d24"
  },
  {
    "url": "assets/js/31.f147161b.js",
    "revision": "4fa10d1d6690b1c3558e33ed37c80dea"
  },
  {
    "url": "assets/js/32.8a54f762.js",
    "revision": "d50b8de116ac1bc689478d6c833400f0"
  },
  {
    "url": "assets/js/33.74be6dc6.js",
    "revision": "37cd53a962712f06c3fec6e8957b6714"
  },
  {
    "url": "assets/js/34.2004fb06.js",
    "revision": "756993df4409ed5e90359ff698dbbd6a"
  },
  {
    "url": "assets/js/35.35e3918c.js",
    "revision": "5d3b0a6ffe9d5f10ccb1feadfd636662"
  },
  {
    "url": "assets/js/36.242d8efb.js",
    "revision": "d0bff473e67d0ed1b62a7e138661ace4"
  },
  {
    "url": "assets/js/37.332bdc4c.js",
    "revision": "c5e4d58d1245a1b8d834a350b7ca77a7"
  },
  {
    "url": "assets/js/38.4ca06412.js",
    "revision": "ea5b5aacaf38a233523ca56d6bd648af"
  },
  {
    "url": "assets/js/39.e9e48aee.js",
    "revision": "916ae6717ad9392736eeb5562712a064"
  },
  {
    "url": "assets/js/4.f1cbadda.js",
    "revision": "55fefd625ecda90c9bf5621e477aac05"
  },
  {
    "url": "assets/js/40.5ec4e3c7.js",
    "revision": "1195e1b010ec2255384b9659450e32b7"
  },
  {
    "url": "assets/js/41.80f08f9b.js",
    "revision": "002ceb272b339ef1695eecfbd5c6edd1"
  },
  {
    "url": "assets/js/42.da226667.js",
    "revision": "48a0cd8d77dc030513e43b7e47305498"
  },
  {
    "url": "assets/js/43.33557115.js",
    "revision": "2d4c7102c547af7cb917a94d116c3479"
  },
  {
    "url": "assets/js/44.e968bdf4.js",
    "revision": "2e1877c322ddb9c5a2c14614441e8ff6"
  },
  {
    "url": "assets/js/45.f4170043.js",
    "revision": "8514842f1a2a075ff1ecf31cc2aeba0d"
  },
  {
    "url": "assets/js/46.1750288f.js",
    "revision": "5bfcb97b873357a1df3e2aace95fe998"
  },
  {
    "url": "assets/js/47.ce260e35.js",
    "revision": "ab2e04496401e9081a20e6eb076acee1"
  },
  {
    "url": "assets/js/48.f64df3fe.js",
    "revision": "81065a4abcbc1408031e3461d7f7bbff"
  },
  {
    "url": "assets/js/49.8a61b7b2.js",
    "revision": "74c8d4fbf090d169b64882f35f771261"
  },
  {
    "url": "assets/js/5.7e308b63.js",
    "revision": "5e56660558fb52efdaeb1ee7387b02db"
  },
  {
    "url": "assets/js/50.974625a1.js",
    "revision": "d2fbd4322857ee2fdab55b171abceadd"
  },
  {
    "url": "assets/js/51.47707fb7.js",
    "revision": "5f8e9836d2c8369ccdf5aa808bb35a04"
  },
  {
    "url": "assets/js/52.01ca0713.js",
    "revision": "cddc8618a13999d93619f9cb98e3a4aa"
  },
  {
    "url": "assets/js/53.ee53f14f.js",
    "revision": "3b9776daf3615f56ea62a0113ee46b33"
  },
  {
    "url": "assets/js/54.42523afd.js",
    "revision": "99c7669dfd529b0ba36bf43c964ca348"
  },
  {
    "url": "assets/js/55.8e5218d1.js",
    "revision": "6b0679cd7203c094a2ffb107b6e05a2b"
  },
  {
    "url": "assets/js/56.ec9a9a93.js",
    "revision": "15cc60fd411a6f92e381d7260cf072a0"
  },
  {
    "url": "assets/js/57.21751c9a.js",
    "revision": "d0b89849f1ce0e9e6391e5bdb4401425"
  },
  {
    "url": "assets/js/58.96813d4c.js",
    "revision": "ba327c67e0aa7f128839942fcdc85a85"
  },
  {
    "url": "assets/js/59.c975ef38.js",
    "revision": "b1f45b6f786ccab5d45e5531305fc97f"
  },
  {
    "url": "assets/js/6.860078f2.js",
    "revision": "5e8023fc7f3fc836dbe81dc34ee7d140"
  },
  {
    "url": "assets/js/60.b7e6e91f.js",
    "revision": "e11c3519ed4676b64a6aa0d57e3c85c9"
  },
  {
    "url": "assets/js/61.80f6b8bb.js",
    "revision": "f93aec78237c4faa7786e98aa0bab556"
  },
  {
    "url": "assets/js/62.19ced108.js",
    "revision": "acb099b0641bbc6c8009c1bc274d6616"
  },
  {
    "url": "assets/js/63.c7fb69cf.js",
    "revision": "8a9591be2bb2f2a83ce2ae26c4dfd797"
  },
  {
    "url": "assets/js/64.148723e1.js",
    "revision": "081746030f52e771724a30087710ba37"
  },
  {
    "url": "assets/js/65.16247907.js",
    "revision": "a6a9ec25700b30e176cc6b6294c90502"
  },
  {
    "url": "assets/js/66.258e3a4d.js",
    "revision": "129fae2b242bac2b91f9bb8d4a30fdff"
  },
  {
    "url": "assets/js/67.2ec9578c.js",
    "revision": "102a91551a31bd8183265fc1f15a757f"
  },
  {
    "url": "assets/js/68.6e6dce31.js",
    "revision": "0a1b0c034b44c696c841bb43b638091c"
  },
  {
    "url": "assets/js/69.3b02c111.js",
    "revision": "7f1953a6a042346fe24729d146f26a55"
  },
  {
    "url": "assets/js/7.a948bd60.js",
    "revision": "ca2291e14a8cede314d9f1110b98d471"
  },
  {
    "url": "assets/js/70.75a67480.js",
    "revision": "e21e883b1279f4a8710a2b2d9220444b"
  },
  {
    "url": "assets/js/71.bed0afc4.js",
    "revision": "410634b7ca5b198a93a7e3bae178b693"
  },
  {
    "url": "assets/js/72.59c35efc.js",
    "revision": "dcabc4d4b1b08cd3bd600b583fc89d04"
  },
  {
    "url": "assets/js/73.16299950.js",
    "revision": "2c225826cf896d3707f54283bfa54be7"
  },
  {
    "url": "assets/js/74.78d67d03.js",
    "revision": "e18a72a4192b6ab31ec664a31eec8e6f"
  },
  {
    "url": "assets/js/75.31898939.js",
    "revision": "62d27093d65db9a56f04c1cd1ef51a8b"
  },
  {
    "url": "assets/js/76.c61867cf.js",
    "revision": "ec853b9ebb366c50b04586c5b51002b9"
  },
  {
    "url": "assets/js/77.9fe88697.js",
    "revision": "496102ae6dce7221474566390dfe053f"
  },
  {
    "url": "assets/js/78.0548b960.js",
    "revision": "78535d516359bd4b18ef069474c8415f"
  },
  {
    "url": "assets/js/79.e8886b0b.js",
    "revision": "637de11df88e45dcd06045333d893933"
  },
  {
    "url": "assets/js/8.b38b914e.js",
    "revision": "85dd627a36f32cb434d3040a795c46db"
  },
  {
    "url": "assets/js/80.ddba0e65.js",
    "revision": "ac69475da3ab3ac95f803584d1bec9b6"
  },
  {
    "url": "assets/js/81.f70de80a.js",
    "revision": "e0595bbdfd798505fd82035555730f94"
  },
  {
    "url": "assets/js/82.68445a21.js",
    "revision": "8cc718798a050679fc9fd544467c1b8c"
  },
  {
    "url": "assets/js/83.96b03680.js",
    "revision": "977364fb4b83a5d373ce01969d4ea295"
  },
  {
    "url": "assets/js/84.6b4b33c7.js",
    "revision": "22e53f2d77ac6b0d8eb70b80e7769d7d"
  },
  {
    "url": "assets/js/85.5306806d.js",
    "revision": "c2f69989185b40a14a0134be30faf101"
  },
  {
    "url": "assets/js/86.11bb3ed5.js",
    "revision": "f8cd73620a3c632c057edb75a7ab9bea"
  },
  {
    "url": "assets/js/87.79749780.js",
    "revision": "4882df6c81bc3496f86c80556fd6849f"
  },
  {
    "url": "assets/js/88.eb0cd6c3.js",
    "revision": "c46d5befc50f0cf75758e9e9ae6b4380"
  },
  {
    "url": "assets/js/89.9da03fdd.js",
    "revision": "aca54d1750fd92b4d4e2579a69c8857f"
  },
  {
    "url": "assets/js/9.72ea44a4.js",
    "revision": "ae5c465f7740a3b3f0bbfb823f6173dd"
  },
  {
    "url": "assets/js/90.2a7562c6.js",
    "revision": "383fe6ac133ecfade6ea8d7fad5343ff"
  },
  {
    "url": "assets/js/91.901cf681.js",
    "revision": "6fe8eefa2dff945966385b1b395ec1ff"
  },
  {
    "url": "assets/js/92.0d35e88c.js",
    "revision": "1c1c6c382acc6fba24f529730a57320b"
  },
  {
    "url": "assets/js/93.43e72bf1.js",
    "revision": "44b17cd6a9d59aa58ec279415f0c799c"
  },
  {
    "url": "assets/js/94.dff539d6.js",
    "revision": "869e69d1a477e2111c20a2b3f5e047c1"
  },
  {
    "url": "assets/js/95.355aab1d.js",
    "revision": "1268954be0e79d2212801769bab1d5e1"
  },
  {
    "url": "assets/js/96.5de25e90.js",
    "revision": "5519050d617dbadb82d5b0d54b4963c0"
  },
  {
    "url": "assets/js/97.ba284d3c.js",
    "revision": "1f64f6d79205205bfd9825c28e839f17"
  },
  {
    "url": "assets/js/app.43922103.js",
    "revision": "151d0e061ae9910833ca1e3c475a59d7"
  },
  {
    "url": "base/config/1.打包多页应用.html",
    "revision": "61ca7477db5800df61d33b86eaf5794d"
  },
  {
    "url": "base/config/2.sourceMap.html",
    "revision": "77f775538d5b9d88c0caa3d4f12b1f73"
  },
  {
    "url": "base/config/3.watch的用法.html",
    "revision": "e878b6bfb017b7d9861d229157768a53"
  },
  {
    "url": "base/config/4.小插件应用.html",
    "revision": "ba1a5b042204413fa48befe917f8489a"
  },
  {
    "url": "base/config/5.webpack跨域问题.html",
    "revision": "93573243491b9e4069a752c81fcf9c04"
  },
  {
    "url": "base/config/6.resolve属性的配置.html",
    "revision": "4b318f8ff84d01f566bc1cdc09a74c59"
  },
  {
    "url": "base/config/7.定义环境变量.html",
    "revision": "dfeb1ed8190106edc26e3d32cf69a48a"
  },
  {
    "url": "base/config/8.区分不同环境.html",
    "revision": "2d8865caeb289c8a6f7f65f10dad3f2c"
  },
  {
    "url": "base/function/1.index.html",
    "revision": "41e043c9bf2eca4bc2dfd97c38b129de"
  },
  {
    "url": "base/function/2.build.html",
    "revision": "4738d17cef6df7032838496b2568862f"
  },
  {
    "url": "base/function/2.route.html",
    "revision": "5dc2735688a964ee167a4e717ef1e761"
  },
  {
    "url": "base/function/3.devenv.html",
    "revision": "4d24db6a1a4bb2d570029983d07b821a"
  },
  {
    "url": "base/function/4.devserver.html",
    "revision": "8371547f0c1c33c3e2855cad3f5c5d46"
  },
  {
    "url": "base/function/5.envconfig.html",
    "revision": "aebf8c55760f86809d61e3f6fe27b21e"
  },
  {
    "url": "base/function/6.loaderconfig.html",
    "revision": "1c8dc21ee1aabc8d33c4e375f94f3ae0"
  },
  {
    "url": "base/function/7.pluginconfig.html",
    "revision": "608d42fc211238c1517b48d206cc6b6e"
  },
  {
    "url": "base/function/7.处理js语法及校验.html",
    "revision": "d3e24a618c63102ebca092325061a04f"
  },
  {
    "url": "base/function/8.全局变量引入问题.html",
    "revision": "825af9ee1508bb0919cdf48a5f3bbbd4"
  },
  {
    "url": "base/loader/1.index.html",
    "revision": "c14ae9a2d3943801ecea03ae3d171cf5"
  },
  {
    "url": "base/loader/1.loader.html",
    "revision": "8487136ab98d0d9d4908b46d0fbde668"
  },
  {
    "url": "base/loader/2.deploy.html",
    "revision": "67fdcfff1116ce2a1208ad73b7d3def2"
  },
  {
    "url": "base/loader/3.babel.html",
    "revision": "f17bca2796049105da680e9e64433096"
  },
  {
    "url": "base/loader/4.banner.html",
    "revision": "b2f57d60ebe29bedbca98f3728e1a7ce"
  },
  {
    "url": "base/loader/5.file-url.html",
    "revision": "fb1fd99985fbf385d0c7875298b874b8"
  },
  {
    "url": "base/loader/6.less-css.html",
    "revision": "db39a942d85f587f1164139befd3a922"
  },
  {
    "url": "base/loader/7.css.html",
    "revision": "3c856b7c5c832ad40d2b88eee50ff77f"
  },
  {
    "url": "base/optimize/1.noParse.html",
    "revision": "bd3a3b0e7617e7aed717043b33c573b1"
  },
  {
    "url": "base/optimize/11.optimization.html",
    "revision": "71336b0feb608c71d07417cd9677fd3f"
  },
  {
    "url": "base/optimize/2.lgnorePlugin.html",
    "revision": "48af713cea0628dcfcf89ad7e62e862b"
  },
  {
    "url": "base/optimize/3.dllPlugin.html",
    "revision": "3fb6725df8619266e3e6de7cd717902d"
  },
  {
    "url": "base/optimize/4.happypack.html",
    "revision": "91d6d4d5e654998ce22fcdcd6ec865f0"
  },
  {
    "url": "base/optimize/5.webpack自带优化.html",
    "revision": "e65eba0595c328cdb1473fb87ace4563"
  },
  {
    "url": "base/optimize/5.抽离css样式文件.html",
    "revision": "51b99bdd118f3f58f311bd2b66ca0901"
  },
  {
    "url": "base/optimize/6.抽离公共代码.html",
    "revision": "b4684843329dedf2115a8b26a704033f"
  },
  {
    "url": "base/optimize/7.懒加载.html",
    "revision": "074b535eb07c28ac0309ab795c87ce25"
  },
  {
    "url": "base/optimize/8.热更新.html",
    "revision": "e461815206fa24855e2db9c502d79414"
  },
  {
    "url": "base/optimize/9.图片处理.html",
    "revision": "e98b64f3bc407e84d034f9775f868059"
  },
  {
    "url": "base/optimize/9.热模块替换.html",
    "revision": "8e9c7301b52dd17057b783bcaa6b0325"
  },
  {
    "url": "base/plugin/1.index.html",
    "revision": "00ab9a14db0ebf1edfd078ee382d6f7c"
  },
  {
    "url": "base/plugin/2.plugin.html",
    "revision": "bcee734b43951868043a660d8a03e3c3"
  },
  {
    "url": "base/plugin/3.document.html",
    "revision": "3e66ed8bbf1482226f30de0e074c1b50"
  },
  {
    "url": "base/plugin/4.inline.html",
    "revision": "bb0437108fa30bb55582e1c2180fd3da"
  },
  {
    "url": "base/plugin/5.auto.html",
    "revision": "18c1b2a4f5abf9e3547bdb08ec1807bd"
  },
  {
    "url": "index.html",
    "revision": "e615d6803b8d91f71595d934d5de4e87"
  },
  {
    "url": "senior/loader/1.index.html",
    "revision": "d6bcbac1e490e9040b8ca3209a1e0591"
  },
  {
    "url": "senior/loader/1.recursionAndDynamics.html",
    "revision": "7c95f50ebe6185708e0d97fbe0412204"
  },
  {
    "url": "senior/plugin/1.index.html",
    "revision": "20028f1e6e1f1c721129deed04227957"
  },
  {
    "url": "senior/plugin/1.recursionAndDynamics.html",
    "revision": "56d1ea39d1ba59be1097df3a0dd8fb6e"
  },
  {
    "url": "senior/plugin/10.table.html",
    "revision": "963b9899557b04c1a507eda504ec3b8c"
  },
  {
    "url": "senior/plugin/11.tree.html",
    "revision": "a50d6bfa608bb9da8883d02dde26f1ce"
  },
  {
    "url": "senior/plugin/2.extend.html",
    "revision": "5304aadd1fb68eac892847dbfc88cde2"
  },
  {
    "url": "senior/plugin/3.componentCommunication.html",
    "revision": "f1cb09fa3cf87d4014f957cecf4a118a"
  },
  {
    "url": "senior/plugin/4.render.html",
    "revision": "2439c942b21caeb12fbf3c41df18fe29"
  },
  {
    "url": "senior/plugin/5.api.html",
    "revision": "49e8d5f0ad6455420f07a96cd8433aa4"
  },
  {
    "url": "senior/plugin/6.form.html",
    "revision": "25baad4cd08c8a45b439a2184c5eab91"
  },
  {
    "url": "senior/plugin/7.checkBox.html",
    "revision": "f8e26041f0daae8e23aedc8dd7d8b27e"
  },
  {
    "url": "senior/plugin/8.active.html",
    "revision": "bbf274c1fbf5d003f2b6fa41de5ca458"
  },
  {
    "url": "senior/plugin/9.alert.html",
    "revision": "8bc0f0aff92ef40eefafbcc528c3d0f3"
  },
  {
    "url": "senior/tapable/1.index.html",
    "revision": "345c790b9a6703f82371e676940432ce"
  },
  {
    "url": "senior/tapable/10.AsyncSeriesWaterfallHook.html",
    "revision": "dfa370e9c14359e2670cfedecd350dfc"
  },
  {
    "url": "senior/tapable/2.SyncHook.html",
    "revision": "16d3c983da99d1051c81ee82a8b26302"
  },
  {
    "url": "senior/tapable/3.SyncBailHook.html",
    "revision": "8560d183912b3f69704c746171cbf59f"
  },
  {
    "url": "senior/tapable/4.SyncWaterfallHook.html",
    "revision": "5df66b3fe3e72eaccd3efc8b914ad587"
  },
  {
    "url": "senior/tapable/5.SyncLoopHook.html",
    "revision": "b08322bcbda265f984f820843c71d0df"
  },
  {
    "url": "senior/tapable/6.AsyncParallelHook.html",
    "revision": "639a69bab1c44f63c5156a16642f58dc"
  },
  {
    "url": "senior/tapable/7.AsyncParallelBailHook.html",
    "revision": "bffc3b19ff75354582685ce2efc70e89"
  },
  {
    "url": "senior/tapable/8.AsyncSeriesHook.html",
    "revision": "69f8082b59c55e0695d8302ff68a8e98"
  },
  {
    "url": "senior/tapable/9.AsyncSeriesBailHook.html",
    "revision": "ef37fa181f7db2dbeaa90c3ee2ea3160"
  },
  {
    "url": "senior/write/1.writeByHand.html",
    "revision": "be50139ad114bf6c77a91ceaa5067c16"
  },
  {
    "url": "senior/write/2.analyse.html",
    "revision": "7f6c3e96901123afe6e415a658c95747"
  },
  {
    "url": "senior/write/3.relation.html",
    "revision": "1929d34e4450f292cd1f5069d8d2ba5c"
  },
  {
    "url": "senior/write/4.ast.html",
    "revision": "f52e16dc9a6fa53b93c650c2003d6489"
  },
  {
    "url": "senior/write/5.build.html",
    "revision": "c627412651494bf2069be5bcc70ea846"
  },
  {
    "url": "senior/write/6.loader.html",
    "revision": "4cd98a4cf50d9810133bb3dcdd3a3099"
  },
  {
    "url": "senior/write/7.plugins.html",
    "revision": "0806398e9f8e866187734ada5de8a619"
  },
  {
    "url": "source/webpack/1.index.html",
    "revision": "18f157867c2cc0f18535ae849c11a5b4"
  },
  {
    "url": "source/webpack/1.webpack.html",
    "revision": "d6d51f723c1cbae8448689b62829b26e"
  },
  {
    "url": "source/webpack/10._addModuleChain.html",
    "revision": "011111e58451ef03f5136f46132dc9df"
  },
  {
    "url": "source/webpack/11.seal.html",
    "revision": "8df4ce4bc1cc425042a85d389d2930ef"
  },
  {
    "url": "source/webpack/12.chunk.html",
    "revision": "4627b6e7a1cd9430b4d0224824f588fd"
  },
  {
    "url": "source/webpack/13.onCompiled.html",
    "revision": "1dbdca8cf35a9ace5abea3b679a4c453"
  },
  {
    "url": "source/webpack/2.options.html",
    "revision": "0f9d543b426cda07f9b2d939d703b807"
  },
  {
    "url": "source/webpack/3.compiler.html",
    "revision": "a6249b540900c66359f5efcac31d466e"
  },
  {
    "url": "source/webpack/4.plugin.html",
    "revision": "ab8823224f84fc979da673873fae2450"
  },
  {
    "url": "source/webpack/5.compiler.html",
    "revision": "ae07631e199480799795eb8345a2e88e"
  },
  {
    "url": "source/webpack/6.run.html",
    "revision": "7cbf761aa8c990195a80e01042351adc"
  },
  {
    "url": "source/webpack/7.compile.html",
    "revision": "9cb972158cfd4273bc0c9d8d70b48954"
  },
  {
    "url": "source/webpack/8.compilation.html",
    "revision": "4b8183161e9563ebf378994ad606c933"
  },
  {
    "url": "source/webpack/9.make.html",
    "revision": "8909afb1439dfa8e896e22661d99f561"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
