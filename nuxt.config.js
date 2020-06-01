
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/base.scss',
    '~/assets/styles/highlight.scss',
    '~/assets/styles/app.scss'
  ],
  /*
  ** Custom Style SCSS
  */
  styleResources: {
    scss: ['~/assets/styles/tokens.scss']
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-placeholders.js',
    '~/plugins/vue-observe-visibility.client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // 'nuxt-ackee'
  ],
  // ackee: {
  //   server: 'https://ackee.nuxtjs.com',
  //   domainId: '6336379b-8d3e-4069-9d2e-897be6a7ed4e'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
