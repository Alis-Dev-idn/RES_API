const express = require('express');
const authKey = require('../config/token.key');
const {getData, dellNode, getId, postData} = require('../controller/node.control');
const Node = express.Router();

Node.get('/user/:id', authKey, getData);
Node.get('/id/:id', authKey, getId);
Node.post('/', authKey, postData);
Node.delete('/:id', authKey, dellNode);

module.exports = Node;