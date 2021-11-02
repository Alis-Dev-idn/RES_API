const {getUser, postUser, updateUser, dellUser, getOneUser, getUserId} = require('../services/user.service');
const {UserVal} = require('../config/validation');
const {compareHast} = require("../services/pass.service");


const createUser = async (req, res) => {
    const getData = await postUser(`${req.body.email}`, `${req.body.password}`);
    res.status(200).send('Create User Ok!');
}

const get_One = async (req, res) => {
    const getData = await getOneUser(`${req.body.email}`);
    return getData
}

const userLogin = async (req, res) => {
    const {error} = UserVal.validate(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    const getData = await getOneUser(`${req.body.email}`);
    if(!getData) return res.status(401).send(`Email (${req.body.email}) tidak terdaftar!`);
    // const cekToken = await compareHast(`${req.body.password}  `, `${getData.password}`);
    // if(!cekToken) return res.status(401).send('password wrong!');
    res.status(200).send(getData._id);
}

module.exports = {createUser, get_One, userLogin};

