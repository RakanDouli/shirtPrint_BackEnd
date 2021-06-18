"use strict";
const Product = require("../models").product;
const User = require("../models").user;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });
    const user2 = await User.findOne({
      where: { email: "a@a.com" },
    });
    const product1 = await Product.findOne({
      where: { title: "Abstract" },
    });
    const product2 = await Product.findOne({
      where: { title: "Christmas" },
    });
    await queryInterface.bulkInsert(
      "wishlists",
      [
        {
          userId: user1.id,
          productId: product1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          productId: product2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("wishlists", null, {});
  },
};
