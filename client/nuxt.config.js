const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    '~/assets/css/tailwind.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth',
    // Doc: https://github.com/nuxt-community/axios-module#usage
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/login', method: 'post', propertyName: 'token' },
          logout: {url: '/logout', method: 'post'},
          user: {url: '/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/admin'
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: 'http://localhost:5050/'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
