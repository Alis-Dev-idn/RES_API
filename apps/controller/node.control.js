const {getNode, oneNode, delOneNode, postNode} = require('../services/node.service');
const {delAll} = require('../services/sensor.service');
const {getOneUser} = require('../services/user.service');
const {compareHast} = require('../services/pass.service');
const {UserVal, NodeVal} = require('../config/validation');
const {config} = require('dotenv');
config();

const getData = async (req, res) => {
    const get_data = await getNode(5);
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT;
    res.render('./request/node', {get_data, Base_Url});
}

const dellNode = async (req, res) => {
    await delOneNode(req.params.id);
    await delAll(req.params.id);
    res.status(200).send('Ok');
}

const getId = async (req, res) => {
    //validation
    const {cekInput} = UserVal.validate(req.body);
    if(cekInput) return res.status(400).send(cekInput.details[0].message)
    //cek user ada atau tidak
    const cekUser = getOneUser(`${req.header('email')}`, 1);
    if(!cekUser) return res.status(401).send('User not Found!')
    //cek password
    const cekToken = compareHast(`${req.header('password')}`, `${cekUser}`);
    if(!cekToken) return res.status(401).send('password wrong!');
    //ambil data
    const getData = await getNode(5);
    res.status(200).send(getData);
}

const postData = async (req, res) => {
    const {user, name} = req.body;
    const {error} = NodeVal.validate({user, name});
    if(error) return res.status(400).send(error.details[0].message);
    await postNode(`${user}`, `${name}`);
    res.status(200).send(`Success Add ${name}`);
}
module.exports = {getData, dellNode, getId, postData};