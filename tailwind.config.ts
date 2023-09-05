import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

import Typography from '@tailwindcss/typography'

import { blackA, codGray, grayA, oku } from './colors'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Inter', 'Inter fallback', ...defaultTheme.fontFamily.sans],
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blackA: {
          ...blackA,
        },
        grayA: {
          ...grayA,
        },
        oku: {
          ...oku,
        },
        codGray: {
          ...codGray,
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            pre: {
              backgroundColor: 'transparent',
              margin: 0,
              padding: 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['fa-brands', 'heroicons', 'ph', 'ic']),
    }),
    Typography,
  ],
}
