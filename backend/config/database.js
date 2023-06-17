
/*
module.exports = {

    development: {
      username: "postgres",
      password: "chidera",
      database: "todo_app",
      host: "127.0.0.1",
      dialect: "postgres"

    }
  }  


  */

  const database = require('./index');
  module.exports = {
  development: {
    url:config.url,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    seederStorage: 'sequelize'
  }
  
},
  
production: {
    url: config.url,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};

