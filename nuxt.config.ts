// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    cdnURL: '/zatta-site/'
  },
  generate: {
    dir: 'docs'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})
