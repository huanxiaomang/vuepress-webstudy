# JS中的拖拽





[1.组课神器 - 蓝桥云课 (lanqiao.cn)](https://www.lanqiao.cn/problems/5143/learning/?page=1&first_category_id=2&second_category_id=11&sort=difficulty&asc=0)

 





```js
function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();

}

function handleDragStart(e) {
    const tar = e.target;
    tar.style.opacity = '.6';
}

function handleDragEnd(e) {
    const tar = e.target;
    tar.style.opacity = '1';
    emit('handleDragEnd', tar);
}
```



自定义指令用来做功能的插入



冒泡：把事件向上传递给对应的处理程序

例子父元素绑定子元素触发