"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsTo(models.user);
      order.belongsToMany(models.product, {
        through: "order_product_items",
        foreignKey: "productId",
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
