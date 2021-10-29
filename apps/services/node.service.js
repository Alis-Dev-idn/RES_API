const NodeSchema = require('../models/node.model')

function getNode(limit) {
   const getData =  NodeSchema.find().limit(limit).sort({createdAt: -1});
   return getData;
}

function oneNode(id) {
    const getData = NodeSchema.findOne({_id: id});
    return getData;
}

function delOneNode(id) {
    const delData = NodeSchema.deleteOne({_id: id})
    return delData;
}

function postNode(name){
    const post = NodeSchema({node_name: name});
    post.save();
    return post;
}

module.exports = {getNode, oneNode, delOneNode, postNode};