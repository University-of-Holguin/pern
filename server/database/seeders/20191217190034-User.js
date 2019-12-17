"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jane Doe",
          email: "janedoe@example.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ana Berts",
          email: "anas@example.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),
  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {})
};
