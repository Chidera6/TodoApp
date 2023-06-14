const config = require('./index');

module.exports = {
    development: {
      username: 'postgres',
      password: 'chidera',
      database: 'todo_app',
      host: '127.0.0.1',
      dialect: 'postgres'
    },


  production: {
    url: config.database,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};