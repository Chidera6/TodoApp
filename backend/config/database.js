const config = require('./index');
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
    url:"postgres://production_o3f6_user:OfPwNIfFpTRrxHy48tlLmJaLOrI0Xam7@dpg-cgs7mh9jvhtj5p6qa190-a.ohio-postgres.render.com/production_o3f6",
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: false,
        rejectUnauthorized: false
      },
    seederStorage: 'sequelize'
  }
  
},
  
production: {
    url: 'postgres://production_o3f6_user:OfPwNIfFpTRrxHy48tlLmJaLOrI0Xam7@dpg-cgs7mh9jvhtj5p6qa190-a/production_o3f6',
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

