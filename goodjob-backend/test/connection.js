const mongoose = require('mongoose');

// ES6 Promise

mongoose.Promise = global.Promise;

// connect to mongobd
mongoose.connect('mongodb://localhost:27017/hero', { useNewUrlParser: true });

mongoose.connection.once('open', function () {
    console.log('yeah yeah. you are in connection ...');
}).on('error', function (error) {
    console.log('error');
});