'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { foreignKey: 'userId' ,onDelete:'CASCADE',hooks:true});
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    confirm_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,

    },
    updated_at: {
        type:DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW,
  }
  },
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};