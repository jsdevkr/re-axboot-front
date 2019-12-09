const configs = {
  development: {
    API_HOST: 'https://alpha-www.querypie.com',
  },
  alpha: {
    API_HOST: 'https://alpha-www.querypie.com',
  },
  beta: {
    API_HOST: 'https://beta-www.querypie.com',
  },
  production: {
    API_HOST: 'https://www.querypie.com',
  },
};

module.exports = {
  'process.env.API_HOST': (configs[process.env.APP_ENV] || configs[process.env.NODE_ENV] || configs['development'])
    .API_HOST,
};
