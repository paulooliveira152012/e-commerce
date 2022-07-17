const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      //set data type as integer
      type: DataTypes.INTEGER,
      //not null 
      allowNull: false,
      //set as primery key
      primaryKey: true,
      //uses auto increment
      autoIncrement: true,
    },
    product_id: {
      //set as integer
      type: DataTypes.INTEGER,
      //reference the product models's id
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      //set datatype as integer
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
