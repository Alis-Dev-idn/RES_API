const mongoose = require('mongoose');
const {config} = require('dotenv');
config();

const MONGO = mongoose.connect(process.env.MONGODB_URL, {})
    .then(() => {
        console.log("Success Connected")
    }).catch(err => {
        console.log(("Fail to Connected" + err.message))
    })

module.exports = MONGO;