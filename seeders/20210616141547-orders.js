"use strict";
const User = require("../models").user;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const user1 = await User.findOne({
      where: { email: "test@test.com" },
    });
    const user2 = await User.findOne({
      where: { email: "a@a.com" },
    });
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: user1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: user2.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
