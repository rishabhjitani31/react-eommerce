module.exports = {
  presets: ['next/babel'],
  plugins: [
    'styled-components',
    'macros',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './'
        }
      }
    ],
    ['transform-define', require('./env-config.js')]
  ]
}
