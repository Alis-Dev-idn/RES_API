const NodeSchema = require('../models/node.model')

function getNode() {
   const getData =  NodeSchema.find();
   return getData;
}

function oneNode(id) {
    const getData = NodeSchema.findOne({_id: id});
    return getData;
}

function delOne(id) {
    const delData = NodeSchema.deleteOne({_id: id})
    return delData;
}

module.exports = {getNode, oneNode, delOne};