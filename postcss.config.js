const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssImport = require('postcss-import')
const postcssNested = require('postcss-nested')
const tailwindCSS = require('tailwindcss')

const mode = process.env.NODE_ENV;
const production = mode === 'production';

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
    postcssImport,
    tailwindCSS(),
    production && cssnano({
      preset: [
        'default',
        {discardComments: {removeAll: true}},
      ],
    }),
  ].filter(Boolean)
}
