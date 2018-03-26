module.exports = {
  router: {
    base: '/',
    middleware: 'routing',
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/',
        component: resolve(__dirname, 'pages/jochengerz.vue'),
        alias: '/jochengerz'
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
  build: {
    vendor: ['~/plugins/swipe-it.min.js'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
