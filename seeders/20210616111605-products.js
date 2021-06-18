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
          description: "This painting is designed after the move Art",
          imageurl:
            "https://shirtprint.netlify.app/img/vectorstock_204-removebg-preview.png",
          cost: 30,
          addedcost: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer1.id,
        },
        {
          title: "Christmas",
          tags: "#SuperMan, #Santa",
          description: "This painting is designed Christmas superheros",
          imageurl: "https://shirtprint.netlify.app/img/3.png",
          cost: 30,
          addedcost: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer1.id,
        },
        {
          title: "Statue of librity",
          tags: "#Statue, #Librity, #4ofjuly",
          description: "This one is designed for people to celebrate 4 of july",
          imageurl: "https://shirtprint.netlify.app/img/Artboard38.png",
          cost: 30,
          addedcost: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer2.id,
        },
        {
          title: "Water Color",
          tags: "#art, #abstract, #creative",
          description:
            "This painting is made for creative artists who can go out of the box",
          imageurl:
            "https://shirtprint.netlify.app/img/vectorstock_21176167-removebg-preview.png",
          cost: 30,
          addedcost: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer2.id,
        },
        {
          title: "The Day of the dead",
          tags: "#Skull, #Mexican, #2november",
          description:
            "Day of the Dead is celebrated in Mexico between October 31st and November 2nd.",
          imageurl: "https://shirtprint.netlify.app/img/4.png",
          cost: 30,
          addedcost: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
          designerId: designer2.id,
        },
        {
          title: "Cute dog",
          tags: "#dogs, #animals, #love",
          description: "lovely cure animated brown dog with lots of hearts",
          imageurl:
            "https://shirtprint.netlify.app/img/vectorstock_33820488-removebg-preview.png",
          cost: 30,
          addedcost: 8,
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
