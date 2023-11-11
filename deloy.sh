set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:huanxiaomang/vuepress-webstudy.git master:gh-pages

cd -