import { defaultTheme, defineUserConfig } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '创智前端学习资源库',
    description: '前端速通学习 幻小芒的笔记',
    head: [
        ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
        ['meta', { name: 'author', content: '幻小芒' }],
        ['meta', { name: 'keywords', content: '幻小芒 前端学习 速通教程 前端学习方法 创智前端学习资源库' }],
    ],
    theme: defaultTheme({
        lastUpdated: true,
        lastUpdatedText: '最后更新',
        navbar: [
            {
                text: '前端教程总览',
                children: [
                    {
                        text: '持续更新中',
                        children: [
                            { text: '前端介绍及准备篇', link: '前端速通指南.md' },
                            { text: 'HTML与CSS篇', link: 'HTML与CSS篇.md' },
                        ],
                    },
                ],
            },
            {
                text: '常用网站',
                children: [
                    {
                        text: '网站收集',
                        children: [
                            { text: 'mdn', link: 'https://developer.mozilla.org/zh-CN/' },
                            { text: '后盾人前端教程', link: 'https://doc.houdunren.com/' },
                            { text: 'Github', link: 'https://github.com/' },
                            { text: 'Gitee', link: 'https://gitee.com/' },
                            { text: 'Regex正则表达式', link: 'https://regex101.com/' },
                            { text: '阿里巴巴矢量图标库', link: 'https://www.iconfont.cn/' },
                        ],
                    },
                ],
            },
            {
                text: '工具扩展',
                children: [
                    {
                        text: '前端工具',
                        children: [
                            { text: 'Vue.js', link: 'https://cn.vuejs.org/' },
                            { text: 'ElementUI', link: 'https://element.eleme.cn/' }
                        ],
                    },
                ],
            },
        ],
    }),
    // plugins: (() => {
    //     let obj = {
    //         '@vssue/vuepress-plugin-vssue': {
    //             // 设置 `platform` 而不是 `api`
    //             platform: 'github',

    //             // 其他的 Vssue 配置
    //             owner: 'OWNER_OF_REPO',
    //             repo: 'NAME_OF_REPO',
    //             clientId: 'YOUR_CLIENT_ID',
    //             clientSecret: 'YOUR_CLIENT_SECRET',
    //         },
    //     }
    //     obj[Symbol.iterator] = function () {
    //         return {
    //             next: function () {
    //                 let objArr = Reflect.ownKeys(obj)
    //                 if (this.index < objArr.length - 1) {
    //                     let key = objArr[this.index];
    //                     this.index++;
    //                     return { value: obj[key] };
    //                 } else {
    //                     return { done: true };
    //                 }
    //             },
    //             index: 0
    //         }
    //     }
    //     return obj;
    // })(),
})