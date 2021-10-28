const bcrypt = require('bcryptjs');

function PassHast(password){
    const hast = bcrypt.genSalt(10);
    const hitHast = bcrypt.hash(password, hast);
    return hitHast;
}

function compareHast(password ,reqPass){
    const compare = bcrypt.compare(password, reqPass);
    return compare;
}

module.exports = {PassHast, compareHast};