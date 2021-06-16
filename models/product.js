"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.designer);
      product.belongsToMany(models.user, {
        through: "wishlists",
        foreignKey: "productId",
      });
    }
  }
  product.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      addedcost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      designerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
