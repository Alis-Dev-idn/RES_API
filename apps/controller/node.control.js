const {getNode, oneNode, delOneNode, postNode} = require('../services/node.service');
const {config} = require('dotenv');
config();

const getData = async (req, res) => {
    const get_data = await getNode(5);
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT;
    res.render('./request/node', {get_data, Base_Url});
}

module.exports = {getData};