import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
    base: '/home/',
    // 请不要忘记设置默认语言
    lang: 'zh-CN',
    theme: plumeTheme({
        hostname: 'https://iyuwb.github.io/home/',
        logo: '/logo.png',
        // 作者
        avatar: {
            url: '/logo.png',
            name: '耶温',
            description: '前端开发',
            circle: true,
            location: '西安，中国',
            organization: '亚信科技',
        },
        // nav
        navbar: [
            { text: '首页', link: '/', icon: 'solar:home-add-linear' },
            {
                text: '博客',
                link: '/blog/',
                icon: 'ri:blogger-line'
            },
            {
                text: '基础',
                icon: 'ph:file-html',
                items: [
                    {
                        text: 'HTML',
                        icon: 'ph:file-html',
                        link: '/notes/HTML/HTML元素属性相关.md',
                    },
                    {
                        text: 'CSS',
                        icon: 'ph:file-css',
                        link: '/notes/CSS/CSS选择器',
                    },
                    {
                        text: 'JavaScript',
                        icon: 'ph:file-js',
                        link: '/前端基础/JavaScript',
                    },
                    {
                        text: 'TypeScript',
                        icon: 'ph:file-ts',
                        link: '/前端基础/TypeScript',
                    },
                ],
            },
            {
                text: '框架',
                icon: 'ph:file-vue-duotone',
                items: [
                    {
                        text: 'Vue',
                        icon: 'ph:file-vue',
                        link: '/前端框架/Vue',
                    },
                    {
                        text: 'React',
                        icon: 'mdi:react',
                        link: '/前端框架/React',
                    },
                    {
                        text: 'UNIAPP',
                        icon: 'mdi:unicode',
                        link: '/前端框架/UNIAPP',
                    },
                    {
                        text: '微信小程序',
                        icon: 'ri:wechat-2-line',
                        link: '/前端框架/WeChatApp',
                    },
                ],
            },
            {
                text: '插件',
                link: '/base/',
                icon: 'clarity:plugin-line'
            },
            {
                text: '其他',
                link: '/notes/HTML/HTML元素属性相关.md',
                icon: 'icon-park-outline:other'
            }
        ],
        // aside
        notes: {
            dir: 'notes', // 声明所有笔记的目录
            link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
            notes: [
                {
                    dir: 'HTML', // 声明笔记的目录，相对于 `notes.dir`
                    link: '/HTML/', // 声明笔记的链接前缀
                    sidebar: [ // 配置侧边栏
                        {
                            text: 'HTML基础',
                            icon: 'ic:baseline-dashboard',
                            items: ['HTML元素属性相关', 'HTML5新增内容']
                        },
                        {
                            text: 'HTML问题',
                            icon: 'icon-park-outline:file-question',
                            items: ['H5端REM适配方案', 'Canvas实现两张图片合成']
                        },
                        {
                            text: 'HTML方案',
                            icon: 'icon-park-outline:plan',
                            items: ['H5相关问题']
                        },
                    ]
                },
                {
                    dir: 'CSS', // 声明笔记的目录，相对于 `notes.dir`
                    link: '/CSS/', // 声明笔记的链接前缀
                    sidebar: [ // 配置侧边栏
                        {
                            text: 'CSS基础',
                            icon: 'ic:baseline-dashboard',
                            items: ['CSS选择器', 'CSS3新增内容', '样式滤镜 Filter', '网格布局 Grid']
                        },
                        {
                            text: 'CSS问题',
                            icon: 'icon-park-outline:file-question',
                            items: []
                        },
                        {
                            text: 'CSS方案',
                            icon: 'icon-park-outline:plan',
                            items: ['响应式布局方案']
                        },
                    ]
                },
            ]
        },
        // 页脚
        footer: {
            message: '耶温博客|日常记录|前端学习笔记',
            copyright: 'Copyright © 2024'
        }
    }),
    bundler: viteBundler(),
    // 标题
    title: '耶温博客',
    // 介绍
    description: '日常笔记',
    head: [
        ['link', {
            rel: 'icon',
            href: 'icon.png'
        }]
    ],
})

