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
        'fg': '#111A1F',
        'bg': '#8197A5',
        'bg_border': '#738C9C',
        'meta': '#2E383E'
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
