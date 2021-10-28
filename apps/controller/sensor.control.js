const {getSensor, postSensor, delAll} = require('../services/sensor.service');
const {config} = require('dotenv');
config();

const getData = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    const get_data = await getSensor(`${req.params.id}`,10);
    res.render('./request/sensor', {get_data, Base_Url});
}

module.exports = {getData};