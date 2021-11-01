const jwt = require('jsonwebtoken');

const authKey = (req, res, next) => {
    const key = req.header('token');
    if(!key) return res.status(400).send('akses ditolak');
    try{
        const token = jwt.verify(key, process.env.API_KEY);
        req.user = token;
        next();
    }catch (err) {
        res.status(400).send('Token Expired')
    }
}

module.exports = authKey;
