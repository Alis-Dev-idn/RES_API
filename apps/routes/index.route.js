const express = require('express');
const authKey = require('../config/token.key');
const {
    Index_data,
    Post_Node,
    Post_Sensor,
    get_node,
    del_node,
    get_sensor,
    get_One,
    get_node_id,
    get_token
} = require('../controller/data.control');

const Base_Url = process.env.BASE_URL
const Index = express.Router();

Index.get('/', Index_data);
Index.get('/token', get_token);
Index.delete('/:id', del_node);
Index.get('/get/', get_node);
Index.get('/get/id/',authKey ,get_node_id);
Index.get('/get/sensor/:id', get_sensor);
Index.post('/', Post_Node);
Index.post('/sensor/',authKey , Post_Sensor);
Index.get('/sensor/get/:id', get_One);

module.exports = Index;