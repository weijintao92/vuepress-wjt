module.exports = {
  title: '未金涛的地盘',
  description: '未金涛的地盘',
  //定制头部icon
  head: [
    ['link', { rel: 'rel', href: `docs/.vuepress/public/favicon.ico` }]
  ],
  // 指定 vuepress build 的输出目录
  dest: 'dist',
  repo: 'https://github.com/weijintao92/vuepress-wjt',// 添加 github 链接
  //端口
  port: '86',
  // 显示代码片段行号
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'home', link: '/' },
      { text: 'vuepress-note', link: '/vuepress-note/' },
      {
        text: '我的',
        // 这里是下拉列表展现形式。
        items: [
          { text: '我的个人博客', link: 'https://blog.csdn.net/weixin_39753511?spm=1011.2124.3001.5113' }
        ]
      }
    ],
    //#内置 搜索
    // 你可以通过设置 themeConfig.search: false 来禁用默认的搜索框，
    // 或是通过 themeConfig.searchMaxSuggestions 来调整默认搜索框显示的搜索结果数量：
    // search: false,
    // searchMaxSuggestions: 10,
    // displayAllHeaders: true, // 默认值：false
    sidebar: [
      {
        title: '首页',   // 必要的
        path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: []
      },

      {
        title: 'PLAN',
        path: '/my_plan/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },

      {
        title: 'Npm笔记',
        path: '/npm/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },

      {
        title: 'vuepress笔记',
        path: '/vuepress-note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'siderbar侧边栏',   // 必要的
          path: '/vuepress-note/sidebar',
        }],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },

      {
        title: 'Vue笔记',
        path: '/vue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'Vue杂乱的个人笔记',   // 必要的
          path: '/vue/OtherNote/'
        }, {
          title: 'VueRouter',   // 必要的
          path: '/vue/Router',
          children: [{
            title: 'VueRouter 动态路由配置的坑',   // 必要的
            path: '/vue/Router/VueRouter',
          }]
        }, {
          title: '第三方插件',   // 必要的
          path: '/vue/OtherPlugin',
          children: [{
            title: 'Clipboard 复制插件',   // 必要的
            path: '/vue/OtherPlugin/Clipboard',
          }, {
            title: 'Highlight 在页面中高亮显示代码',   // 必要的
            path: '/vue/OtherPlugin/Highlight',
          }]
        }],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },

      {
        title: 'mpx',
        path: '/mpx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },

      {
        title: 'Vue-element-admin',
        path: '/vue-element-admin/',
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
      },

      {
        title: 'NGINX',
        path: '/nginx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'nginx配置SSL证书',   // 必要的
          path: '/nginx/configuration_ssl',
        }],
      },


    ],
    // 最后更新时间
    // https://www.vuepress.cn/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2
    lastUpdated: 'Last Updated', // string | boolean
    // 页面滚动 1.2.0+
    // 你可以通过 themeConfig.smoothScroll 选项来启用页面滚动效果。
    smoothScroll: true,

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/weijintao92/weijintao92.github.io.git',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/weijintao92/vuepress-wjt.git',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}