const mongoose = require('mongoose');
const NodeSchema = mongoose.Schema({
    node_name:{
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('node', NodeSchema);