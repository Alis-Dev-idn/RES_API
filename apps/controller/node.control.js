const {getNode, oneNode, delOneNode, postNode} = require('../services/node.service');
const {delAll} = require('../services/sensor.service');
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
    const getData = await getNode(5);
    res.status(200).send(getData);
}

const postData = async (req, res) => {
    await postNode(`${req.body.name}`);
    res.status(200).send('Ok');
}
module.exports = {getData, dellNode, getId, postData};