import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  css: ["~/assets/css/main.css"],
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    'nuxt-resend',
    '@nuxtjs/sitemap',
    '@nuxt/eslint',
    'motion-v/nuxt'
  ],
  future: {
    compatibilityVersion: 4,
  },
  colorMode: {
    preference: "system",
    classSuffix: ''
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'class-variance-authority',
        'reka-ui',
        'clsx',
        'tailwind-merge',
      ]
    }
  },
  content: {
    database: {
      type: "libsql",
      url: process.env.TURSO_DATABASE_URL!,
      authToken: process.env.TURSO_AUTH_TOKEN!,
    },
    experimental: {
      sqliteConnector: "native",
    }
  }
})
