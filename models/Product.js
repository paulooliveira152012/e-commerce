// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      //define datatype of the id
      type: DataTypes.INTEGER,
      //does not allow null values
      allowNull: false,
      //set as primery key
      primaryKey: true,
      //auto increments
      autoIncrement: true
    },
    product_name: {
      //define datatype as string
      type: dataTypes.STRING,
      //no null values
      allowNull: false,
    },
    price: {
      //set as decimal
      type: DataTypes.DECIMAL,
      //no null values
      allowNull: false,
      //validates that the value is a decimal
      validate: {
        DECIMAL: true
      }
    },
    stock: {
      //define datatype as integer
      type: DataTypes.INTEGER,
      //NO null values
      allowNull: false,
      //set default value of 10
      default: 10,
      //validates that the value is numeric
      validate: {
        Number: true
      }
    },
    category_id: {
      type: dataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
