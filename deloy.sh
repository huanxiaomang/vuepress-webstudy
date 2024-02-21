set -e

pnpm build

cd docs/.vitepress/dist

echo 'huanxm.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/huanxiaomang/vuepress-webstudy.git master:gh-pages

cd -