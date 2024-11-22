const chainsaws = require('../models/chainsaw');
const { Op } = require('sequelize');

const get = async (req, res) => {
    const { sort, filter, power, rate, size, pageSize, pageAmount } = req.query;

    let queryOptions = {};

    if (sort) {
        switch (sort) {
            case 'power_asc':
                queryOptions.order = [['power', 'ASC']];
                break;
            case 'power_desc':
                queryOptions.order = [['power', 'DESC']];
                break;
            case 'a-z':
                queryOptions.order = [['title', 'ASC']];
                break;
            case 'z-a':
                queryOptions.order = [['title', 'DESC']];
                break;
            default:
                break;
        }
    }

    if (filter) {
        queryOptions.where = {
            title: {
                [Op.like]: `%${filter.trim()}%`
            }
        };
    }

    if (power) {
        queryOptions.where = {
            ...queryOptions.where,
            power: {
                [Op.gte]: power
            }
        };
    }

    if (rate) {
        queryOptions.where = {
            ...queryOptions.where,
            rate: {
                [Op.gte]: rate
            }
        }
    }

    if (size) {
        switch (size) {
            case 'S':
                queryOptions.where = {
                    ...queryOptions.where,
                    size: 'S'
                };
                break;
            case 'M':
                queryOptions.where = {
                    ...queryOptions.where,
                    size: 'M'
                };
                break;
            case 'L':
                queryOptions.where = {
                    ...queryOptions.where,
                    size: 'L'
                };
                break;
            default:
                break;
        }
    }

    if (pageSize && pageAmount) {
        queryOptions.limit = parseInt(pageSize);
        queryOptions.offset = parseInt(pageSize) * (parseInt(pageAmount) - 1);
    }

    const chainsaw = await chainsaws.findAll(queryOptions)
        .then(data => {
            res.status(200).json({
                status: 200,
                data: data,
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chainsaw."
            });
        });
};

const getById = async (req, res, next) => {
    const id = req.params.id;

    const chainsawId = await chainsaws.findByPk(id)
        .then(data => {
            res.status(200).json({
                status: 200,
                data: data,
            });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving chainsaw with id=" + id
            });
        });
};

const create = async (req, res, next) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const { title, rpm, power, size, description } = req.body;

    try {
        const existingChainsaw = await chainsaws.findOne({
            where: {
                title: title,
            }
        });

        if (existingChainsaw) {
            return res.status(409).json({
                status: 409,
                message: "A chainsaw with the same title already exists."
            });
        }

        const newChainsaw = await chainsaws.create({
            title: title,
            RPM: rpm,
            power: power,
            description: description,
            size: size,
            rate: Math.floor(Math.random() * 5) + 1,
        });

        return res.status(201).json(newChainsaw);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the chainsaw."
        });
    }
};

const deleteById = async (req, res, next) => {
    const id = req.params.id;

    try {
        const chainsawById = await chainsaws.findByPk(id);

        if (!chainsawById) {
            console.error(`Chainsaw with id=${id} not found`);
            return res.status(404).send({
                message: `Cannot delete chainsaw with id=${id}. Chainsaw not found`
            });
        }
        await chainsawById.destroy();

        console.log(`Chainsaw with id=${id} deleted successfully`);
        return res.status(204).send(); // Ensure response is sent
    } catch (err) {
        console.error(`Error deleting chainsaw with id=${id}:`, err);
        return res.status(500).send({
            message: "Error deleting chainsaw with id=" + id
        });
    }
};
const update = async (req, res, next) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const chainsawByID = await chainsaws.findByPk(id);

        if (!chainsawByID) {
            return res.status(404).send({
                message: `Cannot update chainsaw with id=${id}. Chainsaw not found`
            });
        }
        console.log(body)
        chainsawByID.title = body.title;
        chainsawByID.RPM = body.revolutions;
        chainsawByID.power = body.power;
        chainsawByID.description = body.description;
        chainsawByID.size = body.size;
        await chainsawByID.save();

        res.status(204).send();

    } catch (err) {
        res.status(500).send({
            message: "Error updating chainsaw with id=" + id
        });
    }
};

const countPrice = async (req, res, next) => {
    const { ids } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
        return res.status(400).send({
            message: "Invalid input: 'ids' should be a non-empty array."
        });
    }

    try {
        const chainsaw = await chainsaws.findAll({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        });

        const totalPrice = chainsaw.reduce((sum, chainsaw) => sum + (chainsaw.power || 0), 0);

        res.status(200).json({
            status: 'success',
            totalPrice: totalPrice
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while counting the power."
        });
    }
};

module.exports = { create, get, update, deleteById, countPrice, getById };