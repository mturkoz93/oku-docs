export default defineAppConfig({
  portfolio: {
    socials: {
      github: {
        name: 'GitHub',
        url: 'https://github.com/oku-ui',
        icon: 'mdi:github',
      },
      linkedin: {
        name: 'Discord',
        url: 'https://chat.productdevbook.com',
        icon: 'simple-icons:discord',
      },
      twitter: {
        name: 'Twitter',
        url: 'https://twitter.com/oku_ui',
        icon: 'mdi:twitter',
      },
    },
    github: {
      dir: 'content',
      branch: 'main',
      owner: 'oku-ui/docs',
    },
  },
})
