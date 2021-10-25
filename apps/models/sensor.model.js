const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;

const SensorSchema = mongoose.Schema({
    node_id:{
        type: ObjectID,
        require: true
    },
    suhu:{
        type: Number,
        default: 0
    },
    kelembaban:{
        type: Number,
        default: 0
    },
    power:{
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('sensor', SensorSchema);