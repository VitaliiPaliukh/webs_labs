'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('cart', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    chainsawId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'chainsaws',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    type: {
        allowNull: false,
        type: Sequelize.STRING,
    }
}, {
    timestamps: true,
    paranoid: true,
    freezeTableName: true,
    modelName: 'cart',
});