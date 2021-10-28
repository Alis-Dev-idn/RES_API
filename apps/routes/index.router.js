const express = require('express');
const {Home} = require('../controller/index.control');

const Index = express.Router();

Index.get('/', Home);

module.exports = Index;
