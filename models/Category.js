const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

//category has no refferences, products will have!

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      //defining the type of data
      type: DataTypes.INTEGER,
      //equivalent to not null on SQL
      allowNull: false,
      //key suit for foreign interactions
      primaryKey: true,
      //auto increment
      autoIncrement: true

    }, 
    category_name: {
      //defining string as the data type for category_name
      type: DataTypes.STRING ,
      //doesn't allow null values
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
