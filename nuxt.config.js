const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | だいたい名古屋',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },

      { hid: 'og:site_name', property: 'og:site_name', content: 'だいたい名古屋' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://daitai.nagoya' },
      { hid: 'og:title', property: 'og:title', content: 'だいたい名古屋' },
      { hid: 'og:description', property: 'og:description', content: '生粋の名古屋人が名古屋の「だいたい」を発信。' },
      { hid: 'og:image', property: 'og:image', content: 'https://daitai.nagoya/ogp-image.png'},
      
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
    'nuxt-leaflet',
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GA_ID || require('./.contentful.json').GA_ID
      },
    ],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  markdownit: {
    injected: true,
  },
  
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID || require('./.contentful.json').CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN || require('./.contentful.json').CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID || require('./.contentful.json').CTF_BLOG_POST_TYPE_ID,
    FORMS_API: process.env.FORMS_API,
    GA_ID: process.env.GA_ID || require('./.contentful.json').GA_ID,
  },

  sitemap: {
    path: 'sitemap.xml',
    hostname: 'https://daitai.nagoya',
    cacheTime: 1000 * 60 * 15,
    generate: false,
  },

}
