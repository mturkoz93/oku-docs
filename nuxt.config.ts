import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  site: {
    url: 'https://oku-ui.com',
    name: 'Oku',
    description: 'Oku is a brand and community focused on Vue and Nuxt ecosystem.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg', href: '/icon.svg' }],
    },
  },

  // https://github.com/nuxt-themes/docus
  // extends: '@nuxt-themes/docus',

  modules: [
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    // https://github.com/productdevbookcom/v-plausible
    'v-plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxthq/studio',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtseo/module',
    resolve('./app/module'),
  ],

  oku: {
    icons: ['heroicons'],
  },

  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  css: [
    '~/assets/css/app.css',
  ],

  components: [
    {
      prefix: 'App',
      global: true,
      path: '~/components/app',
    },
    {
      prefix: 'Home',
      global: true,
      path: '~/components/home',
    },
    {
      prefix: 'Mol',
      path: '~/components/mol',
    },
    {
      pathPrefix: true,
      prefix: 'Atom',
      path: '~/components/atom',
    },
    {
      pathPrefix: true,
      prefix: 'Org',
      path: '~/components/org',
    },
    {
      global: true,
      path: '~/components/content',
    },
    {
      global: true,
      path: '~/components/primitives',
    },
    '~/components',
  ],

  plausible: {
    init: {
      domain: 'oku-ui.com',
      apiHost: 'https://rapor.vucod.com',
    },
    // If this is loaded you can make it true, https://github.com/nuxt-modules/partytown
    partytown: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  content: {
    documentDriven: {
      host: 'https://oku-ui.com',
    },
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      preload: ['vue', 'json', 'js'],
    },
  },

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    '/docs/primitives/overview/introduction': {
      redirect: {
        to: '/primitives/introduction/introduction',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/aspet-ratio': {
      redirect: {
        to: '/primitives/components/aspect-ratio',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/avatar': {
      redirect: {
        to: '/primitives/components/avatar',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/checkbox': {
      redirect: {
        to: '/primitives/components/checkbox',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/label': {
      redirect: {
        to: '/primitives/components/label',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/progress': {
      redirect: {
        to: '/primitives/components/progress',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/separator': {
      redirect: {
        to: '/primitives/components/separator',
        statusCode: 301,
      },
    },
    '/docs/primitives/components/toggle': {
      redirect: {
        to: '/primitives/components/toggle',
        statusCode: 301,
      },
    },
    '/about/we': {
      redirect: {
        to: '/oku',
        statusCode: 301,
      },
    },
  },
})
