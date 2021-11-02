const jwt = require('jsonwebtoken');

function get_token(){
    const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) + (60 * 5)
    }, process.env.API_KEY);
    return token;
}

module.exports = get_token;