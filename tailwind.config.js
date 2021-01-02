const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");
module.exports = {
  purge: {
    content: [ "./src/**/*.svelte" ],
    options: {
      defaultExtractor: (content) => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
      ],
      keyframes: true,
    },
  },
  theme: {
    colors: {
      'light': {
        'fg': '#333333',
        'bg': '#F6FAFD',
        'bg_border': '#EAECEF',
        'meta': '#586069'
      },
      'dark': {
        'fg': '#C2C2C2',
        'bg': '#252525',
        'bg_border': '#4C4C4C',
        'meta': '#9B9B9B'
      }
    },
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
