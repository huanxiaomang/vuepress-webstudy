git流程 本地和远程

**开始参与项目**：本地远程分别创建分支 => 本地拉取主分支代码，然后切换为自己分支

```bash
gitee创建
git branch huanxiaomang
git checkout huanxiaomang

git checkout master
git pull
```

**拉取**：切换主分支 => 拉取 => 与自己分支合并，处理冲突 => 切换回自己分支正常写

**提交**：先上一步拉取，冲突解决 => 提交至自己分支 => 提pr等处理



```bash
git init 初始化
vsc 提交
push 推送
pull 拉取
```



链接远程

```bash
git remote add origin https://gitee.com/huanxiaomang/ww.git
git push -u origin "main"
```







提交

```bash
commit(vsc)
git checkout main
git pull
git checkout 我自己的分支
git merge origin/main
git push origin 自己的
// 提pr
```



push之前要pull最新的过来，处理冲突

如果本地的版本落后于远程的版本，则报错：





```bash
 git config --global user.name "用户名"
```































