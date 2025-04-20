// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    cdnURL: '/N-U-E/'
  },
  nitro: {
    prerender: {
      failOnError: false, // ←念のため false にしよう
      crawlLinks: true,   // ← crawler がリンクを辿れるように
    }
  },
  generate: {
    dir: 'docs'
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false }
})
