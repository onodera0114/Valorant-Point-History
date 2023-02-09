// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css', '~/assets/scss/common.scss'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";'
        }
      }
    },
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  }
})
