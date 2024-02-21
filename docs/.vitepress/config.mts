import { defineConfig } from "vitepress";
import { useLive2d } from 'vitepress-theme-website'
// https://vitepress.dev/reference/site-config
const Theme = defineConfig({
    title: "CZ-docs",
    description: "创智学习资源库",
    lastUpdated: true,
    head: [['link', { rel: 'icon', href: '/idle.ico' }]],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" }, {
                text: '参与开发',
                items: [
                    {
                        text: '核心成员',
                        items: [
                            { text: 'Huanxiaomang', link: 'https://github.com/huanxiaomang' },
                            { text: 'hakurei77', link: 'https://blog.csdn.net/m0_53785610' },
                        ]
                    },
                    {
                        text: '关于',
                        items: [{ text: '创智工作室', link: 'https://github.com/huanxiaomang' }]
                    }
                ]
            },

        ],
        logo: "../icon.svg",


        sidebar: [
            {
                text: "指南",
                base: "/guide/",
                items: [{ text: "前端速通指南", link: "前端速通指南" }],
            },
            {
                text: "教程",
                base: "/course/",
                items: [

                    { text: '前置-Node', link: '前置-Node' },
                    { text: '前置-前后端分离', link: '前置-前后端分离' },
                    { text: '教学大纲', link: '教学大纲' },
                    { text: '1- introduction', link: '1-introduction' },
                    { text: '2- HTML&CSS', link: '2-HTML+CSS' },
                    { text: '3- JS核心', link: '3-JS-Array-Object' },
                    { text: '4- JS cases', link: '4-JS-cases' },
                    { text: '5- DOM&BOM', link: '5-DOM+BOM' },
                    { text: '6- Axios-JSON-Promise', link: '6-Axios-JSON-Promise' },
                    {
                        text: '7- skills&program design',
                        link: '7-skills+program-design'
                    },
                    { text: '8- Vue3', link: '8-Vue3' },
                ],
            },
            {
                text: "绩效项目实战",
                base: "/jx/",
                items: [

                    { text: '0- 目标', link: '0-目标' },
                    { text: '1- git标准流程(大厂)', link: '1-git' },
                    { text: '2- typescript', link: '2-typescript入门' },
                    { text: '3- vue基础', link: '3-vue基础' },

                ],
            },
            {
                text: "其他",
                base: "/other/",
                items: [{ text: "一些例子", link: "我收集的一些js例子" },
                { text: "常见问题", link: "other/新手常见问题篇" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/huanxiaomang" }],

        outline: [2, 3],

        footer: {
            message: 'Released under the MIT License.',
            copyright:
                'Copyright © 2023-present <a href="https://github.com/Depazer/depazer">创智工作室</a>'
        },



        lastUpdated: {
            text: '本页更新时间',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
    },
});


export default {
    ...Theme,
    markdown: {
        theme: { light: 'github-light', dark: 'material-theme-palenight' }
    },
    // setup() {

    //     //看板娘
    //     useLive2d({
    //         enable: true,
    //         model: {
    //             url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hibiki/hibiki.model.json'
    //         },
    //         display: {
    //             position: 'right',
    //             width: '135px',
    //             height: '300px',
    //             xOffset: '35px',
    //             yOffset: '5px'
    //         },
    //         mobile: {
    //             show: true
    //         },
    //         react: {
    //             opacity: 0.8
    //         }
    //     })

    // }

}