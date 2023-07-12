require('dotenv').config();
  
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
/*
module.exports = {
  development: {
    username:"postgres",
    password:"chidera",
    database:"todo_app",
    host:"localhost",
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
*/
production: {
  use_env_variable:'DATABASE_URL',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    seederStorage: 'sequelize',
  }
}
};


