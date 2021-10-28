const UserSchema = require('../models/user.model');

function getUser(){
    const getData = UserSchema.find({_id:0, password: 0}).limit(5);
    return getData;
}

function postUser(email, password){
    const post = UserSchema({email, password});
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

module.exports = {getUser, postUser, updateUser, dellUser}