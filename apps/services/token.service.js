const jwt = require('jsonwebtoken');

const get_token = async (req, res) => {
    const token = jwt.sign({
        exp: Math.floor(Date.now()/1000) + (60 * 5)
    }, process.env.API_KEY);
    res.header('token', token).send({token: token});
}

module.exports = get_token;