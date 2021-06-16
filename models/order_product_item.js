'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_product_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order_product_item.init({
    orderId: DataTypes.INTEGER,
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_product_item',
  });
  return order_product_item;
};