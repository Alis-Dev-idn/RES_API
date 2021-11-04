const getToken = require('../controller/token.controler');
const express = require('express');

const Token = express.Router();

Token.post('/', getToken);

module.exports = Token;