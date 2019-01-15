const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const heroesRoutes = require('./api/routes/heroes');
const weaponsRoutes = require('./api/routes/weapons');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect('mongodb://localhost:27017/hero', {
    useNewUrlParser: true
});

mongoose.connection.once('open', function () {
    console.log('yeah yeah. you are in connection to mongo db ...');
}).on('error', function (error) {
    console.log('error');
});

app.use('/heroes', heroesRoutes);
app.use('/weapons', weaponsRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found, you are going wrong way, ...');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: 'Not found, you are going wrong way, ...'
        }
    });
});

module.exports = app;