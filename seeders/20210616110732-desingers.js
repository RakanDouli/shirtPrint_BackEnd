"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "designers",
      [
        {
          name: "testuser",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          adress: "ankaradreef,20,3564vk,utrecht,the netherlands",
          bankaccount: "NL10INGB100100100",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          adress: "ankaradreef,20,3564vk,utrecht,the netherlands",
          bankaccount: "NL10INGB100100100",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("designers", null, {});
  },
};
