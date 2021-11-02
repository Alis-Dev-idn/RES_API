const {createUser, get_One, userLogin} = require('../controller/user.control');
const express = require('express');

const User = express.Router();

User.get('/', get_One);
User.post('/login', userLogin);
User.post('/new', createUser);

module.exports = User;