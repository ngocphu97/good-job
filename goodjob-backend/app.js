const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true
}

// connect to mongobd
mongoose.connect('mongodb://localhost/hero');

mongoose.connection.once('open', function () {
    console.log('yeah yeah. you are in connection ...');
}).on('error', function (error) {
    console.log('error');
});