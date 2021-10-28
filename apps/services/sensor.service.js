const SensorSchema = require('../models/sensor.model');
const {model} = require("mongoose");

function getSensor(id ,limit){
    const data = SensorSchema.find({node_id: id}).sort({createdAt: -1}).limit(limit);
    return data;
}

function postSensor(id, temperature, humidity, power){
    const post = SensorSchema({id, temperature, humidity, power})
    post.save();
    return post;
}

function delAll(node_id) {
    const dell = SensorSchema.deleteMany({node_id: node_id})
    return dell;
}

module.exports = {getSensor, postSensor, delAll};