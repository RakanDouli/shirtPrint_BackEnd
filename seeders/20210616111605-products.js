"use strict";
const Designer = require("../models").designer;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const designer1 = await Designer.findOne({
      where: { email: "test@test.com" },
    });
    const designer2 = await Designer.findOne({
      where: { email: "a@a.com" },
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
        {
          title: "Stay focus",
          tags: "#3DPrint, #Foucus",
          description: "This painting is designed With 3rd technology ",
          imageurl:
            "https://i.pinimg.com/474x/d6/61/f9/d661f9f50e0e82f765be4b696e991a5d.jpg",
          cost: 30,
          addedcost: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer1.id,
        },
        {
          title: "Wave i am comming",
          tags: "#Dragon, #Wave, #Fire",
          description: "This one is designed for people who suffer from heat",
          imageurl:
            "https://icon2.cleanpng.com/20180202/vge/kisspng-printed-t-shirt-gift-spreadshirt-vector-monster-t-shirt-printing-5a7444031e7a65.3468008415175690271249.jpg",
          cost: 30,
          addedcost: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer2.id,
        },
        {
          title: "CowBoy",
          tags: "#cowboy, #western, #vintage",
          description:
            "This painting is made for people who love western movies",
          imageurl:
            "https://banner2.cleanpng.com/20180208/qqe/kisspng-printed-t-shirt-clothing-sleeve-t-shirt-printing-5a7c4af448e068.1129056915180950922985.jpg",
          cost: 30,
          addedcost: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer2.id,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
