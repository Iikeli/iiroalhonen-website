const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Iiro Alhonen',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Work',
        link: '/work/'
      }
    ],
    displayAllHeaders: true,
    sidebar: {
      '/blog/': [
        {
          title: '2021',
          path: '/blog/2021/',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['blog/2021/Road-to-my-first-iOS-job', 'Road to my first iOS job']
          ]
        }
      ],
      '/work/': [
        {
          title: 'Apps',
          path: '/work/apps/',
          collapsable: false,
          children: [
            '/',
            ['/Bean-Juice', 'Bean Juice'],
            ['/Nifty-Markdown-Formatter', 'Nifty Markdown Formatter']
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
