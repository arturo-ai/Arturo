import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Arturo',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },


  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-scrollmagic.js', ssr: false },
    { src: '~plugins/vue-js-modal'},
    { src: '~plugins/vue-matomo.js', ssr: false },
    { src: '~/plugins/v-tooltip.js' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-svg'
  ],

  styleResources: {
    scss: [
      'assets/scss/_variables.scss',
      'assets/scss/helpers/_emCalc.scss',
      'assets/scss/helpers/_helperClasses.scss',
      'assets/scss/helpers/_txtColors.scss',
      'assets/scss/helpers/vertText.scss',
      'assets/scss/mixins/_fluidType.scss.scss',
      'assets/scss/v-tooltip.scss',
    ]
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
