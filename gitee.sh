# 自动化打包同时将打包后的代码发布到gh-pages分支

# 1.打包
npm run src:build

# 2.进入打包目录
cd web-webpack

# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add gitee https://gitee.com/zhoubichuan/web-webpack.git
git push -f gitee gh-pages

# 4.返回初始目录
cd -