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
    "revision": "d2e3507a2dcbff3ede4bd6e91902cc8f"
  },
  {
    "url": "assets/css/0.styles.b291645a.css",
    "revision": "8a36e11c2cebb52b1c24636e21c0663c"
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
    "url": "assets/js/10.fc0dd0ce.js",
    "revision": "67643f46b6a7759d7913ab70af06ba4d"
  },
  {
    "url": "assets/js/11.9e8cae2e.js",
    "revision": "a3c81cb739f3e1db36f553546b1a8411"
  },
  {
    "url": "assets/js/12.ee0265c0.js",
    "revision": "a15533aae80c71daa1b0b9c7e8cf2257"
  },
  {
    "url": "assets/js/13.586bc2c2.js",
    "revision": "5a9e4e1b0eaf674fc7152118945c8fb3"
  },
  {
    "url": "assets/js/14.8ada40b2.js",
    "revision": "e1bd7117dbafae9be80f1e36c73c51d2"
  },
  {
    "url": "assets/js/15.1f87cf13.js",
    "revision": "0cb94507e30e4427f94e055d0cb9b357"
  },
  {
    "url": "assets/js/16.ee0e3ff5.js",
    "revision": "1c65426ca85aa924d5635892a44ea5c3"
  },
  {
    "url": "assets/js/17.ebd27048.js",
    "revision": "3968b69e4a65e7649b54cd0f9dc19100"
  },
  {
    "url": "assets/js/18.f8a9a021.js",
    "revision": "36ca66af0b9850a503b08ac50e2676d1"
  },
  {
    "url": "assets/js/19.f12cd120.js",
    "revision": "ab6dc8ef34171046fd681a9b4f3f85da"
  },
  {
    "url": "assets/js/2.19fdd78e.js",
    "revision": "78c60405e88e475b9d877c2e20fc50ee"
  },
  {
    "url": "assets/js/20.975d7012.js",
    "revision": "f7ca55529097ce423d76787315b75560"
  },
  {
    "url": "assets/js/21.295409f8.js",
    "revision": "acb3886d3208a99655d957d8649dabfb"
  },
  {
    "url": "assets/js/22.9ea9463c.js",
    "revision": "c82110dae1932f04f158e49a81af5ed9"
  },
  {
    "url": "assets/js/23.e3d4a256.js",
    "revision": "e10ccd4c56a830c8a170ec312a4c84ac"
  },
  {
    "url": "assets/js/24.0d7e16da.js",
    "revision": "636e7ed8b58c107af0b70b55a5881097"
  },
  {
    "url": "assets/js/25.6fa65399.js",
    "revision": "0ffc34570440d20936cfcf65214d3648"
  },
  {
    "url": "assets/js/26.34d73837.js",
    "revision": "ec881544288a3d7da34c1264f8eaffce"
  },
  {
    "url": "assets/js/27.8d78d5b4.js",
    "revision": "35700ac532cb8ca5ef68a9c89303cd43"
  },
  {
    "url": "assets/js/28.bf54b697.js",
    "revision": "ab639dc944aacb8332e4f1f4cdc04774"
  },
  {
    "url": "assets/js/29.c3e3c44a.js",
    "revision": "102c81289c09c236f83cb1deca1f65bf"
  },
  {
    "url": "assets/js/3.f4917027.js",
    "revision": "faf8a3564f827b989bcdfec78aaa2e9f"
  },
  {
    "url": "assets/js/30.c24ed1e5.js",
    "revision": "852972fe4d731cb7524f3aa4b5cf6bfb"
  },
  {
    "url": "assets/js/31.2436b2b0.js",
    "revision": "d9b078d474f7e8e091097da642102452"
  },
  {
    "url": "assets/js/32.0d1dc058.js",
    "revision": "7e236fe740be43742df459eadd77d49b"
  },
  {
    "url": "assets/js/33.d35cf34f.js",
    "revision": "7844bb8616f5cb88eaaf9fdc109a5f0e"
  },
  {
    "url": "assets/js/34.45e3e7e6.js",
    "revision": "8a24648e1541eb710184e1c7bd431345"
  },
  {
    "url": "assets/js/35.d0dcc0ed.js",
    "revision": "e54a8ddb2f9f3f8b1d9847a0e7601e9f"
  },
  {
    "url": "assets/js/36.e5e50c59.js",
    "revision": "5dc65996503008e5e5f5b6660812ae5f"
  },
  {
    "url": "assets/js/37.ef90aecf.js",
    "revision": "8a049119d264926bd5f637b79e7a14db"
  },
  {
    "url": "assets/js/38.a90fb34c.js",
    "revision": "98796e99f77c1abc079152967b3ee0ad"
  },
  {
    "url": "assets/js/39.22a44fa5.js",
    "revision": "1881fecf5da72359520f8018e8fee56f"
  },
  {
    "url": "assets/js/4.1befc5f8.js",
    "revision": "9cdb4f380888c0161ecf1acc82fa6c47"
  },
  {
    "url": "assets/js/40.7fa73060.js",
    "revision": "cb4d65c6c9240b5f3e9ec3e30aa26181"
  },
  {
    "url": "assets/js/41.12108c44.js",
    "revision": "b1f915c917d6fd2355fcb5d817b4a1fc"
  },
  {
    "url": "assets/js/42.98b56a7b.js",
    "revision": "94678b9c55c0f429642b8b87758e3db6"
  },
  {
    "url": "assets/js/43.522f326c.js",
    "revision": "8909da2f54fdb8a657a284155f8f8260"
  },
  {
    "url": "assets/js/44.1eb33ab8.js",
    "revision": "2d7edadd0dac6a099bb898b55b0039ed"
  },
  {
    "url": "assets/js/45.dd43042d.js",
    "revision": "7f46752c69d744b1c53511c057e51c23"
  },
  {
    "url": "assets/js/46.c3ad2dd6.js",
    "revision": "12b2480ef88b7b6b2b5ae92de27802d9"
  },
  {
    "url": "assets/js/47.8ccb63c5.js",
    "revision": "be89db242ffa981cc0444da811d513fa"
  },
  {
    "url": "assets/js/48.906810a3.js",
    "revision": "9bcca6f728e779802ad058df3cdb65df"
  },
  {
    "url": "assets/js/49.76377b2c.js",
    "revision": "91ecf4ac4bf45fb51da323d910a68685"
  },
  {
    "url": "assets/js/5.017b63b0.js",
    "revision": "78e5b3afb290918d862bb407b6972a95"
  },
  {
    "url": "assets/js/50.3e55df02.js",
    "revision": "fcb74e8451da17577e6612bce974bbc7"
  },
  {
    "url": "assets/js/51.1fa0d1a9.js",
    "revision": "c0cffee8f685c00d125dcfdd75266d2e"
  },
  {
    "url": "assets/js/52.a9e7abf1.js",
    "revision": "f13b194ee04e9cff93e582c442732a8f"
  },
  {
    "url": "assets/js/53.4a8df62a.js",
    "revision": "c908c903b8e88f0ebb16b954a7a10906"
  },
  {
    "url": "assets/js/54.8027d95c.js",
    "revision": "2ab81d410bc40d729575ab0d56a5a663"
  },
  {
    "url": "assets/js/55.4eca3afd.js",
    "revision": "ff884be29787f9c62829293e091a7cf1"
  },
  {
    "url": "assets/js/56.e2666c1b.js",
    "revision": "618cd34df4a0c3b21bf523789ddf642f"
  },
  {
    "url": "assets/js/57.7bbb4083.js",
    "revision": "460836eded2d32377b3e8b241cd11202"
  },
  {
    "url": "assets/js/58.f35592ee.js",
    "revision": "724d4969afa7cb57ba7c56182f6f2e9e"
  },
  {
    "url": "assets/js/59.88fa2f07.js",
    "revision": "e96b31e648c4d17b8dd24cbbca36c553"
  },
  {
    "url": "assets/js/6.15ddbe3f.js",
    "revision": "551d863e6c2e6dbd47530df372796c16"
  },
  {
    "url": "assets/js/60.c2301e49.js",
    "revision": "dde559f84166ce076828b04b7e1fb393"
  },
  {
    "url": "assets/js/61.bc687f5e.js",
    "revision": "97218992aa82411e8a51707f847b56f1"
  },
  {
    "url": "assets/js/62.951559b4.js",
    "revision": "bef330b8c028bd8bb5fb44c9b4ea9227"
  },
  {
    "url": "assets/js/63.5edb8663.js",
    "revision": "4c463bf2bfc3d4e008cad56e64a70ed0"
  },
  {
    "url": "assets/js/64.f3591302.js",
    "revision": "eddf555020c9d6ba0ff69ae356c290ba"
  },
  {
    "url": "assets/js/65.d138cad5.js",
    "revision": "88e66f91c5b8bdb8a1d3e6a77e8a5831"
  },
  {
    "url": "assets/js/66.16d081fd.js",
    "revision": "debafae535217a8e4a867c10eea3287f"
  },
  {
    "url": "assets/js/67.2976a4a9.js",
    "revision": "21929c36bb94a5348a4231d87eef1dcf"
  },
  {
    "url": "assets/js/68.30ae0ab0.js",
    "revision": "0e15a9aa66490bfd77f9fe213fda7941"
  },
  {
    "url": "assets/js/69.7ac6954c.js",
    "revision": "fc63bc87fb77ed035b9ae23780e5b432"
  },
  {
    "url": "assets/js/7.32d08a1e.js",
    "revision": "7b434242f5a45d59e484ae3502bb2ece"
  },
  {
    "url": "assets/js/70.564f445d.js",
    "revision": "78d9615474e2a94e2ef31a53ba8adc8a"
  },
  {
    "url": "assets/js/71.ae8458ad.js",
    "revision": "7d2d4af1fdbc4d47104465a7cf1441b1"
  },
  {
    "url": "assets/js/72.964b7e7f.js",
    "revision": "3fc0b132e7222144d57440edb8a7aff7"
  },
  {
    "url": "assets/js/73.fadd253d.js",
    "revision": "aed77e119b9552cefc896e027377d36d"
  },
  {
    "url": "assets/js/74.68577e62.js",
    "revision": "189a48a5984c0329e329645f42fe83e0"
  },
  {
    "url": "assets/js/75.108e8394.js",
    "revision": "c5c5fd6f6829e085a5ac6adc585bec8b"
  },
  {
    "url": "assets/js/76.369ec831.js",
    "revision": "d332c0accf22acbed8924a8b26ba0f6b"
  },
  {
    "url": "assets/js/77.87bc5a93.js",
    "revision": "63254f5cc266ede4e902eedfd6a8f18e"
  },
  {
    "url": "assets/js/78.21a4c3f2.js",
    "revision": "fd07a7f47a000b2ae02c74ea06d84051"
  },
  {
    "url": "assets/js/79.62232597.js",
    "revision": "a07e7e800bf3d69a59de9cd3f2d8cbcb"
  },
  {
    "url": "assets/js/8.50967fa7.js",
    "revision": "73d7abd3fc4245137158720f022a3a79"
  },
  {
    "url": "assets/js/80.478ab027.js",
    "revision": "cc777aee2e70ed35d487b4f3df11559a"
  },
  {
    "url": "assets/js/81.87ec3b38.js",
    "revision": "da1ce99f9dae2bda29f59e845fc1ac94"
  },
  {
    "url": "assets/js/82.8b1431c0.js",
    "revision": "f527d1291fbaa592b6235ff4a86e5218"
  },
  {
    "url": "assets/js/83.bb61544a.js",
    "revision": "e564d3378efa0b951ce459b3c4b64b97"
  },
  {
    "url": "assets/js/84.096e9ecf.js",
    "revision": "60e9948be31c29d4ccb7cab105c8ebab"
  },
  {
    "url": "assets/js/85.2c41876b.js",
    "revision": "3d6942426c7f34cc35f9c2149201bdde"
  },
  {
    "url": "assets/js/86.2d90ba87.js",
    "revision": "b6b85742b873c62acc1e8b73cd1011e8"
  },
  {
    "url": "assets/js/87.5d21eaf8.js",
    "revision": "0e6cb942e2886c1a202fe0cd6b18975c"
  },
  {
    "url": "assets/js/88.49295afd.js",
    "revision": "6c5e64d69fe885779fcae22d89e91837"
  },
  {
    "url": "assets/js/89.a37ea9ac.js",
    "revision": "e8b29bc74036341d98530fe1850f9c67"
  },
  {
    "url": "assets/js/9.a6e05753.js",
    "revision": "4ef29c0c455580ed7b7c707767596ae2"
  },
  {
    "url": "assets/js/90.cc2b04fd.js",
    "revision": "a5247f8ff9b6c0b521581481c096054a"
  },
  {
    "url": "assets/js/91.eff88e59.js",
    "revision": "ce064909b87872f82f7c3951999c2768"
  },
  {
    "url": "assets/js/92.c95ee3d4.js",
    "revision": "71104773f13a38717637c24ed35bf238"
  },
  {
    "url": "assets/js/93.f7fdc5b5.js",
    "revision": "8633a9230db8d2c150cb9bf321c4258a"
  },
  {
    "url": "assets/js/94.deeb75fa.js",
    "revision": "eeff94b9d6061592f2887aeaf61556da"
  },
  {
    "url": "assets/js/95.007a1f0e.js",
    "revision": "076e238e1fd70c98b8883f81ca4abf4e"
  },
  {
    "url": "assets/js/96.9b5304a3.js",
    "revision": "46f81883d084beebcbd7a9bc26ebbf52"
  },
  {
    "url": "assets/js/97.a01c7670.js",
    "revision": "ba53fcbb8cd3d101eaa7503ae26e873f"
  },
  {
    "url": "assets/js/98.2c5eeb9e.js",
    "revision": "b35b4bd236d4ae62f4b9abb645bebf82"
  },
  {
    "url": "assets/js/app.cab6ba0a.js",
    "revision": "7e1cd03cd2fd6d93f65367d3f3dbfb2b"
  },
  {
    "url": "base/config/1.打包多页应用.html",
    "revision": "ff431b203245d88c181b9fc0148878e7"
  },
  {
    "url": "base/config/2.sourceMap.html",
    "revision": "0a7a5d676b18ffbac865248c59c28cb3"
  },
  {
    "url": "base/config/3.watch的用法.html",
    "revision": "5d78328ba696e5c8533911a48dbfe3f6"
  },
  {
    "url": "base/config/4.小插件应用.html",
    "revision": "c7266481cc521c7315c124460d4b2330"
  },
  {
    "url": "base/config/5.webpack跨域问题.html",
    "revision": "df69331da9f70897769898d7351a9b8f"
  },
  {
    "url": "base/config/6.resolve属性的配置.html",
    "revision": "df4b3bdff7cd6327a70758c5889851d3"
  },
  {
    "url": "base/config/7.定义环境变量.html",
    "revision": "69ea286f1c1d588efc3d627e3aa7d76c"
  },
  {
    "url": "base/config/8.区分不同环境.html",
    "revision": "c22f0c3a8b2022ea7e5a4801fd53831c"
  },
  {
    "url": "base/function/1.index.html",
    "revision": "9d7217fc32d8584a79587f7593f6ee73"
  },
  {
    "url": "base/function/2.build.html",
    "revision": "69496a52a85466d5c370fca35677eb37"
  },
  {
    "url": "base/function/2.route.html",
    "revision": "da7b6070e48a62626879dd044c351786"
  },
  {
    "url": "base/function/3.devenv.html",
    "revision": "26e64a724075a10a11ce00ac8532996c"
  },
  {
    "url": "base/function/4.devserver.html",
    "revision": "5a7bcff26fd11a8905b705e49b741860"
  },
  {
    "url": "base/function/5.envconfig.html",
    "revision": "90ab41eff7df52b7dc78f3ffab9812e1"
  },
  {
    "url": "base/function/6.loaderconfig.html",
    "revision": "82a83a37b25226169aa40c33759ed014"
  },
  {
    "url": "base/function/7.pluginconfig.html",
    "revision": "c9a906e6942ceab273d7593bac877d79"
  },
  {
    "url": "base/function/7.处理js语法及校验.html",
    "revision": "ea0b08385d71502619452299a2d4d6cd"
  },
  {
    "url": "base/function/8.workflow.html",
    "revision": "e3470e13d3639dc76d22d2aca5cd63b4"
  },
  {
    "url": "base/function/8.全局变量引入问题.html",
    "revision": "5b9d8851f6e7f0f9e2ba66162f941e50"
  },
  {
    "url": "base/loader/1.index.html",
    "revision": "cadda8a87a279ec156a203e316171b62"
  },
  {
    "url": "base/loader/1.loader.html",
    "revision": "590dce18e67bd58923ceda84da0f8576"
  },
  {
    "url": "base/loader/2.deploy.html",
    "revision": "e2d13eb5431214a4f1d1a911688e3620"
  },
  {
    "url": "base/loader/3.babel.html",
    "revision": "5210450d27d140bd8da9d86c08a7674f"
  },
  {
    "url": "base/loader/4.banner.html",
    "revision": "a893e4f666fe6c023b36eea145521420"
  },
  {
    "url": "base/loader/5.file-url.html",
    "revision": "01fc4c0c53cd021e29f2d046440e8677"
  },
  {
    "url": "base/loader/6.less-css.html",
    "revision": "61427d9578f5967d6ad37f92a318460b"
  },
  {
    "url": "base/loader/7.css.html",
    "revision": "e131cc1bc6bbbe9d53b329d7f85a3f66"
  },
  {
    "url": "base/optimize/1.noParse.html",
    "revision": "6801937c1bf507fbdc89e9493f447cb5"
  },
  {
    "url": "base/optimize/11.optimization.html",
    "revision": "2a4e82331e6b44460b69bdf0e429847a"
  },
  {
    "url": "base/optimize/2.lgnorePlugin.html",
    "revision": "feab98879f55e9bfbc6946fdff5ba41e"
  },
  {
    "url": "base/optimize/3.dllPlugin.html",
    "revision": "72c2342ee5da397621102b03d9fac6e7"
  },
  {
    "url": "base/optimize/4.happypack.html",
    "revision": "bb308553bc079012a0efde2046376f45"
  },
  {
    "url": "base/optimize/5.webpack自带优化.html",
    "revision": "e29a80f348e1eb9b359c40c938e75e75"
  },
  {
    "url": "base/optimize/5.抽离css样式文件.html",
    "revision": "35f42eb529c39fbfcbae95258c71c186"
  },
  {
    "url": "base/optimize/6.抽离公共代码.html",
    "revision": "2560147a4d6a96e7a4d3e5939c34b2f7"
  },
  {
    "url": "base/optimize/7.懒加载.html",
    "revision": "f50f60676679ab326a999cb53885c428"
  },
  {
    "url": "base/optimize/8.热更新.html",
    "revision": "cf79d0ebf1888fc48273d79824c397cb"
  },
  {
    "url": "base/optimize/9.图片处理.html",
    "revision": "59167f7311d0fb1c5c0cfd204075d604"
  },
  {
    "url": "base/optimize/9.热模块替换.html",
    "revision": "6c5ed893ae70204cfd3df1ff37fe9d2c"
  },
  {
    "url": "base/plugin/1.index.html",
    "revision": "5d357febed8d8b6b959666a3dd396bf6"
  },
  {
    "url": "base/plugin/2.plugin.html",
    "revision": "744dc85e371d74548ef8eb092c5e5f72"
  },
  {
    "url": "base/plugin/3.document.html",
    "revision": "5cd39fa7c43d00c92b254163706175ed"
  },
  {
    "url": "base/plugin/4.inline.html",
    "revision": "2a0920ee05bce9b2a0178ffce336ce62"
  },
  {
    "url": "base/plugin/5.auto.html",
    "revision": "0fd8bfffe4533b22d4ca70ddf61db061"
  },
  {
    "url": "index.html",
    "revision": "651e1ebca99966a69a1f3d180367808d"
  },
  {
    "url": "senior/loader/1.index.html",
    "revision": "0daf670244e9f7a9301c49dbb22f6ed2"
  },
  {
    "url": "senior/loader/1.recursionAndDynamics.html",
    "revision": "c31fc3aeda19512aa9dc4b49bf45a239"
  },
  {
    "url": "senior/plugin/1.index.html",
    "revision": "166e35b212f1a284647f7c5c5b7b8a90"
  },
  {
    "url": "senior/plugin/1.recursionAndDynamics.html",
    "revision": "ccbd5d14ecfea375dd878febe7b348a8"
  },
  {
    "url": "senior/plugin/10.table.html",
    "revision": "87cd6c1a5ccf390803d047a5ad5190f9"
  },
  {
    "url": "senior/plugin/11.tree.html",
    "revision": "742149e996ddc4949ee614ae645cd643"
  },
  {
    "url": "senior/plugin/2.extend.html",
    "revision": "6b534571c38dfb581c74c386be8a90c5"
  },
  {
    "url": "senior/plugin/3.componentCommunication.html",
    "revision": "6db92f0816c941325cd353ab352aed70"
  },
  {
    "url": "senior/plugin/4.render.html",
    "revision": "b803306772a80257aa01e4ae5ea86c46"
  },
  {
    "url": "senior/plugin/5.api.html",
    "revision": "7872057f6fdc5a098ef37fde809badbf"
  },
  {
    "url": "senior/plugin/6.form.html",
    "revision": "cb8d000e6212d76e4550b6326296a875"
  },
  {
    "url": "senior/plugin/7.checkBox.html",
    "revision": "1112c6c0cd33cb559429ebf8034bd884"
  },
  {
    "url": "senior/plugin/8.active.html",
    "revision": "eeef91ed494665a3c2cb413ea549e49d"
  },
  {
    "url": "senior/plugin/9.alert.html",
    "revision": "b689a2eb0663b1b4bf397e1bf00a5281"
  },
  {
    "url": "senior/tapable/1.index.html",
    "revision": "54a44d7cc603e549105c39e770494f54"
  },
  {
    "url": "senior/tapable/10.AsyncSeriesWaterfallHook.html",
    "revision": "2e991f6a9feefde0dbff4aeb6d16c3b7"
  },
  {
    "url": "senior/tapable/2.SyncHook.html",
    "revision": "9f3bd933a3e39fe86b03904bf16ab3fd"
  },
  {
    "url": "senior/tapable/3.SyncBailHook.html",
    "revision": "5bc2fe4ade8f4617161bf2e64743d2f3"
  },
  {
    "url": "senior/tapable/4.SyncWaterfallHook.html",
    "revision": "e42d19b51156763ef6772503608a2db9"
  },
  {
    "url": "senior/tapable/5.SyncLoopHook.html",
    "revision": "8f3f0eb3d0700477ec6d70d2c295d299"
  },
  {
    "url": "senior/tapable/6.AsyncParallelHook.html",
    "revision": "950ad248010f0b427f8bc875d8e75c83"
  },
  {
    "url": "senior/tapable/7.AsyncParallelBailHook.html",
    "revision": "91617d842072ffcedcadf0c36bc734f0"
  },
  {
    "url": "senior/tapable/8.AsyncSeriesHook.html",
    "revision": "3ed02d264c464f87dca46aca1d68a884"
  },
  {
    "url": "senior/tapable/9.AsyncSeriesBailHook.html",
    "revision": "d677a9890d89162fa68ac9d780cd9807"
  },
  {
    "url": "senior/write/1.writeByHand.html",
    "revision": "51e30b246dcd9efa74a1c79c6ee42bb3"
  },
  {
    "url": "senior/write/2.analyse.html",
    "revision": "f9fefc14912650cd7a8872e72a594f5d"
  },
  {
    "url": "senior/write/3.relation.html",
    "revision": "c38b2bb3af9e6b01a2037c56dce7dd65"
  },
  {
    "url": "senior/write/4.ast.html",
    "revision": "09de80c023504f31924c26e09433ca76"
  },
  {
    "url": "senior/write/5.build.html",
    "revision": "ec6f67287a4fc8727f532e15eb0de10a"
  },
  {
    "url": "senior/write/6.loader.html",
    "revision": "bae3bdae4422a450739f977fe8986280"
  },
  {
    "url": "senior/write/7.plugins.html",
    "revision": "28df8e755140aec4f3a6e326e9b811e4"
  },
  {
    "url": "source/webpack/1.index.html",
    "revision": "ddbea3e193dfffdfc55ce3887dc314e9"
  },
  {
    "url": "source/webpack/1.webpack.html",
    "revision": "b32e779fb9e4d5a20ab68f3daaac3953"
  },
  {
    "url": "source/webpack/10._addModuleChain.html",
    "revision": "1d35196f59f8cd3abd7f902b8039a866"
  },
  {
    "url": "source/webpack/11.seal.html",
    "revision": "bb3bb1aad8325cb432ee505f6f31e0e1"
  },
  {
    "url": "source/webpack/12.chunk.html",
    "revision": "69ca5a2885742d9429bce7f9dff22573"
  },
  {
    "url": "source/webpack/13.onCompiled.html",
    "revision": "00cc6194f2eae1dcdfbfe3102097dad8"
  },
  {
    "url": "source/webpack/2.options.html",
    "revision": "5a11cc8b3bf3b4a24858fa20d8d78890"
  },
  {
    "url": "source/webpack/3.compiler.html",
    "revision": "f1440a0d300b4717a91b07fd9af106bc"
  },
  {
    "url": "source/webpack/4.plugin.html",
    "revision": "a9870e79495a7bd5dfa4df97ea9143b6"
  },
  {
    "url": "source/webpack/5.compiler对象.html",
    "revision": "1fe671ed40a2c95f0ddbef841f50a2ab"
  },
  {
    "url": "source/webpack/6.run.html",
    "revision": "6711986b945ec20a11c92fb02eb59e6e"
  },
  {
    "url": "source/webpack/7.compile.html",
    "revision": "6207a1c7688de983a7533d1339eeee01"
  },
  {
    "url": "source/webpack/8.compilation.html",
    "revision": "b705f5a8fb906890df7acdcc32eb2774"
  },
  {
    "url": "source/webpack/9.make.html",
    "revision": "9146d4754d511e9c3d14ce214fd6220d"
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
