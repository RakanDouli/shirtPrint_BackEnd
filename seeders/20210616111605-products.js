"use strict";
const Designer = require("../models").designer;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const designer1 = await Designer.findOne({
      where: { email: "test@test.com" },
    });
    await queryInterface.bulkInsert(
      "products",
      [
        {
          title: "Abstract",
          tags: "#art, #Abstract, #colorful",
          description: "This painting is designed after the move Lion King",
          imageurl:
            "https://img.favpng.com/4/15/15/african-elephant-t-shirt-watercolor-painting-png-favpng-XkM9hxT2hDvgrvSH7yNJs738R_t.jpg",
          cost: 30,
          addedcost: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer1.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
