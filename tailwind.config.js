const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    fontFamily: {
      sans: ['PT Sans', 'sans-serif'],
      serif: ['Constantia', 'Georgia', 'serif'],
      mono: ['Menlo', 'Courier New', 'monospace'],
    },

    fontWeight: {
      normal: 400,
      bold: 700,
    },
    maxWidth: {
      xs: '20rem',
      sm: '30rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%',
    },

    extend: {
      colors: {
        transparent: 'transparent',

        black: '#212934',
        // 'grey-darkest': '#404A59',
        // 'grey-darker': '#5F6B7A',
        // 'grey-dark': '#8895A7',
        // grey: '#B8C4CF',
        // 'grey-light': '#CFD6DE',
        // 'grey-lighter': '#E1E6EB',
        // 'grey-lightest': '#F8F9FA',
        // white: '#ffffff',

        'blue-darkest': '#1D3E4E',
        'blue-darker': '#00486a',
        'blue-dark': '#0078AE', // '#1B7098',
        blue: '#0BADFB', // '#339CCC',
        'blue-light': '#71C8F4', // '#5CAFD6',
        'blue-lighter': '#BAE4F7',
        'blue-lightest': '#E5F7FF',

        overlay: 'rgba(0,0,0,0.6)',
      },

      lineHeight: {
        hero: 0.7,
        60: '60px',
        100: '100px',
      },
      height: {
        '60px': '60px',
        '100px': '100px',
        13: '3.25rem',
        '50vh': '50vh',
        '70vh': '75vh',
      },
      maxHeight: {
        '100px': '100px',
      },
      minHeight: {
        '400px': '400px',
      },
      margin: {
        7: '1.75rem', // 28
      },

      padding: {
        '60px': '60px',
        14: '3.5rem',
      },
      width: {
        '100px': '100px',
      },
      zIndex: {
        999: 999,
        'nav-ul': '-2',
      },
    },
  },

  // variants: {
  //   fill: [],
  //   stroke: [],
  // },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.6)',
        },
      })
    }),

    plugin(function ({ addComponents }) {
      addComponents({
        '.wrapper': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          columnGap: '1rem',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
        },
      })
    }),
  ],
  purge: {
    content: ['./src/**/*.html', './src/**/*.njk', './_11ty/**/*.js'],
    options: {
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: {
        standard: [/^flickity/],
        deep: [/^flickity/],
      },
    },
  },
}
