const { resolve } = require('path');
const presetEnv = require('postcss-preset-env');

module.exports = {
  map: false,
  plugins: [
    presetEnv({
      features: {
        'nesting-rules': true,
        'custom-media-queries': {
          importFrom: resolve(__dirname, 'src/common/vars.css'),
        },
        'prefers-color-scheme-query': false,
      },
    }),
  ],
};
