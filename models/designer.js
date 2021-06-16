"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class designer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      designer.hasMany(models.product);
    }
  }
  designer.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bankaccount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "designer",
    }
  );
  return designer;
};
