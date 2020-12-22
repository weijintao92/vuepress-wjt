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
        title: 'vuepress笔记',
        path: '/vuepress-note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'siderbar侧边栏',   // 必要的
          path: '/vuepress-note/sidebar',
        }],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },
      {
        title: 'mpx',
        path: '/mpx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在

      },
      {
        title: 'NGINX',
        path: '/nginx/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'nginx配置SSL证书',   // 必要的
          path: '/nginx/configuration_ssl',
        }],
      },
      {
        title: 'PLAN',
        path: '/my_plan/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      },
      {
        title: 'vue-element-admin',
        path: '/vue-element-admin/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
      } 
    ],
    // 最后更新时间
    // https://www.vuepress.cn/theme/default-theme-config.html#algolia-%E6%90%9C%E7%B4%A2
    lastUpdated: 'Last Updated', // string | boolean
    // 页面滚动 1.2.0+
    // 你可以通过 themeConfig.smoothScroll 选项来启用页面滚动效果。
    smoothScroll: true
  }
}