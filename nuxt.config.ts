// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  extends: [
    './layers/store',
    './layers/ui',
    './layers/landing',
    './layers/admin',
    './layers/blog',
    './layers/docs',
  ],
  modules: [
    "nuxt-icon",
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@element-plus/nuxt',
  ],
  
  plugins: ["~/plugins/preline.client.ts"],
  app: {
    head: {
      script: [
        {
          src: 'js/core.bundle.js', 
          type: 'text/javascript',
          defer: true,  // defer loading the script
        },
      ],
    },
  },
  compatibilityDate: "2024-08-24",
});