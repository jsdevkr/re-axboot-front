const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');
const withImages = require('next-images');
const path = require('path');
const fs = require('fs');

//module.exports =
module.exports = withPlugins(
  [
    [withTypescript],
    [
      withImages,
      {
        inlineImageLimit: 1024,
      },
    ],
    [
      withLess,
      {
        lessLoaderOptions: {
          javascriptEnabled: true,
        },
      },
    ],
    [withSass],
    [
      withCSS,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]___[hash:base64:5]',
        },
      },
    ],
  ],
  {
    webpack(config, options) {
      // Do not run type checking twice:
      const dirs = fs.readdirSync(process.cwd(), { withFileTypes: true });
      // add folder alias
      dirs
        .filter(dir => dir.isDirectory() && !dir.name.startsWith('.') && !['pages', 'node_modules'].includes(dir.name))
        .forEach(dir => {
          config.resolve.alias[dir.name] = path.join(process.cwd(), dir.name);
        });

      return config;
    },
  },
);
