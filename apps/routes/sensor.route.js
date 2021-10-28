const {getData, postData} = require('../controller/sensor.control');
const express = require('express');

const Sensor = express.Router();

Sensor.get('/:id', getData);
Sensor.post('/', postData);

module.exports = Sensor;