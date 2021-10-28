const express = require('express');
const MONGO = require('./apps/config/mogodb.connection');
const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');
const flash = require('connect-flash');
const methodeOverrride = require('method-override');
const session = require('express-session');
const cors = require('cors');
const cookieParse = require('cookie-parser');

const Index = require('./apps/routes/index.router');
const Node = require('./apps/routes/node.route');
const Sensor = require('./apps/routes/sensor.route');

const {config} = require('dotenv');
config();

const app = express();
const host = process.env.BASE_URL
const port = process.env.PORT

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "./apps/views"));
app.use(methodeOverrride());
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 60000}
    })
);
app.use(flash());
app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParse());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', Index);
app.use('/node', Node);
app.use('/sensor', Sensor);

app.use(function (req, res, next){
    next(createError(404));
})
app.use(function (err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
})

app.listen(port, () => {
    console.log("Server Run in >> " + host + ":" + port);
})

module.exports = app;