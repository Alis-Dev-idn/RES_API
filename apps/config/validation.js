const joi = require('joi');

const UserVal = joi.object({
    email: joi.string().email({minDomainSegments: 2}).required(),
    password: joi.string().min(8).required(),
});

const SensorVal = joi.object({
    node_id: joi.string().required(),
    suhu: joi.number().min(-100).max(1000).required(),
    kelembaban: joi.number().min(0).max(100).required(),
    power: joi.number().min(0).max(300).required()
});

const NodeVal = joi.object({
    user: joi.string().required(),
    name: joi.string().required()
});

module.exports = {UserVal, SensorVal, NodeVal};