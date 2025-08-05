import { withMermaid } from 'vitepress-plugin-mermaid'
// import { align } from '@mdit/plugin-align'
/* import { imgLazyload } from '@mdit/plugin-img-lazyload' */
// import { imgMark } from '@mdit/plugin-img-mark'
// import { imgSize, obsidianImageSize } from '@mdit/plugin-img-size'
// import { include } from '@mdit/plugin-include'
// import { figure } from '@mdit/plugin-figure'
// import { sub } from '@mdit/plugin-sub'
// import { sup } from '@mdit/plugin-sup'
/* import Container from 'markdown-it-container' */
import { nav, sidebar } from './navigation'
import 'dotenv/config'
import fnGraph from './plugins/fn-graph'

const gID = process.env.GA_ID || 'XXXXXXXXXX'

// https://vitepress.dev/reference/site-config
export default withMermaid({
  themeConfig: {
    logo: '/android-chrome-192x192.png',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/peterkmg/treasure-box' },
      { icon: 'discord', link: 'https://discord.gg/Bjtv7GnZDM' },
    ],

    editLink: {
      pattern: 'https://github.com/peterkmg/treasure-box/edit/main/src/:path',
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },
  },

  mermaid: {
    theme: 'neutral',
  },

  markdown: {
    math: {
      // TODO: figure out how to use latex macros in mathjax
    },
    config(md) {
      md.use(fnGraph)
    },
    // config(md) {
    //   md.use(align)
    //   md.use(sub)
    //   md.use(sup)
    //   md.use(figure)
    //   md.use(imgMark)
    //   md.use(imgLazyload)
    //   md.use(imgSize)
    //   md.use(obsidianImageSize)
    //   md.use(include, {
    //     // your options, currentPath is required
    //     currentPath: (env) => env.filePath,
    //     deep: true,
    //   })
    //   md.use(Container, 'card', {
    //     render: (tokens, idx) => {
    //       const token = tokens[idx]

    //       const title = token.info.trim().slice(5).trim()

    //       const isCardBordered = token.attrs && token.attrs.some(([key]) => key === 'bordered')

    //       const titleHtml = md.render(`## ${title}`)
    //       const demoContent = title ? `<template #title>${titleHtml}</template>` : ''

    //       return token.nesting === 1
    //         ? `<Demo :class="[${isCardBordered} && 'vp-demo-bordered']">${demoContent}`
    //         : '</Demo>\n'
    //     },
    //   })
    // },
  },

  vite: { configFile: '.vitepress/vite.config.ts' },

  title: 'Treasure box',
  description: 'A collection of useful study materials.',

  scrollOffset: 'header',

  srcDir: 'src',
  outDir: 'dist',

  cleanUrls: true,
  ignoreDeadLinks: true,

  sitemap: {
    hostname: 'https://pdkom.web.elte.hu',
  },

  head: [
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=G-${gID}` }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-${gID}');`,
    ],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
})
