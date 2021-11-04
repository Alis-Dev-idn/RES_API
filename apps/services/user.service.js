const UserSchema = require('../models/user.model');
const {PassHast} = require('./pass.service');

function getUser(limit){
    const getData = UserSchema.find().limit(limit);
    return getData;
}

function getOneUser(email) {

    const getData = UserSchema.findOne({email: email});
    return getData;
}

function getUserId(Id){
    const getData = UserSchema.findById(Id);
    return getData;
}

async function postUser(email, password){
    const HastData = await PassHast(password);
    const post = await UserSchema({email: email, password: HastData});
    post.save();
    return post;
}

function updateUser(id, password){
    const update = UserSchema.updateOne({_id: id, password: password});
    return update;
}

function dellUser(id){
    const dell = UserSchema.deleteOne({_id: id});
}

module.exports = {getUser, postUser, updateUser, dellUser, getOneUser, getUserId}