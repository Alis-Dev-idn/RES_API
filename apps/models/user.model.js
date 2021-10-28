const mongoose =  require('mongoose');

const UserSchema = mongoose.Schema({
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
}, {timestamps: true})

module.exports = mongoose.model('user', UserSchema);