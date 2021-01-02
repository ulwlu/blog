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
      'fg': '#333333',
      'bg': '#F6FAFD',
      'meta': '#586069'
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
