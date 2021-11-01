const {getSensor, postSensor, delAll} = require('../services/sensor.service');
const {oneNode} = require('../services/node.service');
const {SensorVal} = require('../config/validation');
const {config} = require('dotenv');
config();

const getData = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const get_data = await getSensor(`${req.params.id}`,10);
    res.render('./request/sensor', {get_data, Base_Url});
}

const postData = async (req, res) => {
    const {error} = SensorVal.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    const{node_id, suhu, kelembaban, power} = req.body
    const IdCek = await oneNode(node_id);
    if(!IdCek) return res.status(202).send('data not found!');
    const post = await postSensor(node_id, suhu, kelembaban, power);
    res.status(200).send('ok');
}

const dataSensor = async (req, res) => {
    const get_data = await getSensor(`${req.params.id}`, 10);
    res.status(200).send(get_data);
}

module.exports = {getData, postData, dataSensor};