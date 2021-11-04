const {getData, postData, dataSensor} = require('../controller/sensor.control');
const authKey = require('../config/token.key');
const express = require('express');

const Sensor = express.Router();

Sensor.get('/:id', getData);
Sensor.get('/id/', authKey, dataSensor)
Sensor.post('/', authKey, postData);

module.exports = Sensor;