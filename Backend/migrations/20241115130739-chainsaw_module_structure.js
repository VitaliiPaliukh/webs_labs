'use strict';

const {Sequelize} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('chainsaws', 'description', {
      allowNull: false,
      type: Sequelize.STRING
    });
    await queryInterface.addColumn('chainsaws', 'rate', {
      allowNull: false,
      type: Sequelize.INTEGER
    });
    await queryInterface.addColumn('chainsaws', 'size', {
      allowNull: false,
      type: Sequelize.STRING
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('chainsaws', 'description');
    await queryInterface.removeColumn('chainsaws', 'rate');
    await queryInterface.removeColumn('chainsaws', 'size');
  }
};