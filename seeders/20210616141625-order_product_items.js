"use strict";
const Product = require("../models").product;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product1 = await Product.findOne({
      where: { title: "Abstract" },
    });
    const product2 = await Product.findOne({
      where: { title: "Christmas" },
    });
    const product3 = await Product.findOne({
      where: { title: "Water Color" },
    });
    await queryInterface.bulkInsert(
      "order_product_items",
      [
        {
          orderId: 1,
          size: "M",
          color: "green",
          type: "long sleeve",
          quantity: 1,
          productId: product1.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   orderId: 1,
        //   size: "L",
        //   color: "white",
        //   type: "short sleeve",
        //   quantity: 2,
        //   productId: product2.id,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   orderId: 2,
        //   size: "S",
        //   color: "white",
        //   type: "short sleeve",
        //   quantity: 1,
        //   productId: product3.id,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("order_product_items", null, {});
  },
};
