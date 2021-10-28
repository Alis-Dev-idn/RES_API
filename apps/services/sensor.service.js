const SensorSchema = require('../models/sensor.model');
const {model} = require("mongoose");

function getSensor(){
    const data = SensorSchema.find().sort({createdAt: -1}).limit(10);
    return data;
}

function postSensor(id, name, temperature, humidity, power){
    const post = SensorSchema({id, name, temperature, humidity, power})
    post.save();
    return post;
}

function delAll(node_id) {
    const dell = SensorSchema.deleteMany({node_id: node_id})
    return dell;
}

module.exports = {getSensor, postSensor, delAll};