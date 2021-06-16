"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tags: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imageurl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      addedcost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      designerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "designers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
