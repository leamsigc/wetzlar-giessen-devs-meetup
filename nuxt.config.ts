import { resolve } from 'path'
import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  // ssr: true,
  nitro: { prerender: { routes: ['/sitemap.xml'] } },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@unlighthouse/nuxt',
    'nuxt-schema-org',
    '@nuxt/image-edge',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: true,
  },
  colorMode: {
    classSuffix: '',
  },
  content: {
    // watch: {
    //   ws: { port: 4000, showUrl: true },
    // },
    locales: ['en', 'es'],
    defaultLocale: 'en',
    sources: ['content', {
      name: 'es',
      prefix: '/es',
      // All contents inside this source will be prefixed with `/fa`
      driver: 'fs', // ...driverOptions
      base: resolve(__dirname, 'content-es'), // Path for source directory
    },
    // {
    //   name: 'en',
    //   prefix: '',
    //   // All contents inside this source will be prefixed with `/fa`
    //   driver: 'fs', // ...driverOptions
    //   base: resolve(__dirname, 'content'), // Path for source directory
    // }
    ],
  },
  unlighthouse: {
    scanner: {
      // simulate a desktop device
      device: 'mobile',
    },

  },
  schemaOrg: {
    // set to your production domain
    canonicalHost: 'https://giessen.dev',
  },
  // image: { dir: 'public/' },
})
