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
  port: '80',
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
        children: [{
          title: '计划',   // 必要的
          path: '/my_plan/',
        },{
          title: '问题清单',   // 必要的
          path: '/my_plan/issueList',
        },{
          title: '还款计划思考',   // 必要的
          path: '/my_plan/RepaymentPlan',
        }],
      },

      {
        title: 'Npm笔记',
        path: '/npm/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },

      {
        title: 'Vuepress笔记',
        path: '/vuepress-note/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'siderbar侧边栏',   // 必要的
          path: '/vuepress-note/sidebar',
        },
        {
          title: '使用vssue增加评论功能',   // 必要的
          path: '/vuepress-note/critic',
        }],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      },

      {
        title: 'Vue笔记',
        path: '/vue',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'Vue杂乱的个人笔记',   // 必要的
          path: '/vue/OtherNote/',
          children: [{
            title: '提取文件中的源码显示在Web前端页面',   // 必要的
            path: '/vue/OtherNote/ShowCode',
          },{
            title: '跨域请求的思考',   // 必要的
            path: '/vue/OtherNote/Cors',
          },{
            title: '前端错误汇总',   // 必要的
            path: '/vue/OtherNote/ErrorList',
          },{
            title: 'gitHub第三方登录',   // 必要的
            path: '/vue/OtherNote/gitHubLogin',
          },{
            title: 'Http状态码详解',   // 必要的
            path: '/vue/OtherNote/HttpCode',
          }]
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
        title: 'MPX',
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

      {
        title: 'MySql',
        path: '/MySql/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
   
      },

      {
        title: 'Python',
        path: '/Python/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        children: [{
          title: 'Django',   // 必要的
          path: '/Python/Django/',
          children:[{
            title: 'swaggger',   // 必要的
            path: '/Python/Django/swagger',
          },
          {
            title: 'python接受前端传递的参数',   // 必要的
            path: '/Python/Django/getParams',
          }]
        },{
          title: 'Python风格规范',   // 必要的
          path: '/Python/PythonStyle',
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
    repo: 'https://github.com/weijintao92/weijintao92.github.io',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'https://github.com/weijintao92/vuepress-wjt',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'main',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  },
  // 评论
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      platform: 'github-v4', //v3的platform是github，v4的是github-v4
      // 其他的 Vssue 配置
      owner: 'weijintao92', //github账户名
      repo: 'weijintao92.github.io', //github一个项目的名称
      clientId: '7bb076189aa05aa2542d',//注册的Client ID
      clientSecret: '4eaf9f9cd4f0580bfb6637b157b3474d264d0df7',//注册的Client Secret
      autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
  },
}