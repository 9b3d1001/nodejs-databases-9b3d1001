const pkg = require('../../package.json');

module.exports = {
  applicationName: pkg.name,
  mongodb: {
    url: "mongodb://localhost:27017/shopper"
  },
  redis: {
    url: "redis-19816.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    port: "19816",
    password: "BjRk00vtqQzTKIBzNQjI8bOTpF7IWzlh",
    client: null
  },
  mysql: {
    options: {
      host: "localhost",
      port: 3333,
      database: "shopper",
      dialect: "mysql",
      username: "root",
      password: "Passw0rd"
    },
    client: null
  }
};
