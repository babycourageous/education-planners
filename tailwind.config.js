/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

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

    colors: {
      transparent: 'transparent',

      black: '#212934',
      'gray-darkest': '#404A59',
      'gray-darker': '#5F6B7A',
      'gray-dark': '#8895A7',
      gray: '#B8C4CF',
      'gray-light': '#CFD6DE',
      'gray-lighter': '#E1E6EB',
      'gray-lightest': '#F8F9FA',
      white: '#ffffff',

      'blue-darkest': '#1D3E4E',
      'blue-darker': '#00486a',
      'blue-dark': '#0078AE', // '#1B7098',
      blue: '#0BADFB', // '#339CCC',
      'blue-light': '#71C8F4', // '#5CAFD6',
      'blue-lighter': '#BAE4F7',
      'blue-lightest': '#E5F7FF',

      overlay: 'rgba(0,0,0,0.6)',
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

    lineHeight: {
      hero: 0.7,
      60: '60px',
      100: '100px',
    },

    height: {
      '60px': '60px',
      '100px': '100px',
      '13': '3.25rem',
      '50vh': '50vh',
      '70vh': '75vh',
    },

    maxHeight: {
      '100px': '100px',
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

    minHeight: {
      '400px': '400px',
    },

    padding: {
      '60px': '60px',
    },

    width: {
      '100px': '100px',
    },

    zIndex: {
      '999': 999,
      'nav-ul': '-2',
    },
  },

  /*
  |-----------------------------------------------------------------------------
  | Variants                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

  variants: {
    fill: [],
    stroke: [],
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

  plugins: [
    ({ addUtilities }) => {
      const newUtilities = {
        '.-transformY-100': {
          transform: 'translateY(-100%)',
        },
      }

      addUtilities(newUtilities, {
        variants: ['responsive'],
      })
    },
  ],
}
