module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // 指定 vuepress build 的输出目录
  dest: 'dist',
  repo: 'https://github.com/txs1992/mt-blog' ,// 添加 github 链接
  //端口
  port:'86',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: 'home', link: '/' },
      { text: 'bar', link: '/bar/' },
      { text: 'foo', link: '/foo/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
          { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: [
      {
        title: 'vuepress学习笔记',   // 必要的
        path: '/vuepress-note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/'
        ]
      }
    ]
  }
}