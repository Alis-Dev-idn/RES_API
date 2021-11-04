const bcrypt = require('bcryptjs');

async function PassHast(password){

    const hast = await bcrypt.genSalt(10);
    const passHast = await bcrypt.hash(password, hast);
    return passHast;

}

async function compareHast(password ,hash){
    const data = await bcrypt.compare(password, hash);
    return data;
}

module.exports = {PassHast, compareHast};