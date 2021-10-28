const bcrypt = require('bcryptjs');

function PassHast(password){
    const hast = bcrypt.genSalt(10);
    const hitHast = bcrypt.hash(password, hast);
    return hitHast;
}

function compireHast(password ,reqPass){
    const compire = bcrypt.compare(password, reqPass);
    return compire;
}

module.exports = {PassHast, compireHast};