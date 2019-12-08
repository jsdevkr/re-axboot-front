const configs = {
  development: {
    URL: 'https://alpha-www.axboot.com',
  },
  alpha: {
    URL: 'https://alpha-www.axboot.com',
  },
  beta: {
    URL: 'https://beta-www.axboot.com',
  },
  production: {
    URL: 'https://www.axboot.com',
  },
};

module.exports = {
  'process.env.API_HOST': (configs[process.env.APP_ENV] || configs[process.env.NODE_ENV] || configs['development']).URL,
};
