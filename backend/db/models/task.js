'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

  }
  Task.init({
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      completed: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue:false
      },
      created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,

      },
      updated_at: {
          type:DataTypes.Date,
          allowNull:false,
          defaultValue: DataTypes.NOW,

      }
    }, 
    
 {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};