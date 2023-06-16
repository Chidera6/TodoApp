const config = require('./index');
const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize'
  },
  production: {
    use_env_variable: 'postgres://production_o3f6_user:OfPwNIfFpTRrxHy48tlLmJaLOrI0Xam7@dpg-cgs7mh9jvhtj5p6qa190-a.ohio-postgres.render.com/production_o3f6',
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

