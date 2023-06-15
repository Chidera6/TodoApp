module.exports = {
    development: {
      username: 'postgres',
      password: 'chidera',
      database: 'todo_app',
      host: '127.0.0.1',
      dialect: 'postgres'
    },


    production: {
      use_env_variable: 'DATABASE_URL',
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