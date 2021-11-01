const get_token = require('../services/token.service');
const express = require('express');

const Token = express.Router();

Token.get('/', get_token);

module.exports = Token;