// const env = require('./env-config.js');

module.exports = {
  presets: [
    'next/babel',
    [
      '@babel/preset-env',
      {
        targets: 'ie >= 11, cover 99%',
        modules: false,
      },
    ],
    '@zeit/next-typescript/babel',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    [
      'emotion',
      {
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
  ],
};
