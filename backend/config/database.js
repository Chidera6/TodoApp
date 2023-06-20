//const config = require('./index');
require('dotenv').config();

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


module.exports = {
development: {
  use_env_variable:'DATABASE_URL',
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
  use_env_variable:'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  pool: {
       max: 10,
       min: 2,
       acquire: 30000,
       idle: 10000,
    },
    seederStorage: 'sequelize',
  }
}
};


