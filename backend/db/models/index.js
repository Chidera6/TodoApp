'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
//const config = require(__dirname + '/../../config/database.js')[env];
const config = require('../../config/database.js')[env];
const db = {};

/*
let sequelize;
if (config.use) {
  sequelize = new Sequelize(process.env[config.url], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
*/
let sequelize;
//if (config.use_env_variable) {
//  sequelize = new Sequelize(process.env[config.url], config);
//  console.log(sequelize);

//} else {
sequelize = new Sequelize(`${config.use_env_variable}`,config);
//};


// {
  //
  //sequelize = new Sequelize(config.database, config.username, config.password, config);
//}

//const sequelize = new Sequelize(`${config.url}`);
//console.log(sequelize);

//const sequelize = new Sequelize(process.env[${config.url}], config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
