const configs = {
  development: {
    API_HOST: "https://alpha-www.axboot.com"
  },
  alpha: {
    API_HOST: "https://alpha-www.axboot.com"
  },
  beta: {
    API_HOST: "https://beta-www.axboot.com"
  },
  production: {
    API_HOST: "https://www.axboot.com"
  }
};

module.exports = {
  "process.env.API_HOST": (
    configs[process.env.APP_ENV] ||
    configs[process.env.NODE_ENV] ||
    configs["development"]
  ).API_HOST
};
