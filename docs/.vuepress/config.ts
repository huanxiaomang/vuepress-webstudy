import { defaultTheme, defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search'

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
                text: '常用网站',
                children: [
                    {
                        text: '网站收集',
                        children: [
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
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
                            { text: 'Chinese', link: '/language/chinese/' },
                            { text: 'Japanese', link: '/language/japanese/' }
                        ],
                    },
                ],
            },
        ],
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '我不好使',
                },
                '/zh/': {
                    placeholder: '搜索',
                },
            },
            isSearchable: (page) => page.path !== '/',
        }),
    ],
})