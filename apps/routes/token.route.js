const getToken = require('../controller/token.controler');
const express = require('express');

const Token = express.Router();

Token.get('/', getToken);

module.exports = Token;