const NodeSchema = require('../models/node.model')

function getNode() {
   const getData =  NodeSchema.find();
   return getData;
}

function oneNode(id) {
    const getData = NodeSchema.findOne({_id: id});
    return getData;
}

module.exports = {getNode, oneNode};