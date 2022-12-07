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
    "revision": "3dbf783a2570d2aa6861ae835eb22ac9"
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
    "url": "assets/js/25.6aa67f96.js",
    "revision": "25618b40909401daab1ae43a6c384b55"
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
    "url": "assets/js/app.0a36831d.js",
    "revision": "f646cbeeeebc210c009279fdddf601a7"
  },
  {
    "url": "base/config/1.打包多页应用.html",
    "revision": "6b8efd0986011af6fca9ceebdccc7b71"
  },
  {
    "url": "base/config/2.sourceMap.html",
    "revision": "f0f1828c111ce726cd918c125ffa0458"
  },
  {
    "url": "base/config/3.watch的用法.html",
    "revision": "a8fd824fb26193c642cde5c06d35df94"
  },
  {
    "url": "base/config/4.小插件应用.html",
    "revision": "2c436dad8d30f52f40fcd74f3bbc81b8"
  },
  {
    "url": "base/config/5.webpack跨域问题.html",
    "revision": "05ecaf9299f2c2f03591021260aa0076"
  },
  {
    "url": "base/config/6.resolve属性的配置.html",
    "revision": "40d8bfa286e2d7aa1c159ba5bfa8b232"
  },
  {
    "url": "base/config/7.定义环境变量.html",
    "revision": "aaf8ef72c7372620996c1f4bf4a32a82"
  },
  {
    "url": "base/config/8.区分不同环境.html",
    "revision": "c56df1a3c216d0819a3eb3e9b4f0f67c"
  },
  {
    "url": "base/function/1.index.html",
    "revision": "92781fb63b5aa18a1d8558adef1d8011"
  },
  {
    "url": "base/function/2.build.html",
    "revision": "74c7d3ba93943508515c1a505e0df535"
  },
  {
    "url": "base/function/2.route.html",
    "revision": "b3563e682000942f8ebdc7dec9bf8319"
  },
  {
    "url": "base/function/3.devenv.html",
    "revision": "6061dcaf8da1ba09b48d261fbb7eea96"
  },
  {
    "url": "base/function/4.devserver.html",
    "revision": "df9b6457d0b250c3c3767459b49e049f"
  },
  {
    "url": "base/function/5.envconfig.html",
    "revision": "3b411667cc7015e2758d0490855aabc5"
  },
  {
    "url": "base/function/6.loaderconfig.html",
    "revision": "52b3e538772397baf2f82b8afdbafba9"
  },
  {
    "url": "base/function/7.pluginconfig.html",
    "revision": "24e4c4135785b2ef392888ce1a3c231e"
  },
  {
    "url": "base/function/7.处理js语法及校验.html",
    "revision": "31544639b14af3f50e41bb10b3169e8b"
  },
  {
    "url": "base/function/8.全局变量引入问题.html",
    "revision": "d277644bf4fc8a8326b2aba42a33ed1a"
  },
  {
    "url": "base/loader/1.index.html",
    "revision": "a65b072d49d69f8af9591998b0b44bf2"
  },
  {
    "url": "base/loader/1.loader.html",
    "revision": "de2f96600f99e1f374e89e963c90ccc4"
  },
  {
    "url": "base/loader/2.deploy.html",
    "revision": "fc48c3a10fc8687b7861ddf450025688"
  },
  {
    "url": "base/loader/3.babel.html",
    "revision": "56dc19d70d78bf48a97be3e1a11c58ca"
  },
  {
    "url": "base/loader/4.banner.html",
    "revision": "55ab02553ecbc96cb1aa36c80b9f4935"
  },
  {
    "url": "base/loader/5.file-url.html",
    "revision": "de7d86958d4482bfb456c6e06678dc74"
  },
  {
    "url": "base/loader/6.less-css.html",
    "revision": "8f04f461abf064ba15480d0f49a08116"
  },
  {
    "url": "base/loader/7.css.html",
    "revision": "7ebcd231e7b415f34d506e969315d93f"
  },
  {
    "url": "base/optimize/1.noParse.html",
    "revision": "f478f64e1158b2cd751a652b3d6f88cb"
  },
  {
    "url": "base/optimize/11.optimization.html",
    "revision": "529b90000233b66aa1315eefa875117e"
  },
  {
    "url": "base/optimize/2.lgnorePlugin.html",
    "revision": "ea39537a5ae54a20307c5e008068f10d"
  },
  {
    "url": "base/optimize/3.dllPlugin.html",
    "revision": "e2e397039fcdf18c7fc19128ea43876d"
  },
  {
    "url": "base/optimize/4.happypack.html",
    "revision": "4857b5db3b05fc0fbb18486cae3219aa"
  },
  {
    "url": "base/optimize/5.webpack自带优化.html",
    "revision": "5938941485a9b606f4cbf702565ff536"
  },
  {
    "url": "base/optimize/5.抽离css样式文件.html",
    "revision": "5a98b5e404ab1e46ff61b60016c55261"
  },
  {
    "url": "base/optimize/6.抽离公共代码.html",
    "revision": "65cf3e75b87f04e5eaf831229260070b"
  },
  {
    "url": "base/optimize/7.懒加载.html",
    "revision": "629b94fba30c0e682b1544d940c39bec"
  },
  {
    "url": "base/optimize/8.热更新.html",
    "revision": "944adf28aa8f41a8a0e46634d2fcb392"
  },
  {
    "url": "base/optimize/9.图片处理.html",
    "revision": "55edf70d81956ba7d651f4a632a81c00"
  },
  {
    "url": "base/optimize/9.热模块替换.html",
    "revision": "46c5627de4071e1f6f20be512cf4e7fc"
  },
  {
    "url": "base/plugin/1.index.html",
    "revision": "3156b59b7f78ac4263c94f23fa31c7b4"
  },
  {
    "url": "base/plugin/2.plugin.html",
    "revision": "f5d2e3ab99e6c3f4ff46cd0d198b875d"
  },
  {
    "url": "base/plugin/3.document.html",
    "revision": "7afc4ebde097cee44ad8f5cd96abdd40"
  },
  {
    "url": "base/plugin/4.inline.html",
    "revision": "f53d76629cedfc648cc9ba03c74e503f"
  },
  {
    "url": "base/plugin/5.auto.html",
    "revision": "abb61585de623dbd754e9bdd6fd1dd9b"
  },
  {
    "url": "index.html",
    "revision": "82cc17d4decae0d8b0d8fe0683f05c01"
  },
  {
    "url": "senior/loader/1.index.html",
    "revision": "960afab56002f88d5d67779410a174de"
  },
  {
    "url": "senior/loader/1.recursionAndDynamics.html",
    "revision": "b9a3674e531d5cf37ca13679e14161df"
  },
  {
    "url": "senior/plugin/1.index.html",
    "revision": "a99e13f7923da2f7b5703c950f596e34"
  },
  {
    "url": "senior/plugin/1.recursionAndDynamics.html",
    "revision": "1fb4448b3c1a5a2a57fe23bc44a98449"
  },
  {
    "url": "senior/plugin/10.table.html",
    "revision": "b6d65dd70f354fbf2a5f8cdbabb4bd51"
  },
  {
    "url": "senior/plugin/11.tree.html",
    "revision": "51544013298d447ddb4e2ffaf5d50348"
  },
  {
    "url": "senior/plugin/2.extend.html",
    "revision": "8c38a19c2307a4105cafccfa18476fbc"
  },
  {
    "url": "senior/plugin/3.componentCommunication.html",
    "revision": "8b27f64eee0b66e884d7ef3adfdc7201"
  },
  {
    "url": "senior/plugin/4.render.html",
    "revision": "0f93f3f653a667449884d85a0f8db412"
  },
  {
    "url": "senior/plugin/5.api.html",
    "revision": "2d7b9df35024bccce3e8d9a40962d336"
  },
  {
    "url": "senior/plugin/6.form.html",
    "revision": "e98b5a130ad1f592acf7d2dbeeea3a6f"
  },
  {
    "url": "senior/plugin/7.checkBox.html",
    "revision": "dadd232749762df47731c5b06826b815"
  },
  {
    "url": "senior/plugin/8.active.html",
    "revision": "328f569d05252d8fea5778d29aca7823"
  },
  {
    "url": "senior/plugin/9.alert.html",
    "revision": "1f8e9f340ceed5a0e163cf07c0f08062"
  },
  {
    "url": "senior/tapable/1.index.html",
    "revision": "8122426a9695bf0f2a3b1122cbda7f7a"
  },
  {
    "url": "senior/tapable/10.AsyncSeriesWaterfallHook.html",
    "revision": "e9fec52415fe74f6a773eb1317755f62"
  },
  {
    "url": "senior/tapable/2.SyncHook.html",
    "revision": "6f44d33e985946228dc03c0970f5b4d9"
  },
  {
    "url": "senior/tapable/3.SyncBailHook.html",
    "revision": "9b24e3190587e659934864c16733e6e7"
  },
  {
    "url": "senior/tapable/4.SyncWaterfallHook.html",
    "revision": "27d70e279107a0cde1275cf5f4ac2c82"
  },
  {
    "url": "senior/tapable/5.SyncLoopHook.html",
    "revision": "387b14c00363c69c851e73cc8384cf4c"
  },
  {
    "url": "senior/tapable/6.AsyncParallelHook.html",
    "revision": "585f005c5d3cd2c6801126af87968fec"
  },
  {
    "url": "senior/tapable/7.AsyncParallelBailHook.html",
    "revision": "be712d819d36e1754a3d60a65ab61c06"
  },
  {
    "url": "senior/tapable/8.AsyncSeriesHook.html",
    "revision": "20646ae327034645e25df3f0fa888f6f"
  },
  {
    "url": "senior/tapable/9.AsyncSeriesBailHook.html",
    "revision": "05f6c049f87b4d2df71a7b89d1bd9ebf"
  },
  {
    "url": "senior/write/1.writeByHand.html",
    "revision": "a352121eb8a9a07e7fffe175d1792c46"
  },
  {
    "url": "senior/write/2.analyse.html",
    "revision": "96d8b14a60ec8afa870f648fbadb2f86"
  },
  {
    "url": "senior/write/3.relation.html",
    "revision": "79cee7c33dfd891e48d54624ade20fb2"
  },
  {
    "url": "senior/write/4.ast.html",
    "revision": "28b577b5c85d289c7016b8645b6ed688"
  },
  {
    "url": "senior/write/5.build.html",
    "revision": "0d3024c1d8e015635c0a709c9a011024"
  },
  {
    "url": "senior/write/6.loader.html",
    "revision": "a6eadc3f7e1f12e05b7f5327a4f6d426"
  },
  {
    "url": "senior/write/7.plugins.html",
    "revision": "aeb1bca60328df4e2a3beaab41b82613"
  },
  {
    "url": "source/webpack/1.index.html",
    "revision": "597b9561bd2cb0049ccec1f2e535ca06"
  },
  {
    "url": "source/webpack/1.webpack.html",
    "revision": "b55813802d12821d5e8b446070901dd6"
  },
  {
    "url": "source/webpack/10._addModuleChain.html",
    "revision": "c76df4c5b854452f2a7723e5a9aa2d9e"
  },
  {
    "url": "source/webpack/11.seal.html",
    "revision": "6748fea2ef641cb02b285abfe456b1de"
  },
  {
    "url": "source/webpack/12.chunk.html",
    "revision": "6d502d23b8ba63a410577376769e52e6"
  },
  {
    "url": "source/webpack/13.onCompiled.html",
    "revision": "075c5b90191b373fec990769222d6394"
  },
  {
    "url": "source/webpack/2.options.html",
    "revision": "d8e679b52ac66db32a2798fa86326398"
  },
  {
    "url": "source/webpack/3.compiler.html",
    "revision": "332170b8358c1872147d743b3c13c99c"
  },
  {
    "url": "source/webpack/4.plugin.html",
    "revision": "3d7c97552317a88bc27347fe64fa4922"
  },
  {
    "url": "source/webpack/5.compiler.html",
    "revision": "e4cded82d6ed3cd805fff6aa4910a1ed"
  },
  {
    "url": "source/webpack/6.run.html",
    "revision": "be7bb1346855d8beb18de84bc653a045"
  },
  {
    "url": "source/webpack/7.compile.html",
    "revision": "becc6c182677a78f8a9f05544619e5d5"
  },
  {
    "url": "source/webpack/8.compilation.html",
    "revision": "2f0bd69b9e351d3a1a1cb586b2debf0c"
  },
  {
    "url": "source/webpack/9.make.html",
    "revision": "6d48f412202b7772ea018953efcbf143"
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
