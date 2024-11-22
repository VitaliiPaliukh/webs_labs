'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/database');


module.exports = sequelize.define('chainsaws', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    allowNull: false,
    type: Sequelize.STRING
  },
  RPM: {
    type: Sequelize.INTEGER
  },
  power: {
    type: Sequelize.INTEGER
  },
  rate: {
    allowNull: false,
    type: Sequelize.INTEGER
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING
  },
  size: {
    allowNull: false,
    type: Sequelize.STRING
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  deletedAt: {
    type: Sequelize.DATE,
  }
}, {
  paranoid: true,
  freezeTableName: true,
  modelName: 'chainsaws',
});