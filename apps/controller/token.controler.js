const get_token = require('../services/token.service');
const {getOneUser} = require('../services/user.service');
const {compareHast} = require('../services/pass.service');
const {UserVal} = require("../config/validation");

const getToken = async (req, res) => {
    const {error} = UserVal.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    const getData = await getOneUser(`${req.body.email}`);
    if(!getData) return res.status(401).send(`Email (${req.body.email}) tidak terdaftar!`);
    const cekPass = await compareHast(`${req.body.password}`, `${getData.password}`);
    if(!cekPass) return res.status(401).send('password wrong!');

    const token = get_token();
    res.status(200).send(token);
}

module.exports = getToken;