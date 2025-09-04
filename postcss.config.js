module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'not dead',
        'not ie 11'
      ]
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        minifySelectors: true,
        minifyParams: true,
        mergeLonghand: true,
        mergeRules: true,
      }]
    }),
    // Add CSS custom properties support
    require('postcss-custom-properties')({
      preserve: false
    }),
    // Add modern CSS features
    require('postcss-preset-env')({
      stage: 1,
      features: {
        'custom-selectors': true,
        'nesting-rules': true,
        'color-function': true
      }
    })
  ]
}; 