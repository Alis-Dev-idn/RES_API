const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const NodeSchema = mongoose.Schema({
    user:{
        type: ObjectID,
        require: true
    },
    node_name:{
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('node', NodeSchema);