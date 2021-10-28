const express = require('express');
const {getData} = require('../controller/node.control');
const Node = express.Router();

Node.get('/', getData);

module.exports = Node;