const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      //set data type as integer
      type: DataTypes.INTEGER,
      //specify it does not accepts null values
      allowNull: false,
      //set as primery key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true,
    },
    tag_name: {
      //set type as string
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
