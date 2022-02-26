export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GrandmaSponge',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        src: 'https://analytics.felixklg.dev/VwDrVUy9RFqbFd6.js',
        async: true,
        defer: true,
        body: true,
        'data-website-id': '76ffefd4-02dd-47f5-971d-b7ba56543790',
        'data-domains': 'grandmasponge.com'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['nuxt-umami-module', {
    //   autoTrack: true,
    //   doNotTrack: false,
    //   cache: false,
    //   domains: 'grandmasponge.com',
    //   websiteId: '76ffefd4-02dd-47f5-971d-b7ba56543790',
    //   scriptUrl: 'https://analytics.felixklg.dev/umami.js',
    // }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
