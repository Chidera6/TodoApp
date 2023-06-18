
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
    use_env_variable:config.url,
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
    use_env_variable:"postgres://production_o3f6_user:OfPwNIfFpTRrxHy48tlLmJaLOrI0Xam7@dpg-cgs7mh9jvhtj5p6qa190-a.ohio-postgres.render.com/production_o3f6",
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

