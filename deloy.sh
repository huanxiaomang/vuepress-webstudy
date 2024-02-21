set -e

<<<<<<< HEAD
pnpm build

cd docs/.vitepress/dist
=======
npm run docs:build

cd docs/.vuepress/dist
>>>>>>> origin/main

echo 'huanxm.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

<<<<<<< HEAD
git push -f https://github.com/huanxiaomang/vuepress-webstudy.git master:gh-pages
=======
git push -f git@github.com:huanxiaomang/vuepress-webstudy.git master:gh-pages
>>>>>>> origin/main

cd -