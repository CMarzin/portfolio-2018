module.exports = {
  router: {
    base: '/',
    middleware: 'routing',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/influenceurs.vue'),
        alias: '/influenceurs'
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Corentin Marzin',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'portfolio inspired by the work of M.Mondrian, made with nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: false,
  /*
  ** Build configuration
  */
  css: [
    // SCSS file in the project
    '@/assets/styles/main.scss'
  ],
  plugins: [
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~/plugins/swipe-it.min.js',
      ssr: false
    }
  ],
  modules: [
    'nuxt-webfontloader'
  ],
  webfontloader: {
    custom: {
      families: ['EksellDisplayLarge', 'MaisonNeueBook', 'MaisonNeueMono'],
      urls: ['/fonts/fonts.css']
    }
  },
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules\/(?!(dom7|ssr-window)\/).*/,
          hardSource: true,
          parallel: true,
          cache: true
        })
      }
    }
  }
}
