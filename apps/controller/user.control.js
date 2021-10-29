const {getUser, postUser, updateUser, dellUser, getOneUser} = require('../services/user.service');

const createUser = async (req, res) => {
    const getData = await postUser(`${req.body.email}`, `${req.body.password}`);
    res.status(200).send('Create User Ok!');
}

const get_One = async (req, res) => {
    const getData = await getOneUser(`${req.body.email}`);
    return getData
}

module.exports = {createUser, get_One};
