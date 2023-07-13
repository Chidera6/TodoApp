'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, { foreignKey: 'userId' ,onDelete:'CASCADE'});
    }
  }
  
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
    },
    
  },
  {
      sequelize,
      modelName: "User",
  }
   
  );
  return User;
};