const {getData, postData, dataSensor} = require('../controller/sensor.control');
const authKey = require('../config/token.key');
const express = require('express');

const Sensor = express.Router();

Sensor.get('/:id', getData);
Sensor.get('/id/:id', authKey, dataSensor)
Sensor.post('/', postData);

module.exports = Sensor;