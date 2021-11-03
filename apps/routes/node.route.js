const express = require('express');
const authKey = require('../config/token.key');
const {getData, dellNode, getId, postData} = require('../controller/node.control');
const Node = express.Router();

Node.get('/', getData);
Node.get('/id/', authKey, getId);
Node.post('/', postData);
Node.delete('/:id', dellNode);

module.exports = Node;