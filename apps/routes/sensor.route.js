const {getData} = require('../controller/sensor.control');
const express = require('express');

const Sensor = express.Router();

Sensor.get('/:id', getData);

module.exports = Sensor;