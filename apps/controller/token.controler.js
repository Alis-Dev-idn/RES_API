const get_token = require('../services/token.service');
const {getOneUser} = require('../services/user.service');
const {compareHast} = require('../services/pass.service');
const {UserVal} = require("../config/validation");

const getToken = async (req, res) => {
    // //validation
    // const {error} = UserVal.validate(req.body);
    // if(error) return res.status(400).send(error.details[0].message)
    // //cek user ada atau tidak
    // const cekUser = getOneUser(`${req.header('email')}`, 1);
    // if(!cekUser) return res.status(401).send('User not Found!')
    // //cek password
    // const cekToken = compareHast(`${req.header('password')}`, `${cekUser}`);
    // if(!cekToken) return res.status(401).send('password wrong!');

    const token = get_token();
    res.status(200).send('token :' + token);
}

module.exports = getToken;