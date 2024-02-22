```bash
npm i -g pnpm   安装pnpm
pnpm i -g vite  安装vite，或者cnpm
pnpm config set registry https://registry.npmmirror.com/  pnpm设置镜像
 
创建vue项目
pnpm create vite
选ts

vsc打开文件夹
pnpm i
```



##### 基础架构

介绍 

1. assets下面创建icon/ image style/
2. 引入less，放进style/里
3. 关闭noUnusedLocals  noUnusedParameters





##### 组件传参

```js
<Login msg="Vite + Vue" />

const props = defineProps(['msg']);

console.log(props);
```



##### ref的响应式

ts里和template里语法不一样



##### 简单的设计思想

使用枚举类型避免使用字符串来做type

```ts
<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps(['msg']);
console.log(props);

const count = ref(0);
console.log(count);


function addCount(num: number) {
    count.value += num;
}

function countHandler(num: number, type: string) {
    if (type === 'add') {
        count.value += num;
    } else if (type === 'reduce') {
        count.value -= num;
    } else if (type === 'multiply') {
        count.value *= num;
    } else if (type === 'divide') {
        count.value /= num;
    }
}

enum countHandlerType {
    ADD,
    REDUCE,
    MULTIPLY,
    DIVIDE
}

function countHandler2(num: number, type: countHandlerType) {
    if (type === countHandlerType.ADD) {
        count.value += num;
    } else if (type === countHandlerType.REDUCE) {
        count.value -= num;
    } else if (type === countHandlerType.MULTIPLY) {
        count.value *= num;
    } else if (type === countHandlerType.DIVIDE) {
        count.value /= num;
    }
}

function getCount() {
    return count.value;
}

function setCount(fn: any) {
    count.value = fn(count.value);
}

</script>

<template>
    <h1>{{ props.msg }}</h1>
    <h2>{{ count }}</h2>
    <button @click="addCount(1)">+1</button>
    <button @click="countHandler(1, 'reduce')">-1</button>
    <button @click="countHandler2(2, countHandlerType.MULTIPLY)">*2</button>
    <button @click="setCount((val: number) => val / 2)">/2</button>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}

button {
    margin: 10px;
}
</style>

```

template基本语法



##### html与css

style使用scoped和less

定义全局的style

组件顶级元素为container



##### 组件拆分

header footer form formHeader button 主题button



##### 任务1：[一个视频学会 Vue3 前端开发_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1fe41157nG/?spm_id_from=..top_right_bar_window_history.content.click&vd_source=474df4e06771c2d47c2daa4a0a249bc3)



##### 任务2：对登录页的页面进行拆分
