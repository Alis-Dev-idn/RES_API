const {getSensor, postSensor, delAll} = require('../services/sensor.service');
const {oneNode} = require('../services/node.service');
const {config} = require('dotenv');
config();

const getData = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const get_data = await getSensor(`${req.params.id}`,10);
    res.render('./request/sensor', {get_data, Base_Url});
}

const postData = async (req, res) => {
    const{node_id, suhu, kelembaban, power} = req.body
    const IdCek = await oneNode(node_id);
    if(!IdCek) return res.status(202).send('data not found!');
    const post = await postSensor(node_id, suhu, kelembaban, power);
    res.status(200).send('success post!');
}

module.exports = {getData, postData};