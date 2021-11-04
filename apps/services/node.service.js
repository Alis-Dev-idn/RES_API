const NodeSchema = require('../models/node.model')

function getNode(id, limit) {
   const getData =  NodeSchema.find({user: id}).limit(limit).sort({createdAt: -1});
   return getData;
}

async function oneNode(id) {
    const getData = await NodeSchema.findOne({_id: id});
    return getData;
}

async function delOneNode(id) {
    await NodeSchema.deleteOne({_id: id})
}

function postNode(user, name){
    const post = NodeSchema({user: user, node_name: name});
    post.save();
    return post;
}

module.exports = {getNode, oneNode, delOneNode, postNode};