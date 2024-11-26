const cart = require('../models/cart');
const { Op } = require('sequelize');

const get = async (req, res) => {
    const cart1 = await cart.findAll()
        .then(data => {
            res.status(200).json({
                status: 200,
                data: data,
            })
        }).catch(err => {
            res.status(500).send({
               message: err.message || "Error"
            })
        })
}

const create = async (req, res) => {
    if (!req.body){
        return res.status(400).send({
            message: "No data",
        })
    }
    const {chainsawId, amount, type} = req.body;

    try {
        const existingCart = await cart.findOne({
            where: {
                chainsawId: chainsawId,
                type: type,
            }
        })
        if (existingCart){
            existingCart.amount += amount/1;
            await existingCart.save();
            return res.status(201).json(existingCart);
        } else {
            const newCart = await cart.create({
                chainsawId: chainsawId,
                amount: amount,
                type: type,
            })
            return res.status(201).json(newCart);
        }
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the chainsaw."
        });
    }
}

const update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const cartbyId = await cart.findByPk(id);

        if (!cartbyId){
            return res.status(404).send({
                message: 'No cart',
            })
        }
        cartbyId.chainsawId = body.chainsawId;
        cartbyId.amount = body.amount;
        cartbyId.type = body.type;
        await cartbyId.save();
        res.status(204).send();
    } catch (err) {
        res.status(500).send({
            message: 'Error',
        })
    }
}

const deleteById = async (req, res) => {
    const id = req.params.id;

    try {
        const cartFind = await cart.findByPk(id);
        if (!cartFind) {
            console.error(`Cart with id=${id} not found`);
            return res.status(404).send({
                message: `Cannot delete cart with id=${id}. Cart not found`
            });
        }
        await cartFind.destroy();
        return res.status(204).send();
    } catch (err) {
        console.error(`Error deleting cart with id=${id}:`, err);
        return res.status(500).send({
            message: "Error deleting cart with id=" + id
        });
    }
}

module.exports = { create, get, update, deleteById};