const {config} = require('dotenv');
config();

const Home = async (req, res) => {
    const Base_Url = process.env.BASE_URL + ':' + process.env.PORT
    res.render('index', {
        title: "Example",
        Base_Url
    });
};

module.exports = {Home};