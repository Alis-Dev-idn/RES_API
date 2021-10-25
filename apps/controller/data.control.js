const NodeSchema = require('../models/node.model');
const axios = require('axios');
const SensorSchema = require('../models/sensor.model');
const {config} = require('dotenv');
const {get} = require("mongoose");
const {toJSON} = require("express-session/session/cookie");
const {json} = require("express");
const jwt = require('jsonwebtoken');
config();

const Index_data = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const node_data = await NodeSchema.find();
    res.render('index', {
        title: "Example",
        Base_Url,
        node_data
    });
}

const Post_Node = async (req, res) => {
    try{
        const {name} = req.body;
        const nama = req.body.name
        const post_node = await NodeSchema({node_name: name});
        post_node.save();
        // await sleep(1000);
        //
        // const get_id = await NodeSchema.findOne({node_name: `${nama}`});
        // const post_sensor = await SensorSchema({node_id: `${get_id.id}`});
        // post_sensor.save();
        res.status(200).json("ok");
    }catch (err){
        res.status(400)
    }
}

const Post_Sensor = async (req, res) => {
    const{node_id, suhu, kelembaban, power} = req.body
    const idCek = await NodeSchema.findById(node_id);
    if(!idCek) return res.status(202).send('data not found');
    const post_sensor = await SensorSchema({node_id, suhu, kelembaban, power});
    post_sensor.save();
    res.status(200).send('Ok');
}

const get_node = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const get_data = await NodeSchema.find().sort({createdAt: -1}).limit(5);
    res.render('./request/node', {get_data, Base_Url});
}

const get_node_id = async (req, res) => {
    const get_data = await NodeSchema.find().sort({createdAt: -1}).limit(5);
    res.status(200).send(get_data);
}

const get_sensor = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const get_data = await SensorSchema.find({node_id: req.params.id}).sort({createdAt: -1}).limit(10);
    res.render('./request/sensor', {get_data, Base_Url});
}

const del_node = async (req, res) => {
    await NodeSchema.deleteOne({_id: req.params.id});
    await SensorSchema.deleteMany({node_id: req.params.id})
}

//=================================//
const get_One = async (req, res) => {

    const data = await SensorSchema.find({node_id: req.params.id});
    // const dataj = JSON.stringify(data);
    res.render('data', {data});
}
//=================================//

const get_token = async (req, res) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) + (60 * 5)
    }, process.env.API_KEY);
    res.header('token', token).send({token: token});
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = {
    Index_data,
    Post_Node,
    Post_Sensor,
    get_node,
    del_node,
    get_sensor,
    get_One,
    get_node_id,
    get_token
};
