
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

  const config = require('./index');
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
    use_env_variable: config.url,
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

